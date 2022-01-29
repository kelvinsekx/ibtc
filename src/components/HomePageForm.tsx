import * as React from 'react'
import Link from '@docusaurus/Link';


const HomepageSignUpForm = ({onSubmit, setUserMail, ifSubmitted, userMail}) => (
    <form 
        className="opacity-75 lg:w-2/3 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" 
        onSubmit={onSubmit} 
        name="newsletter" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
    >

        {ifSubmitted && <div className='bg-green-400 border-green-700'>Thanks your mail has been successfully delivered. Please, check your inbox for a small message from us. Check your promotion box if you can't find it in your primary box.</div>}
        <div hidden aria-hidden="true">
            <label>
                Don't fill this out if you're human:
                <input name="bot-field"/>
            </label>
        </div>

        <div className="mb-4">
            <label className="block py-2 font-bold mb-2" htmlFor="email">
                Signup to join our foundational original members
            </label>
            <input
                className="shadow appearance-none border rounded w-full p-3 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="email"
                name="email"
                type="email"
                value={userMail}
                required
                aria-required
                placeholder="yourmail@mail.com"
                onChange={(e)=>setUserMail(e.target.value)}
            />
        </div>

        <div className="flex items-center justify-between pt-4">
            <button
                className="bg-green-800 hover:bg-green-500 font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="submit"
            >
                Join Us
            </button>
        </div>
        <footer className='text-sm mt-4'>We are officially launching soon, read <Link to="/blog/welcome" className="hover:text-gray-800">Our welcome message to learn more</Link></footer>
    </form>
)

export default HomepageSignUpForm;
