import React from 'react';
import {useStepperContext} from '../contexts/StepperContext';


export default function RedSocial() {

    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
  return (
    <>
    
        <h1 className='text-center font-bold text-gray-700'>De las siguientes opciones, ¿cual red social consideras tu favorita?</h1>
        <form className="flex flex-col space-y-6 mt-10">
      
        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold text-gray-500 text-xs uppercase ml-3">
            Facebook
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionA"] || ""}
                name="opcionA"
                type="checkbox"
                className="bg-green-700"
                />
        </div>
      
        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            Instagram
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionB"] || ""}
                name="opcionB"
                type="checkbox"
                className=""
            />
        </div>

        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            Tiktok
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionC"] || ""}
                name="opcionC"
                type="checkbox"
                className=""
            />
        </div>

        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            Twitter
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionD"] || ""}
                name="opcionD"
                type="checkbox"
                className=""
            />
        </div>

        <div className="flex flex-row-reverse items-center justify-end">
            <h6 className="font-bold  text-gray-500 text-xs uppercase ml-3">
            WhatsApp
            </h6>
            <input
                onChange={handleChange}
                value={userData["opcionE"] || ""}
                name="opcionE"
                type="checkbox"
                className=""
            />
        </div>
    </form>
    
    </>
  )
}
