function GamesGallery() {
  const featureList = [
    {
      text: '',
      highlightedText: 'Top 3% Developer on Upwork',
      textFirst: false,
    },
    {
      text: 'Functional ',
      highlightedText: 'UI/UX Designers',
      textFirst: true,
    },
    {
      text: '',
      highlightedText: 'Landing Page Lovers',
      textFirst: false,
    },
    {
      text: 'Experienced',
      highlightedText: 'Copywriters',
      textFirst: true,
    },
    {
      text: '',
      highlightedText: 'Experienced with Wordpress, Shopify, Unbounce, etc.',
      textFirst: false,
    },
    {
      text: 'Multiple',
      highlightedText: 'AWS Certifications',
      textFirst: true,
    },
    {
      text: '',
      highlightedText: 'Pardot Certified',
      textFirst: true,
    },
    {
      text: 'Familiar with',
      highlightedText: 'eCommerce Management',
      textFirst: true,
    },
    {
      text: 'Efficient',
      highlightedText: 'Coders',
      textFirst: true,
    },
    {
      text: 'from 4th Ranked University',
      highlightedText: 'Computing Degree',
      textFirst: false,
    },
    {
      text: 'Degree',
      highlightedText: 'First-class Honours',
      textFirst: false,
    },
    {
      text: '',
      highlightedText: 'Graphic Designers',
      textFirst: true,
    },
    {
      text: '',
      highlightedText: 'Figma Users',
      textFirst: true,
    },
    {
      text: 'Experts',
      highlightedText: 'Python Automation',
      textFirst: false,
    },
  ];

  const renderFeatures = () => {
    const rows = [];
    for (let i = 0; i < featureList.length; i += 2) {
      const feature1 = featureList[i];
      const feature2 = featureList[i + 1];
      rows.push(
        <div className='flex gap-2 md:gap-3 justify-center mb-2 md:mb-3'>
          <div className='w-full shrink bg-highlight-eggshell p-4 rounded-md rounded-l-none'></div>
          <p className='shrink-0 border-highlight-darkEggshell shadow-highlight-eggshell border-2 px-3 p-1 md:p-4 rounded-md text-sm md:text-2xl font-bold text-text-main'>
            {feature1.textFirst ? (
              <>
                "{feature1.text} <mark className='bg-highlight-yellow'>{feature1.highlightedText}</mark>
                ."
              </>
            ) : (
              <>
                "<mark className='bg-highlight-yellow'>{feature1.highlightedText}</mark> {feature1.text}
                ."
              </>
            )}
          </p>
          <p className='shrink-0 border-highlight-darkEggshell shadow-highlight-eggshell border-2 px-3 p-1 md:p-4 rounded-md text-sm md:text-2xl font-bold text-text-main'>
            {feature2.textFirst ? (
              <>
                "{feature2.text} <mark className='bg-highlight-yellow'>{feature2.highlightedText}</mark>
                ."
              </>
            ) : (
              <>
                "<mark className='bg-highlight-yellow'>{feature2.highlightedText}</mark> {feature2.text}
                ."
              </>
            )}
          </p>
          <div className='w-full shrink bg-highlight-eggshell p-4 rounded-md rounded-r-none'></div>
        </div>,
      );
    }
    return rows;
  };

  return <section className='mt-16'>{renderFeatures()}</section>;
}

export default GamesGallery;
