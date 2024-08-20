import React from 'react';

const InlineCallout = (props) => {
  return (
    <h4 className='px-2 py-1 text-sm md:text-base text-white bg-highlight-orange uppercase rounded-lg'>
      {props.content}
    </h4>
  );
};

export default InlineCallout;
