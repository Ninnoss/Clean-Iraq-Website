
import { GrFormClose } from 'react-icons/gr'
import ContactForm from './ContactForm/ContactForm'


export default function Modal({open, onClose}) {
  return (
    <div 
     className={`fixed inset-0 flex justify-center items-center transition-colors z-10 ${open ? "visible bg-black/20" : "invisible"}`}>
        <div 
        onClick={e => e.stopPropagation}
        className={` bg-white rounded-xl shadow p-6 transition-all ${open ? " scale-100 opacity-100" : " scale-125 opacity-0"}`}>
             <h1 className=' text-center font-bold text-[#191C1A] text-Heading-6 absolute top-2 right-2 p-1'>
              تواصل معنا
              </h1>
            <button 
            onClick={onClose}
            className=' absolute top-2 left-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-600'>
                <GrFormClose size={30}/>
            </button>
            <ContactForm open={open} onClose={onClose}/>

        </div>
    </div>
  )
}
