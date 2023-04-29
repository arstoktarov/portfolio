import React from 'react';



const Button = ({title = 'Button', ...props}) => {


  return (
    <button {...props} href="#projects" className='border relative link px-2 py-1 text-white hover:text-gray-500'>
        <p className='relative'>{`${title}`}</p>
    </button>
  )
}

export default Button;