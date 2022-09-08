import { useState } from "react";
import { UseContextProvider } from "./components/contexts/StepperContext";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Iniciar from "./components/steps/Iniciar";
import Genero from "./components/steps/Genero";
import Edad from "./components/steps/Edad";
import Final from "./components/steps/Final";
import RedSocial from "./components/steps/RedSocial";
import TiempoRedSocial from "./components/steps/TiempoRedSocial";

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Informacion Personal",
    "Genero",
    "Edad",
    "Red Social",
    "Tiempo",
    "Finalizar"
  ];

  const displayStep = (step) => {
    switch(step) {
      case 1: return <Iniciar/>
      case 2: return <Genero/>
      case 3: return <Edad/>
      case 4: return <RedSocial/>
      case 5: return <TiempoRedSocial/>
      case 6: return <Final/>
      default: 
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "siguiente" ? newStep++ : newStep--;
    //check if pasos is within bonds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="App md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep}/>
        {/* Display components */}
        <div className="my-10 p-10">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigations controls */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
