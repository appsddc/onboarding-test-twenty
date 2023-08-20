export const AdvancedCarousel = (data, apiData) => {
  
    let currentSlideIndex = 0;
  
    function nextSlide() {
      const carouselItems = document.querySelectorAll('[data-carousel-item="true"]');
      carouselItems[currentSlideIndex].classList.add('hidden');
      currentSlideIndex = (currentSlideIndex + 1) % carouselItems.length;
      carouselItems[currentSlideIndex].classList.remove('hidden');
    }
  
    function prevSlide() {
      const carouselItems = document.querySelectorAll('[data-carousel-item="true"]');
      carouselItems[currentSlideIndex].classList.add('hidden');
      currentSlideIndex = (currentSlideIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentSlideIndex].classList.remove('hidden');
    }
  
    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    return h(
      'section',
      { className: data['background-colour'] },
      h(
        'div',
        { class: 'lg:max-w-screen-md max-w-screen-sm mx-auto p-4 px-8 md:px-4' },
        h(
          'div',
          { class: 'prose lg:prose text-center mx-auto py-8' },
          h('h1', { class: `${fonts.title} ${data['title-colour']}` }, data.title),
          h('p', { class: `${fonts.subtitle} ${data['subtitle-colour']}` }, data.subtitle),
        ),
        h(
          'div',
          {
            id: 'animation-carousel',
            class: 'relative w-full',
            'data-carousel': 'static',
          },
          'images' in data ? data.images.map((image, index) =>
            h(
              'div',
              {
                class: index === currentSlideIndex ? 'duration-200 ease-linear' : 'duration-200 ease-linear hidden',
                'data-carousel-item': true,
              },
              h('img', {
                src: image.src,
                class: 'block w-full',
                alt: image.alt,
              })
            )
          ) : null,
          h(
            'button',
            {
              type: 'button',
              class: 'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none',
              'data-carousel-prev': true,
              onclick: prevSlide,
            },
            h(
              'span',
              {
                class: 'inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 light:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none',
              },
              h(
                'svg',
                {
                  class: 'w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800',
                  fill: 'none',
                  stroke: 'currentColor',
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  d: 'M15 19l-7-7 7-7',
                })
              ),
              h('span', { class: 'sr-only' }, 'Previous')
            )
          ),
          h(
            'button',
            {
              type: 'button',
              class: 'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none',
              'data-carousel-next': true,
              onclick: nextSlide,
            },
            h(
              'span',
              {
                class: 'inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 light:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none',
              },
              h(
                'svg',
                {
                  class: 'w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800',
                  fill: 'none',
                  stroke: 'currentColor',
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                h('path', {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  d: 'M9 5l7 7-7 7',
                })
              ),
              h('span', { class: 'sr-only' }, 'Next')
            )
          )
        )
      )
    );
  };
  