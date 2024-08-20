import React from 'react';
import SectionWrapper from '../../ui/SectionWrapper';
import Button from '../../ui/Button';
import EggContainer from '../../ui/EggContainer';

const CTA = () => {
  return (
    <SectionWrapper topMargin={true} divClassName='text-center'>
      <EggContainer>
        <h4 className='text-3xl font-black md:text-5xl mb-4'>
          Want to get a high-performing <u>website</u>?
        </h4>
        <p className='text-xl md:text-2xl mb-8'>
          We specialize in small business web design and development for clients anywhere in Asia. Every line of code is
          written by hand to ensure the best performance, which helps bring in more customers to your site and bring
          more revenue to your business.
        </p>
        <Button
          size='large'
          primaryText='Book free consultation'
          secondaryText='Jump on a 30-min call with our developers.'
          addClassName='justify-center mx-auto'
          link='https://calendly.com/seantanyurong/one-olympus'
        />
      </EggContainer>
    </SectionWrapper>
  );
};

export default CTA;
