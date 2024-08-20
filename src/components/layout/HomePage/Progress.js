import React from 'react';
import SectionWrapper from '../../ui/SectionWrapper';
import SplitContainer from '../../ui/SplitContainer';
import Button from '../../ui/Button';
import InlineCallout from '../../ui/InlineCallout';

const Progress = () => {
  const nomadLinks = [
    {
      primaryText: 'Upfront Cost',
      link: 'https://the100club.io/',
    },
    {
      primaryText: 'Custom Designed',
      link: 'https://seantanyurong.com/',
    },
    {
      primaryText: 'Easy to Edit',
      link: 'https://www.meetyourdonna.com/',
    },
  ];

  const geekLinks = [
    {
      primaryText: 'Hosting Fees Included',
      link: 'https://seantanyurong.com/',
    },
    {
      primaryText: 'Unlimited Edits',
      link: 'https://seantanyurong.com/',
    },
    {
      primaryText: '24/7 Customer Service',
      link: 'https://www.instagram.com/orionsky_hobbies/',
    },
    {
      primaryText: 'Web Design & Development',
      link: 'https://seantanyurong.com/',
    },
    {
      primaryText: 'Google Analytics',
      link: 'https://seantanyurong.com/',
    },
    {
      primaryText: '90+ Google Page Speed Score',
      link: 'https://www.instagram.com/orionsky_hobbies/',
    },
  ];

  const renderLinkContent = (links, twoColumn) => {
    if (twoColumn) {
      return (
        <ul className='mt-3.5 text-sm font-normal grid grid-cols-2'>
          {links.map((obj, index) => {
            return (
              <li className='col-span-2 lg:col-span-1'>
                <span className='text-gray-400 text-md'>• </span>
                <a href={obj.link} target='_blank' rel='noreferrer'>
                  {obj.primaryText}
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className='mt-3.5 text-sm font-normal'>
          {links.map((obj, index) => {
            return (
              <li>
                <span className='text-gray-400 text-md'>• </span>
                <a href={obj.link} target='_blank' rel='noreferrer'>
                  {obj.primaryText}
                </a>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <SectionWrapper topMargin={true} divClassName='text-center' id='progress'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl md:text-5xl'>How does our pricing work?</h2>
        <p className='text-xl mt-4'>
          We charge $150/month for a standard 5 page small business website. If you need more, we do custom pricing
          based on the scope of work, number of additional pages, and time involved. You own your domain, content,
          listing, and profiles.
        </p>
      </div>
      <div className='mt-14 grid grid-cols-8 gap-y-16 w-full'>
        <div className='col-span-8 lg:col-span-3 self-center'>
          <SplitContainer
            addClassName='lg:border-r-0 lg:rounded-r-none'
            topContent={
              <>
                <h4 className='text-2xl'>$3000</h4>
                <p className='text-xl mt-2 font-light'>Get a small business website for a fixed price of $3000.</p>
                {renderLinkContent(nomadLinks, false)}
              </>
            }
            bottomContent={
              <>
                <p>
                  Want to find out more? <b>Book some time below</b> to discuss your ideas.
                </p>
                <Button
                  size='small'
                  primaryText='Book free consultation'
                  link='https://calendly.com/seantanyurong/one-olympus'
                  addClassName='mt-4'
                />
              </>
            }
            light={true}
          />
        </div>
        <div className='col-span-8 lg:col-span-5 self-center'>
          <SplitContainer
            topContent={
              <>
                <div className='flex items-center space-x-2.5'>
                  <h4 className='text-2xl'>$150/month</h4>
                  <InlineCallout content='MOST POPULAR' />
                </div>
                <p className='text-xl mt-2 font-light'>
                  We will design and develop a small business website for you. It will have a minimum of 5 pages.
                </p>
                {renderLinkContent(geekLinks, true)}
              </>
            }
            bottomContent={
              <>
                <p>
                  <b>If you're interested or just want to find out more</b>, book some time below. If you have an
                  existing website, we can take a look as well.
                </p>
                <Button
                  size='small'
                  primaryText='Book free consultation'
                  link='https://calendly.com/seantanyurong/one-olympus'
                  addClassName='mt-4'
                />
              </>
            }
            light={false}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Progress;
