import React from 'react'
import SignInImg from '../assets/SignIn.svg';
import { useSpring, animated, config } from "react-spring";
import { EmailInput, PasswordInput } from "./TextFields";

function SignIn() {
    const getAnimation = () => {
        return {
          opacity: 1,
        //   transform: `translateY(-100%)`,
          config: config.slow
        };
      };
    const animation = useSpring(getAnimation());
    return (
        <animated.div style={animation}>
            <div className='ColumnModalWrapper ModalWrapper'>
                <div className='container' >
                    <h3 className='ModalHeader'>Sign In</h3>
                    <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
                    <PasswordInput label="Password" />
                    <button className="hidden md:inline-flex items-center px-4 py-4  whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 select-none">
                        Sign Up
                    </button>
                    <button className="hidden md:inline-flex relative ml-4 px-8 py-2 items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md select-none transition-colors duration-700 whitespace-nowrap text-base font-medium">
                        Sign In
                    </button>
                </div>
                <img src={SignInImg} alt="Sign in to your account" />
            </div>
        </animated.div>
    );
}

export default SignIn