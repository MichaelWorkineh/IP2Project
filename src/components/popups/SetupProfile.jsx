import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SetupProfile = ({isAbuse}) => {
    
    const [isOpen, setIsOpen] = useState(true);

    const onClose  = () => {
        setIsOpen(false);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

   

    if (!isAbuse || !isOpen) return null;

    return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] bg-white z-999'>
            <div className='flex justify-end'><button className='text-gray-500 text-xl place-self-end pr-5 pt-5' onClick={onClose}>X</button></div>
            <div className='pl-5'>
                <h1 className='font-bold '>Report abuse</h1>
                <div className='text-sm p-5'>
                    Flagged content is reviewed by Udemy staff to determine whether it violates Terms of Service or Community Guidelines. If you have a question or technical issue, please contact our 
                    <span className='text-blue-700 underline'>Support team here.</span>
                </div>
                <div className='text-sm font-bold'>
                    <form action="">
                        <label className='mx-3' htmlFor="">Issue type</label>
                        <input  className="m-3 border border-gray-500 w-[90%] py-2 "placeholder='Select an issue' type="text" />
                        <label className='mx-3' htmlFor="">Issue details</label>
                        <textarea  className="m-3 border border-gray-500 w-[90%] py-2 "placeholder='Select an issue' type="text" rows={3}/>
                    </form>
                    <div className='m-3 flex justify-end'>
                        <button onClick={onClose}>Cancel</button>
                        <button className='m-3 text-white py-2 px-3 bg-black'>Submit</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SetupProfile