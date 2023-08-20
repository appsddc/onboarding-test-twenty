export const GalleryComponent = (data, apiData) => {

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    return (
        h('section', { class: data['background-colour'] },
            h('div', { class: 'mx-auto p-4 max-w-screen-xl' },
                h('div', { class: 'mx-auto' },
                    h('div', { class: 'prose lg:prose-xl mx-auto py-4 mx-auto py-8' }, 
                        h('h1', { class: `${data['title-colour']} ${fonts.title} mx-auto w-fit` }, data.title),
                        h('p', { class: `${data['subtitle-colour']} ${fonts.subtitle} mx-auto w-fit` }, data.subtitle)

                    ),
                        h('div', { class: 'grid grid-cols-2 md:grid-cols-3 gap-4' },
                            'images' in data && data.images.map(image => (
                            h('div', { class: 'h-fit items-center' },
                                h('button', {
                                'data-modal-target': image.alt,
                                'data-modal-toggle': image.alt,
                                class: 'h-60 w-full mx-auto',
                                type: 'button'
                                },
                                h('img', {
                                    class: 'h-60 w-full object-cover rounded',
                                    src: image.src,
                                    alt: image.alt
                                })
                                ),
                                h('div', {
                                id: image.alt,
                                tabindex: '-1',
                                'aria-hidden': 'true',
                                class: 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
                                },
                                h('div', { class: 'relative w-full max-w-2xl max-h-full' },
                                    h('div', { class: 'relative bg-white rounded-lg shadow' },
                                    h('div', { class: 'flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600' },
                                        h('button', {
                                        type: 'button',
                                        class: 'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white',
                                        'data-modal-hide': image.alt
                                        },
                                        h('svg', {
                                            'aria-hidden': 'true',
                                            class: 'w-5 h-5',
                                            fill: 'currentColor',
                                            viewBox: '0 0 20 20',
                                            xmlns: 'http://www.w3.org/2000/svg'
                                        },
                                            h('path', {
                                            fillRule: 'evenodd',
                                            d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                                            clipRule: 'evenodd'
                                            })
                                        ),
                                        h('span', { class: 'sr-only' }, 'Close modal')
                                        )
                                    ),
                                    h('div', { class: 'p-6 space-y-6' },
                                        h('img', { src: image.src, alt: image.alt })
                                    )
                                    )
                                )
                            )
                        )
                        ))
                    )
                )
            )
        )
    )
}