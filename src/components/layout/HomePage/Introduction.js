import YellowContainer from '../../ui/YellowContainer';
import Divider from '../../ui/Divider';
import SectionWrapper from '../../ui/SectionWrapper';

function Introduction() {
  return (
    <SectionWrapper id='about' topMargin={true}>
      <div className='grid grid-cols-7 gap-y-16 sm:gap-16 w-full'>
        {/* Left column - introduction */}
        <div className='col-span-7 lg:col-span-5'>
          <h2 className='mb-3'>Why let us design and build your website?</h2>
          <p className='mb-3 text-lg'>
            We are a team of <b>3 experienced designers and developers</b> who are passionate about creating beautiful
            and functional websites, specifically for small businesses in Asia.
          </p>
          <p className='mb-3 text-lg'>
            What we realised was that a lot of small businesses don't have the funds to spend thousands of dollars
            upfront on a new website. And the ones that did, got taken advantage of and have a terrible website that
            looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years.{' '}
            <b>
              They were in a frustrating spot - they either can't afford a good website, and if they can, they don't
              know who to trust to make something great.
            </b>
          </p>
          <p className='mb-3 text-lg'>
            That's how we came up with the $0 down and $150 a month model. It's more managable for a small business to
            handle and won't hurt their bank accounts.
          </p>
          <p className='mb-3 text-lg'>
            We help you design, develop and maintain a website, end to end. As a one-stop shop, you won't have to
            outsource additional help to anybody else, saving you time and money.
          </p>
        </div>

        {/* Right column - submenu */}
        <div className='col-span-6 lg:col-span-2'>
          <YellowContainer
            content={
              <div>
                <h4 className='mb-2'>Kenneth</h4>
                <p>
                  <i>
                    "Sean, Joseph and Jonas are very talented and passionate about what they do! Working with them was
                    very simple, as they were able to handle all website design and development."
                  </i>
                </p>
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
