import React from 'react';
import {useStepperContext} from '../contexts/StepperContext';

export default function Details() {

  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
  <>
    <h1 className='text-center font-bold text-gray-700'>¿Cual es su sexo?</h1>

    <form className="flex flex-col space-y-6 mt-10">
      
      <div className="flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold text-gray-500 text-xs uppercase ml-3">
          Masculino
        </h6>
        <input
              onChange={handleChange}
              value={userData["masculino"] || ""}
              name="masculino"
              type="checkbox"
              className="bg-green-700"
            />
      </div>
      
      <div className="flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
          Femenino
        </h6>
        <input
            onChange={handleChange}
            value={userData["femenino"] || ""}
            name="femenino"
            type="checkbox"
            className=""
          />
      </div>

      <div className="flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
          No Binario
        </h6>
        <input
            onChange={handleChange}
            value={userData["noBinario"] || ""}
            name="noBinario"
            type="checkbox"
            className=""
          />
      </div>
    </form>
  </>
  );
}
