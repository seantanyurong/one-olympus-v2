import YellowContainer from '../../ui/YellowContainer';
import BlueLink from '../../ui/BlueLink';
import Divider from '../../ui/Divider';
import SectionWrapper from '../../ui/SectionWrapper';

function Introduction() {
  const submenuLinks = [
    {
      primaryText: 'LinkedIn.',
      link: 'https://www.linkedin.com/in/seantanyurong/',
    },
    {
      primaryText: 'LinkedIn.',
      link: 'https://www.linkedin.com/in/jonas-tan-kah-kai/',
    },
    {
      primaryText: 'LinkedIn.',
      link: 'https://www.linkedin.com/in/joesurf/',
    },
  ];

  const submenuLinkContent = () => {
    return (
      <ul>
        {submenuLinks.map((obj, index) => {
          return (
            <li>
              • <BlueLink primaryText={obj.primaryText} link={obj.link} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <SectionWrapper
      id='about'
      topMargin={true}
      // divClassName="grid grid-cols-7 gap-y-16 sm:gap-16 w-full"
    >
      <div className='grid grid-cols-7 gap-y-16 sm:gap-16 w-full'>
        {/* Left column - introduction */}
        <div className='col-span-7 lg:col-span-5'>
          <h2 className='mb-3'>Who will help design and build your website?</h2>
          <p className='mb-3 text-lg'>
            <i>Written by ChatGPT</i> - Hey, my name is Sean, and this is my retirement dream. As a 23-year-old student
            and full stack developer from Singapore, I've always pondered whether there's more to life than the mundane
            9-5 grind that often leads to a dull retirement. I refuse to believe that our existence should be reduced to
            being old folks sleeping on a pile of money.
          </p>
          <p className='mb-3 text-lg'>
            That's where Dungeon House comes in — an exploration of the possibilities that lie beyond conventional work
            and hobbies. I'm on a quest to discover if we can find greater meaning, purpose, and happiness throughout
            our lives by blending our passions with our work.{' '}
            <b>
              Dungeon House is a unique experiment, combining a vibrant hobby community with a modern co-working space.
            </b>
          </p>
          <p className='mb-3 text-lg'>
            As I embark on this exciting journey, I'll be sharing every step along the way. My goal is not only to bring
            Dungeon House to life but also to inspire others to create their own incredible hobby-centric co-working
            spaces worldwide.
          </p>

          <p className='mb-3 text-lg'>
            If you feel a stirring in your soul and a desire to be part of this transformative adventure, I
            wholeheartedly invite you to join me.
            <b>
              Together, let's create a concrete sanctuary where geeks, remote workers, and passionate individuals can
              thrive, enjoying a fulfilling life that seamlessly combines work and play.
            </b>
          </p>
        </div>

        {/* Right column - submenu */}
        <div className='col-span-6 lg:col-span-2'>
          <YellowContainer
            content={
              <div>
                <h4 className='mb-2'>Our LinkedIns</h4>
                {submenuLinkContent()}
              </div>
            }
          />
        </div>
      </div>
      <Divider addClassName='mt-16' />
    </SectionWrapper>
  );
}

export default Introduction;
