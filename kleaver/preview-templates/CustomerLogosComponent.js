export const CustomerLogosComponent = (data, apiData) => {
//   const { blockTitle, customerLogos } = data;

  const getGridColsClass = (size) => {
    switch (size) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
        return 'lg:grid-cols-2';
      case 3:
        return 'lg:grid-cols-3';
      case 4:
        return 'lg:grid-cols-4';
      case 5:
        return 'lg:grid-cols-5';
      default:
        return 'lg:grid-cols-6';
    }
  };

  // console.log(`Customer Logos Data: ${JSON.stringify(data)}`);

  const numberOfImages = 'logos' in data ? data.logos.length : 1;

  const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

  return (
    h('section', { class: data['background-colour'] },
      h('div', { class: 'prose lg:prose-xl mx-auto p-4 pb-8' },
        h('div', { class: 'py-8 lg:py-16 mx-auto max-w-screen-xl px-4' },
          h('h1', { class: `${fonts.title} ${data['title-colour']} mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl` }, data.title),
          h('p', { class: `${fonts.subtitle} ${data['subtitle-colour']} text-center` }, data.subtitle),
          h('div', {
            class: `grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2 ${getGridColsClass(numberOfImages)}`
          },
          'logos' in data && data.logos.map(item => (
              h('a', { href: item.link, class: `flex justify-center items-center grayscale` },
                h('img', {
                  class: `h-9 aspect-[3/2] object-contain grayscale`,
                  viewBox: '0 0 86 29',
                  fill: '',
                  src: item.logo,
                  alt: item.name
                })
              )
            ))
          )
          
        )
      )
    )
  );
};
