import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { BackButton } from './BackButton';
import { RefreshButton } from './RefreshButton';
import { Patient } from '../../types'
import { PatientCard, PatientList, Visualizer } from '../../components';

//The useCallback hook was used to memoize the handleRefresh function,
//ensuring that it is not re-created on every render but only when its dependencies change.
// This could potentially optimize performance if this component re-renders frequently
export function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState<Patient  | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const handlePatientSelect = (patient: Patient ) => {
    setSelectedPatient(patient);
  };

  const handleRefresh = useCallback(async () => {
    if (selectedPatient) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/${selectedPatient.id}`);
        const data = await response.json();
        setSelectedPatient(data);
        setError(null);
      } catch (error : unknown) {
        if (error instanceof Error){
            setError(error);
        }
      }
      setLoading(false);
    }
  }, [selectedPatient]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setPatients(data);
        setError(null);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: could not retrieve patient data</div>;

  return (
    <div className="flex flex-col h-full w-full">
      {selectedPatient ?
       (
        <>
          <div className="flex items-center justify-between w-full">
            <BackButton onClick={() => setSelectedPatient(null)} />
            <PatientCard {...selectedPatient} />
            <RefreshButton onClick={handleRefresh} />
          </div>
          <div className="w-full h-1/2 mt-10">
            <Visualizer pointCloudData={selectedPatient.pointCloudData} videoUploadStatus={selectedPatient.videoUploadStatus} scoliosisPredictionStatus={selectedPatient.scoliosisPredictionStatus} />
          </div>
        </>
      ) :
      (
        <PatientList onPatientSelect={handlePatientSelect} patients={patients} />
      )}
    </div>
  );
}
