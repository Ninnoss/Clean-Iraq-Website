import { useState } from 'react'

export default function SuggestionForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
  
    return (
        <div >
            <h1 className=' text-center font-bold text-[#23262F] text-4xl my-10'>وين تريد تكون حملتنه الجاية؟</h1>
      <form className='max-w-[400px] my-0 mx-auto max-[320px]:max-w-[90%] w-[77%]'>
        <label htmlFor="email" className=' block w-[100%] mb-[10px] text-right text-[#777E90]'>البريد الالكتروني</label>
        <input
        className=' block w-[100%] mb-[10px] bg-[#F4F5F6] rounded-[10px] h-8 
        placeholder-slate-400
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500
      text-sm shadow-sm
        '
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
  
        <label htmlFor="message" className=' block w-[100%] mb-[10px] text-right text-[#777E90]'>رسالتك</label>
        <textarea
        className=' block w-[100%] mb-[10px] bg-[#F4F5F6] rounded-[10px] 
        focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500
      text-sm shadow-sm
      h-[200px]
        '
          id="message"
          value={message}
          onChange={handleMessageChange}
          rows="4"
          required
        ></textarea>
        <div className='grid place-items-center'>
        <button type="submit" className='w-[100%] mb-[10px] bg-primaryGreen rounded-3xl max-w-[25%] h-11 text-md text-[#FCFCFD]'>ارسل الان</button>
      </div>
      </form>
      </div>
    );
}
