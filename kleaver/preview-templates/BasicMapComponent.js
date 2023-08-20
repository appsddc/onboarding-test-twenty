export const BasicMapComponent = (data, apiData) => {
  let sectionClass;
  switch (data['background-colour']) {
    case 'primary':
      sectionClass = 'w-full bg-bgPrimary';
      break;
    case 'secondary':
      sectionClass = 'w-full bg-bgSecondary';
      break;
    case 'tertiary':
      sectionClass = 'w-full bg-bgTertiary';
      break;
    default:
      sectionClass = 'w-full bg-bgDefault';
      break;
  }

  // Extract the src attribute from the data.iframe HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.iframe, 'text/html');
  const src = doc.querySelector('iframe').getAttribute('src');

  const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

  return (
      h('section', 
      { className: 'w-full bg-bgDefault' },
      h(
        'div', 
        { className: 'text-center prose lg:prose-xl mx-auto p-4' },
        h('h1', { className: `${fonts.title}`}, data.title),
        h('p', { className: `${fonts.subtitle}`}, data.address)
      ),
      h(
        'div', 
        { className: 'relative w-full prose lg:prose-xl mx-auto pb-8 p-4'},
        h(
          'div', 
          { className: '' },
          h(
            'div', 
            { className: 'h-96 w-full'}, 
            h('iframe', {
              src,
              frameborder: '0',
              allowfullscreen: true,
              class: 'h-full w-full rounded-lg',
              style: {
                position: 'relative',
                top: '0',
                left: '0'
              }
            }),
            document.querySelector('iframe').removeAttribute('width'),
            document.querySelector('iframe').removeAttribute('height')
          )
        )
      ),
      )
      );
      
      











  const old = (
    h('section', { class: 'w-full' },
      h('div', { class: 'prose lg:prose-xl mx-auto p-4' },
        h('div', { class: 'grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12' },
          h('div', { class: 'mr-auto place-self-center lg:col-span-7 mb-auto' },
            h('h1', { class: 'max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white' }, data.title),
            h('p', { class: 'max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400' }, data.address)
          ),
          h('div', { class: 'lg:mt-0 lg:col-span-5 lg:flex' },
            h('div', { class: 'relative h-0 w-full pb-[56.25%]', style: { maxWidth: '100%' } },
              h('iframe', {
                src,
                frameborder: '0',
                allowfullscreen: true,
                class: 'h-full w-full min-h-md',
                style: {
                  position: 'relative',
                  top: '0',
                  left: '0'
                }
              })
            )
          )
        )
      )
    )
  );
};
