import React from 'react'
import { useSpring, animated, config } from "react-spring";
import SignUpImg from '../assets/SignUp.svg'
import { EmailInput, PasswordInput } from "./TextFields";

function SignUp() {
  const getAnimation = () => {
    return {
      opacity: 1,
      // transform: `translateY(-100%)`,
      config: config.slow
    };
  };

  const animation = useSpring(getAnimation());

  return (
    <animated.div style={animation}>
      <div className='ModalWrapper ColumnModalWrapper'>
        <div>
          <h3 className='ModalHeader'>Sign Up</h3>
          <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
          <PasswordInput label="Password" />
          <button className='className="hidden md:inline-flex relative ml-4 px-4 py-2 items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md select-none transition-colors duration-700 whitespace-nowrap text-base font-medium"' onClick={() => console.log("You signed up!")}>
            Sign Up
          </button>
        </div>
        <img src={SignUpImg} alt="Sign up for an account!" />
      </div>
    </animated.div>
  );
}

export default SignUp