export const IframeComponent = (data, apiData) => {
  
  const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';
  
  const hasIframe = (src) => (
    h('section', 
    { className: `w-full bg-bgDefault ${data['background-colour']}` },
    h(
      'div', 
      { className: 'text-center prose lg:prose-xl mx-auto p-4' },
      h('h1', { className: `${fonts.title} ${data['title-colour']}` }, data.title),
      h('p', { className: `${fonts.subtitle} ${data['subtitle-colour']}` }, data.subtitle)
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
  

  const noIframe = () => (
    h('section', 
    { className: `w-full bg-bgDefault ${data['background-colour']}` },
    h(
      'div', 
      { className: 'text-center prose lg:prose-xl mx-auto p-4' },
      h('h1', { className: `${fonts.title} ${data['title-colour']}` }, data.title),
      h('p', { className: `${fonts.subtitle} ${data['subtitle-colour']}` }, data.subtitle)
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
            h('p', { class: `text-center` }, 'Invalid iframe'),
        )
      )
    ),
    )
  );


  // testing if the iframe is valid, then returning the correct view to the user
  try {
    // Extract the src attribute from the data.iframe HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.iframe, 'text/html');
    const src = doc.querySelector('iframe').getAttribute('src');

    console.log(`SRC: ${src}`);
    
    // Rest of your code using the updated value of 'src'
    return hasIframe(src);
    
  } catch (error) {
    

    return noIframe();
  }

};
