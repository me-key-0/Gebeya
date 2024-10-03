
import img from '../../../assets/L_img/profile.jpg';
import { FaStar } from 'react-icons/fa';

const AgentsList = [
    {
        id: 1,
        name: 'Samson ',
        rate: 4.3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 2,
        name: 'Peter',
        rate: 3.7,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 3,
        name: 'Paul',
        rate: 5.0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 4,
        name: 'John',
        rate: 4.7,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 5,
        name: 'James ',
        rate: 4.0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
    {
        id: 6,
        name: 'Simon',
        rate: 4.5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate corporis repellat.',
        img: img
    },
];

const Agents = () => {
    return (
        <div className="py-8 mb-10 bg-white">
            <div className='flex justify-center mb-8'>
                <h1 className="text-4xl font-bold text-green-600">Meet Our Agents</h1>
            </div>

            <div className='flex justify-center flex-wrap'>
                {AgentsList.map((data) => (
                    <div key={data.id} className='m-5 w-80'> 
                        <div className='bg-gray-100 border border-gray rounded-2xl shadow-lg transition-transform transform hover:scale-105'>
                            <div className='flex flex-col items-center p-4'>
                                <img src={data.img} alt={data.name} className='w-28 h-28 object-cover rounded-full border-4 border-green-500' />
                                <div className='flex items-center p-2 gap-2'>
                                    <FaStar className='text-yellow-500' />
                                    <span className='font-semibold text-lg'>{data.rate}</span>
                                </div>
                                <h1 className='font-semibold text-xl text-green-700'>{data.name}</h1>
                                <p className='text-gray-600 p-2 text-center'>{data.text}</p>
                                <button className="text-white mt-2 shadow-md hover:shadow-lg bg-gradient-to-l from-[#ecc515] to-[#399c73] rounded-full px-5 py-2 transition-all">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Agents;

