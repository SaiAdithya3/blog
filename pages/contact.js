import React, {useRef, useState, useEffect} from 'react';

import { submitForm } from '../services';

function contact() {
    // const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [showSuccessMessage,setShowSuccessMessage] = useState(false);
    const messageEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const subjectEl = useRef();

    const handleFormSubmission = () => {
        setError(false);
    
        const { value: message } = messageEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { value: subject } = subjectEl.current;
        
    
        if(!message || !name || !email || !subject) {
          setError(true);
          return;
        }
    
        const commentObj = {name, email, subject, message};
    
    
        submitForm(commentObj)
           .then((res)=>{
             setShowSuccessMessage(true);
             setTimeout(()=>{
               setShowSuccessMessage(false);
             }, 5000);
           })
      };

    return (
        <div className="">
            
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} arial-label="Please input name" name='name' ref={nameEl} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" name='email' ref={emailEl} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col  md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Subject</label>
                            <input tabIndex={0} arial-label="Please input country name" name='subject' ref={subjectEl} type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input subject name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" name='message' ref={messageEl} role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    {error && <p className='text-xs text-red-500'> All fields are required.</p> }
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" onClick={handleFormSubmission}>SUBMIT</button>
                        {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Message Sent. Thank you</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;
