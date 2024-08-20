import { Link } from 'react-router-dom';
// import LogoImg from "../../../assets/General/Logo.png";
import Button from '../../ui/Button';
import BlueLink from '../../ui/BlueLink';
import SectionWrapper from '../../ui/SectionWrapper';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';

function Header() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'du5ataark',
    },
  });

  const myImage = cld.image('image_2_pburzz');

  return (
    <SectionWrapper
      topMargin={false}
      sectionClassName='md:bg-opacity-90 transition duration-300 ease-in-out pt-8 pb-12 bg-highlight-eggshell'>
      <div className='z-99 flex-col sm:flex-row flex items-center justify-between md:h-20 relative'>
        {/* Site branding */}
        <div className='shrink-0 mr-4 '>
          {/* Logo */}
          <Link to='/' className='flex items-center relative'>
            <AdvancedImage
              className='mx-auto h-20'
              cldImg={myImage}
              plugins={[responsive({ steps: 200 }), placeholder({ mode: 'blur' })]}
              alt='logo'
            />
            <div className='whitespace-nowrap -rotate-2 absolute bg-gradient-to-r from-highlight-orange to-highlight-sunlight py-1 px-4 rounded-md text-sm text-white font-semibold tracking-widest flex items-center -left-[110%] mx-auto sm:-left-[20px] -bottom-[45px]'>
              {[...Array(5)].map((x, i) => (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#ffcd05' className='w-4 h-4' key={i}>
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                    clipRule='evenodd'
                  />
                </svg>
              ))}
              <span className='ml-1'> "NO.1 HAND-CODED WEBSITES"</span>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className='z-99 flex grow pt-16 sm:pt-0'>
          <ul className='flex grow justify-end flex-wrap items-center'>
            <li>
              <BlueLink addClassName='px-3' link='#projects' primaryText='Browse projects' size='small' />
            </li>
            <li>
              <Button
                size='small'
                primaryText='Book consultation'
                link='https://calendly.com/seantanyurong/one-olympus'
              />
            </li>
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
}

export default Header;
