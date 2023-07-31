import {Dashboard} from './components'
import maleAvatar from './assets/male_avatar.png'
import medicalLogo from './assets/medical_logo.svg'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md mb-2">
      <div className="flex items-center">
        <img src={medicalLogo} alt="Medical Logo" className="w-16 h-16" />
      </div>
      <div className="flex items-center">
        <img src={maleAvatar} alt="Doctor Avatar" className="w-12 h-12 rounded-full mr-4" />
        <p className="text-lg font-semibold">Dr. Ojeimi</p>
      </div>
    </header>
  );
}

//Deciding on the structure of the UI based on the selected patient state.
// If a patient is selected, the patient's card, a back button, and a refresh button are displayed, along with a visualizer component. 
// If no patient is selected, a patient list is shown. 
// This kind of conditional rendering is pushes you to decide on the best way to structure the UI to provide an intuitive user experience.
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex flex-col items-center justify-center flex-grow">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;