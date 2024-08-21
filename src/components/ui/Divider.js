import React from 'react';

const Divider = (props) => {
  return (
    <span
      className={`block bg-gradient-to-r from-[#5AB2F7] to-[#5CE1E6] h-1 w-40 rounded-full ${props.addClassName}`}></span>
  );
};

export default Divider;
