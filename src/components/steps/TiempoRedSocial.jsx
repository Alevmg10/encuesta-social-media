import React from 'react';
import {useStepperContext} from '../contexts/StepperContext';

export default function TiempoRedSocial() {


    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

  return (
    <>
    
    <h1 className='text-center font-bold text-gray-700'>¿Cuanto tiempo al dia pasas en las diferentes redes sociales?</h1>
    <form className="flex flex-col space-y-6 mt-10">
      
        <div className="">
            <h6 className="font-bold text-gray-600 text-xs uppercase ml-3">
            Facebook
            </h6>
            <div className='flex mt-2'>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    Menor o igual a 1 hora
                    <input
                        onChange={handleChange}
                        value={userData["opcionA"] || ""}
                        name="facebook"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    1-3 horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionB"] || ""}
                        name="facebook"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    3+ horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionC"] || ""}
                        name="facebook"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    No la uso
                    <input
                        onChange={handleChange}
                        value={userData["opcionD"] || ""}
                        name="facebook"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
            </div>
        </div>

        <div className="">
            <h6 className="font-bold text-gray-600 text-xs uppercase ml-3">
            Instagram
            </h6>
            <div className='flex mt-2'>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    Menor o igual a 1 hora
                    <input
                        onChange={handleChange}
                        value={userData["opcionA"] || ""}
                        name="instagram"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    1-3 horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionB"] || ""}
                        name="instagram"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    3+ horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionC"] || ""}
                        name="instagram"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    No la uso
                    <input
                        onChange={handleChange}
                        value={userData["opcionD"] || ""}
                        name="instagram"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
            </div>
        </div>

        <div className="">
            <h6 className="font-bold text-gray-600 text-xs uppercase ml-3">
            Tiktok
            </h6>
            <div className='flex mt-2'>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    Menor o igual a 1 hora
                    <input
                        onChange={handleChange}
                        value={userData["opcionA"] || ""}
                        name="tiktok"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    1-3 horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionB"] || ""}
                        name="tiktok"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    3+ horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionC"] || ""}
                        name="tiktok"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    No la uso
                    <input
                        onChange={handleChange}
                        value={userData["opcionD"] || ""}
                        name="tiktok"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
            </div>
        </div>
        <div className="">
            <h6 className="font-bold text-gray-600 text-xs uppercase ml-3">
            Twitter
            </h6>
            <div className='flex mt-2'>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    Menor o igual a 1 hora
                    <input
                        onChange={handleChange}
                        value={userData["opcionA"] || ""}
                        name="twitter"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    1-3 horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionB"] || ""}
                        name="twitter"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    3+ horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionC"] || ""}
                        name="twitter"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    No la uso
                    <input
                        onChange={handleChange}
                        value={userData["opcionD"] || ""}
                        name="twitter"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
            </div>
        </div>
        <div className="">
            <h6 className="font-bold text-gray-600 text-xs uppercase ml-3">
            WhatsApp
            </h6>
            <div className='flex mt-2'>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    Menor o igual a 1 hora
                    <input
                        onChange={handleChange}
                        value={userData["opcionA"] || ""}
                        name="whatsapp"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    1-3 horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionB"] || ""}
                        name="whatsapp"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    3+ horas
                    <input
                        onChange={handleChange}
                        value={userData["opcionC"] || ""}
                        name="whatsapp"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
                <label className='flex flex-row-reverse justify-end items-center font-bold text-gray-500 text-xs uppercase ml-3'>
                    No la uso
                    <input
                        onChange={handleChange}
                        value={userData["opcionD"] || ""}
                        name="whatsapp"
                        type="radio"
                        className="accent-green-600 mr-2"
                        />
                </label>
            </div>
        </div>
    </form>
    
    </>
  )
}
