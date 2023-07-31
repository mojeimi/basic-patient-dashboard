import { PatientCard } from '../PatientCard';
import { Patient } from '../../types'

type PatientListProps = {
    onPatientSelect: (patient: Patient) => void,
    patients: Patient[]
  };
  
export function PatientList({ onPatientSelect, patients }: PatientListProps) {

  const handlePatientClick = (patient: Patient) => { // to communicate with the dashboard
    onPatientSelect(patient);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-auto space-y-4">
      {patients.map((patient) => (
        <div className="w-full flex justify-center" key={patient.id} onClick={() => handlePatientClick(patient)} >
          <PatientCard id={patient.id} age={patient.age} gender={patient.gender} name={patient.name}/>
        </div>
      ))}
    </div>
  );
}





