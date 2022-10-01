import React from 'react';
import {useStepperContext} from '../contexts/StepperContext';


export default function Edad() {
    
    const { userData, setUserData } = useStepperContext();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
  return (
    <>
    
        <h1 className='text-center font-bold text-gray-700'>¿En cual rango se ubica su edad?</h1>
        <form className="flex flex-col space-y-6 mt-10">
      
        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold text-gray-500 text-xs uppercase ml-3">
            18-25
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionA"] || ""}
                name="edad"
                type="radio"
                className="accent-green-600"
                />
        </div>
      
        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            26-33
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionB"] || ""}
                name="edad"
                type="radio"
                className="accent-green-600"
            />
        </div>

        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            34-40
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionC"] || ""}
                name="edad"
                type="radio"
                className="accent-green-600"
            />
        </div>

        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            40+
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionD"] || ""}
                name="edad"
                type="radio"
                className="accent-green-600"
            />
        </div>
    </form>
    
    </>
  );
}
