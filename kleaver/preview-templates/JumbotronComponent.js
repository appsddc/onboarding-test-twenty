export const JumbotronComponent = (data, colours, apiData) => {
  console.log(`JUMBOTRON DATA: ${JSON.stringify(data)}`);
  const textAlignment = data['text-alignment']; // Replace 'props' with the appropriate variable name if needed

  let buttonAlignment;
  switch (textAlignment) {
    case 'text-left':
      buttonAlignment = 'flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4';
      break;
    case 'text-right':
      buttonAlignment = 'flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-4';
      break;
    default:
      buttonAlignment = 'flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4';
  }




  // setting the gradient colour
  let gradient = "";
  if ('overlay' in data && 'visible' in data.overlay && data.overlay.visible && 'colour' in data.overlay) {
    console.log(`SELECTED OVERLAY COLOUR: ${data.overlay.colour}`);
    gradient = data.overlay.colour
    // bg-gray-700 bg-blend-multiply
  } else {
    gradient = "#374151"
  }


  // setting the gradient blend type
  let blend;
  if ('overlay' in data && 'visible' in data.overlay && data.overlay.visible && 'blend' in data.overlay) {
    console.log(`SELECTED BLEND MODE: ${data.overlay.blend}`);
    blend = data.overlay.blend;
  } else {
    blend = 'multiply';
  }

  const textColour = {
    title: 'title-colour' in data ? data['title-colour'] : 'text-white',
    subtitle: 'subtitle-colour' in data ? data['subtitle-colour'] : 'text-gray-100',
  }

  // background image alignment
  let bgSize;
  let bgPosition;
  let bgRepeat
  if ('overlay' in data && 'size' in data.overlay) {
    switch (data.overlay.size) {
      case 'contain':
        bgSize = 'contain';
        bgPosition = null;
        bgRepeat = 'no-repeat';
        break;
      case 'cover':
        bgSize = 'cover';
        bgPosition = null;
        bgRepeat = 'no-repeat';
        break;
      case 'auto':
        bgSize = 'auto';
        bgPosition = null;
        bgRepeat = 'no-repeat';
        break;
      case 'repeat':
        bgRepeat = null;
        bgPosition = null;
        bgSize = 'contain';
        break;
      default:
        bgPosition = 'center';
        bgRepeat = 'no-repeat';
        bgSize = null;
        break;
    }
  } else {
    bgPosition = 'center';
  }

  const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

  // testing if button colours exist
  const buttonOneColour = 'button-one' in data && 'colour' in data['button-one'] ? data['button-one'].colour : false;
  const buttonTwoColour = 'button-two' in data && 'colour' in data['button-two'] ? data['button-two'].colour : false;


  return (
    h('section', { className: `${data.height} w-full flex items-center`, style: {backgroundImage: `url("${data["background-image"]}")`, 
      backgroundColor: gradient,      // gradient colojur to overlay the image
      backgroundBlendMode: blend,     // the blend mode for the overlay colour onto the image
      backgroundRepeat: bgRepeat,     // background repeat mode
      backgroundSize: bgSize,         // background size mode (contain, cover, auto)
      backgroundPosition: bgPosition  // background position (default is 'center' with backgroundRepeat: 'no-repeat')
    } },
    h('div', { className: `px-4 w-full py-24 lg:py-56 ${data['text-alignment']}` },
        h('h1', { className: `${fonts.title} mb-4 text-4xl font-extrabold tracking-tight leading-none ${textColour.title} md:text-5xl lg:text-6xl` }, data.title),
        h('p', { className: `${fonts.subtitle} mb-8 text-lg font-normal ${textColour.subtitle} lg:text-xl` }, data.subtitle),
        h('div', { className: `${buttonAlignment} ${fonts.button}` },
          // toggle button one visibility
          data["button-one"].visible ?
          h('div', { className: `inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg transition border 
                ${buttonOneColour ? buttonOneColour['text-colour'] : null } 
                ${buttonOneColour ? buttonOneColour['background-colour'] : null } 
                ${buttonOneColour ? buttonOneColour['border-colour'] : null } 
                ${buttonOneColour ? buttonOneColour['text-hover-colour'] : null } 
                ${buttonOneColour ? buttonOneColour['background-hover-colour'] : null } 
                ${buttonOneColour ? buttonOneColour['border-hover-colour'] : null }
              ` },
            'text' in data['button-one'] ? data["button-one"].text : '',
            h('svg', { 'aria-hidden': 'true', className: 'ml-2 -mr-1 w-4 h-4', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
              h('path', { fillRule: 'evenodd', d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
            )
          ) : null 
          ,
          // toggle button two visibility
          data["button-two"].visible ?
          h('div', { className: `inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg transition border 
            ${buttonTwoColour ? buttonTwoColour['text-colour'] : null } 
            ${buttonTwoColour ? buttonTwoColour['background-colour'] : null } 
            ${buttonTwoColour ? buttonTwoColour['border-colour'] : null } 
            ${buttonTwoColour ? buttonTwoColour['text-hover-colour'] : null } 
            ${buttonTwoColour ? buttonTwoColour['background-hover-colour'] : null } 
            ${buttonTwoColour ? buttonTwoColour['border-hover-colour'] : null }
          ` },
            'text' in data['button-one'] ? data["button-two"].text : '',
          ) : null
        )
      )
    )
  )
}