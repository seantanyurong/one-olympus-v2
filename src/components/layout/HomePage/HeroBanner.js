import Button from '../../ui/Button';
import BlueLink from '../../ui/BlueLink';
import SectionWrapper from '../../ui/SectionWrapper';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';

function HeroBanner() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'du5ataark',
    },
  });

  const myImage = cld.image('team');

  return (
    <SectionWrapper
      id='about'
      topMargin={false}
      sectionClassName='text-center before:block before:absolute before:-inset-1 before:bg-gradient-to-b before:from-highlight-eggshell before:to-white before:h-full before:-z-1 relative'>
      {/* Text */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Hero content */}
        <div className=' md:pt-16 '>
          {/* Section header */}
          <div className='pb-12 md:pb-16'>
            <h1 className='mb-4'>We design and build websites for small businesses in Asia.</h1>
            <div className='max-w-4xl mx-auto'>
              <p className='text-xl mb-8'>
                No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at
                $150/mo.
              </p>
              <Button
                size='large'
                primaryText='Book a free consultation'
                secondaryText='Jump on a 30-min call with our developers.'
                addClassName='justify-center mx-auto'
                link='https://calendly.com/seantanyurong/one-olympus'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <AdvancedImage
        className='mx-auto drop-shadow-3xl mb-10 rounded-lg w-6xl'
        cldImg={myImage}
        plugins={[lazyload(), responsive({ steps: 200 }), placeholder({ mode: 'blur' })]}
        alt='heroBanner'
      />

      {/* Link */}
      <BlueLink link='#projects' primaryText='Take a look at some of our past clients' size='large' />
    </SectionWrapper>
  );
}

export default HeroBanner;
