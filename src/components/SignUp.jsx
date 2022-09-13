import React from 'react'
import { useSpring, animated, config } from "react-spring";
import SignUpImg from '../assets/SignUp.svg'
import { CloseIcon } from '../assets/CloseIcon';

function SignUp({ showModal, setShowModal }) {
  const getAnimation = showModal => {
    return {
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0)` : `translateY(-200%)`,
      config: config.slow
    };
  };

  const animation = useSpring(getAnimation(showModal));

  return (
    <animated.div style={animation}>
      <div className='ModalWrapper'>
        <img src={SignUpImg} alt="Sign up for an account!" />
        <h3 className='ModalHeader'>Sign Up</h3>
        <p className='SignUpText '>
          Sign up today to get access to all of our content and features!
        </p>
        <button className='className="hidden md:inline-flex relative ml-4 px-4 py-2 items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md select-none transition-colors duration-700 whitespace-nowrap text-base font-medium"' onClick={() => console.log("You signed up!")}>
          Sign Up
        </button>
        <button className='CloseModalButton' aria-label="Close modal" onClick={() => setShowModal(false)}>
          <CloseIcon />
        </button>
      </div>
    </animated.div>
  );
}

export default SignUp