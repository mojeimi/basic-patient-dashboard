import maleAvatar from '../../assets/male_avatar.png';
import femaleAvatar from '../../assets/female_avatar.png';
import {Gender} from '../../types'

export type PatientCardProps = {
    id: number,
    name: string,
    age: number,
    gender: Gender,
  };
  
export function PatientCard({id, name, age, gender} : PatientCardProps) {
    return (
      <div className={`cursor-pointer flex flex-col md:flex-row justify-between p-8 rounded-lg shadow-lg h-auto md:h-48 w-full md:w-2/4 mx-auto bg-gray-100 hover:bg-blue-100 transition-colors duration-200`}>
        <div className="flex flex-col space-x-0 md:space-x-8 items-center md:flex-row justify-start">
          <img className="h-24 w-24 md:h-28 md:w-28 rounded-full border-4 border-black" src={gender === "M" ? maleAvatar : femaleAvatar} alt="Patient avatar" />
          <div className="flex flex-col md:space-y-4 ">
            <h1 className="text-lg sm:text-xl md:text-2xl text-black text-center md:text-left font-sans">Patient</h1>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black text-center font-sans">{name}</h1>
          </div>
        </div>
        <div className="flex md:flex-row space-x-0 items-center md:space-x-8">
          <div className="flex flex-col ">
            <div className="flex flex-row space-x-2">
              <h2 className="text-lg md:text-xl font-medium text-gray-500 font-sans">ID:</h2>
              <p className="text-lg md:text-xl font-medium text-black font-sans">{id}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <h2 className="text-lg md:text-xl font-medium text-gray-500 font-sans">Age:</h2>
              <p className="text-lg md:text-xl font-medium text-black font-sans">{age}</p>
            </div>
            <div className="flex flex-row space-x-2">
              <h2 className="text-lg md:text-xl font-medium text-gray-500 font-sans">Gender:</h2>
              <p className="text-lg md:text-xl font-medium text-black font-sans">{gender}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }