import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../../ui/SectionWrapper';
import LogoImg from '../../../assets/General/Logo.png';

function Footer() {
  return (
    <footer>
      <SectionWrapper topMargin={true}>
        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 '>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-3'>
            <div className='mb-2'>
              {/* Logo */}
              <Link to='/' className='inline-block ' aria-label='Cruip'>
                {' '}
                <img className='mx-auto h-7' src={LogoImg} alt='Logo' />
              </Link>
            </div>
            <div className='text-sm text-text-main'>
              <h5 to='#' className='text-text-main text-lg font-bold mb-2'>
                Get a hand-coded website.
              </h5>
              <p to='#' className='text-text-main'>
                We design and build websites for small businesses in Asia.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          {/* Copyrights note */}
          <div className='text-sm text-text-main mr-4'>&copy; OneOlympus.com. All rights reserved.</div>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
