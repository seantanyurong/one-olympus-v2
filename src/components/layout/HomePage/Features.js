import React from 'react';
import SectionWrapper from '../../ui/SectionWrapper';
import Feature from '../../ui/Feature';

const Features = () => {
  const FeatureContent = [
    {
      primaryText: 'The 100 Club',
      bodyText:
        'A private mastermind community for founders in Singapore. We buildt a website and membership platform with a directory, onboarding system and more.',
      image: '100club',
      link: 'https://the100club.io/',
    },
    {
      primaryText: 'Engroup Holdings',
      bodyText:
        'A holding company that owns and operates a portfolio of businesses in the funeral industry. We handled the design, copywriting and development of the website.',
      image: 'Engroup',
      link: 'https://www.engroup.sg/',
    },
    {
      primaryText: 'Teh Peng Club',
      bodyText:
        'They help telegram communities engage members by matching them for 1:1 chats every month. We were brought in to help design and develop a landing page within 3 days.',
      image: 'TehPengClub',
      link: 'https://www.tehpengclub.com/',
    },
  ];

  return (
    <SectionWrapper topMargin={true} id='projects'>
      <h2>Here are some of our past projects.</h2>
      <div className='mt-8 grid grid-cols-9 gap-y-16 sm:gap-16 w-full'>
        {FeatureContent.map((feature, index) => {
          return (
            <div className='col-span-9 lg:col-span-3'>
              <Feature
                primaryText={feature.primaryText}
                bodyText={feature.bodyText}
                image={feature.image}
                link={feature.link}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Features;
