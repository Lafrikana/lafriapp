import { useState } from 'react';
import Cookies from 'universal-cookie';
import consts from 'consts';

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState('');

  return (
    <div className="block bg-white w-full flex flex-col content-center justify-center">
        <form className='flex flex-col content-center justify-center self-center rounded-lg border-4 border-gray-100 w-144 h-80 shadow-2xl bg-white p-6'>
            <p className='text-center mb-6'>
                <span className='font-normal text-gray-700'>User: </span>
                <span className='font-bold text-gray-500'>L&apos;AFRIKANA</span>
            </p>
            <div className="form-group mb-6">
                <input type="password" className="form-control block
                    w-full
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border-2 border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none outline-none" id="exampleInput90"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="
                w-auto
                px-10
                py-4
                bg-blue
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                flex
                self-center
                ease-in-out"
                onClick={(e) => {
                    e.preventDefault();
                    const cookies = new Cookies();
                    cookies.set(consts.SiteReadCookie, password, {
                    path: '/',
                    });
                    window.location.href = redirectPath ?? '/';
                }}>
            Log in</button>
        </form>
    </div>
  )
};

export default Login;