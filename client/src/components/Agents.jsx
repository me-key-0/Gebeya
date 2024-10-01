import img from '../assets/bg/profile.jpg'
import { FaStar } from 'react-icons/fa';



const AgentsList=[
    {
        id:1,
        name:'Ella Ballard',
        rate:4.3,
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat .',
        img:img
    },
    {
        id:2,
        name:'Rodney Matthews',
        rate:3.7,
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat .',
        img:img
    },
    {
        id:3,
        name:'Thomas Scott',
        rate:5.0,
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat .',
        img:img
    },
    {
        id:4,
        name:'Maria Wright',
        rate:4.7,
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat i',
        img:img
    },
]
const Agents = () => {
  

   
    return ( 
        <div className="py-10 mb-10 ">
            <div>
                {/* header section */}
                <div className='flex justify-center'>
                   
                    <h1 className="text-3xl font-mono text-green-500">Meet Our Agents</h1>
                    
                </div>
                {/* Agents */}
                <div className='flex justify-center'>
                   {AgentsList.map((data)=>(
                    <div key={data.id} className='m-5 flex'>
                        <div className=' bg-gray-200 rounded-2xl pb-4'>

                        <div className='flex flex-col items-center' >
                            <img src={data.img} className='w-full h-70 p-2 drop-shadow-md rounded-full '/>
                            <div className='flex items-center p-2 gap-3'>

                            <FaStar className='text-yellow-500'/>
                            <span>{data.rate}</span>
                            </div>
                        <div className='flex flex-col gap-1 mx-auto'>
                            <h1 className='font-mono  text-2xl p-1'>{data.name}</h1>
                            <p className=' font-thin p-2'>{data.text}</p>
                        </div>
                        <div className='flex mx-auto '>
                        <button className="mx-auto text-white py-1 border-b border-r shadow-xl hover:duration-300 hover:scale-110 bg-gradient-to-l from-[#ecc515] to-[#399c73] rounded-2xl px-5 py-1 " >
              Read More
            </button>
                        </div>
                        </div>
                        </div>

                    </div>
                   ))}
                </div>
                
            </div>
        </div>
     );
}
 
export default Agents;