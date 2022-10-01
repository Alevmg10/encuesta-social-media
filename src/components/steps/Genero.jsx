import React from 'react';
import {useForm} from 'react-hook-form';
import {useStepperContext} from '../contexts/StepperContext';


export default function Genero() {

  const {register, handleSubmit} = useForm();

  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
  <>
    <h1 className='text-center font-bold text-gray-700'>¿Cual es su sexo?</h1>

    <form className="flex flex-col space-y-6 mt-10">
      <label className="container flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold text-gray-500 text-xs uppercase ml-3">
          Masculino
        </h6>
        <input 
            onChange={handleChange}
            value={userData["masculino"]}
            name="genero"
            type="radio"
            className="accent-green-600"
          />
      </label>
      
      <label className="flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
          Femenino
        </h6>
        <input
            onChange={handleChange}
            value={userData["femenino"]}
            name="genero"
            type="radio"
            className="accent-green-600"
          />
      </label>

      <label className="flex flex-row-reverse items-center justify-end">
        <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
          No Binario
        </h6>
        <input
            onChange={handleChange}
            value={userData["noBinario"]}
            name="genero"
            type="radio"
            className="accent-green-600"
          />
      </label>
    </form>
  </>
  );
}
