import { useForm } from 'react-hook-form';
import { useStepperContext } from '../contexts/StepperContext';


export default function Iniciar() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const {userData, setUserData} = useStepperContext();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]:value});
  };

  // const onSubmit = (values) => {
  //   setFormValues(values);
  // };

  return (
    <form  className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Nombre
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["nombre"]}
            type="text"
            name="nombre"
            placeholder="Primer Nombre"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            // {...register('nombre', {
            //   required: true
            //   })
            // }
          />
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Apellido
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["apellido"]}
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            // {...register('apellido', {
            //   required: true
            //   })
            // }
          />
          {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Email
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["email"]}
            name="email"
            placeholder="Email"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            // {...register('email', {
            //   required: true,
            //   pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            //   })
            // }
          />
          {errors.email?.type === 'pattern' && <p>Ingrese un email valido</p>}
        </div>
      </div>
    </form>
  );
}
