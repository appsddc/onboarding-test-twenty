export const CarouselComponent = (data) => {
    const carouselItems = data.images.map(image =>
        h('div', {
          class: 'duration-200 ease-linear',
          'data-carousel-item': true
        }, h('img', {
          src: image.src,
          class: 'block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
          alt: image.alt
        }))
    );


    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';
      
    return (
        h('section', { class: data['background-colour'] },
            h('div', { class: 'prose lg:prose-xl mx-auto p-4 py-8 lg:py-16 mx-auto max-w-screen-md' },
                h('div', { class: 'text-center prose lg:prose-xl mx-auto p-4' },
                    h('h1', { class: `${font.title}` }, data.title),
                    h('p', { class: `${font.subtitle}` }, data.subtitle)
                ),
                h('div', { id: 'animation-carousel', class: 'relative w-full', 'data-carousel': true, static: true },
                    h('div', { class: 'relative h-56 overflow-hidden rounded-lg xs:h-[20rem] sm:h-[20rem] md:h-[26rem] lg:h-[30rem] ' },
                        carouselItems,
                    ),
                    h('button', { type: 'button', class: 'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none', 'data-carousel-prev': true },
                    h('span', { class: 'inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 light:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none' },
                        h('svg', { 'aria-hidden': true, class: 'w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 19l-7-7 7-7' })
                        ),
                        h('span', { class: 'sr-only' }, 'Previous')
                    )
                    ),
                    h('button', { type: 'button', class: 'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none', 'data-carousel-next': true },
                    h('span', { class: 'inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 light:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none' },
                        h('svg', { 'aria-hidden': true, class: 'w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5l7 7-7 7' })
                        ),
                        h('span', { class: 'sr-only' }, 'Next')
                    )
                    )
                )
            )
        )
    )
}