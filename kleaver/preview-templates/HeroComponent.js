export const HeroComponent = (data, apiData) => {

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    // declaring button data
    const primaryButton = data['button-one'];
    const secondaryButton = data['button-two'];

    return (
        h('section', { className: data['background-colour'] },
            h('div', { className: 'mx-auto p-4 max-w-screen-xl' },
                h('div', {
                    className: 'flex flex-col-reverse md:flex-row py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full gap-2',
                    style: {backgroundColor: data['background-colour']}
                },
                    h('div', { className: 'mr-auto place-self-center lg:col-span-7 w-full inline-block lg:w-1/2' },
                    h('h1', { className: `${fonts.title} ${data['title-colour']} max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl` }, data.title),
                    h('p', { className: `${fonts.subtitle} ${data['subtitle-colour']} max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl` }, data.subtitle),
                    primaryButton.visible ? 
                    h('a', { className: `${fonts.button} mr-3 transition-colors duration-150 no-underline inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg ${primaryButton.colour['text-colour']} ${primaryButton.colour['text-hover-colour']} ${primaryButton.colour['background-colour']} ${primaryButton.colour['background-hover-colour']} ${primaryButton.colour['border-colour']}  ${primaryButton.colour['border-hover-colour']}` },
                        primaryButton.text,
                        h('svg', { className: 'w-5 h-5 ml-2 -mr-1', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
                        h('path', { fillRule: 'evenodd', d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
                        )
                    ) : null
                    ,
                    secondaryButton.visible ? 
                    h('a', { className: `${fonts.button} transition-colors duration-150 no-underline inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg ${secondaryButton.colour['text-colour']} ${secondaryButton.colour['text-hover-colour']} ${secondaryButton.colour['background-colour']} ${secondaryButton.colour['background-hover-colour']} ${secondaryButton.colour['border-colour']}  ${secondaryButton.colour['border-hover-colour']}`
                    },
                    secondaryButton.text
                    ) : null
                    ),
                    h('div', { className: 'flex lg:mt-0 lg:col-span-5 w-full inline-block lg:w-1/2' },
                    // conditionally render the image if it exists
                        data.image ? (
                            h('img', {
                            src: data.image.toString(),
                            alt: "image-alt",
                            className: 'lg:mt-0 lg:col-span-5 lg:flex rounded-lg'
                            })
                        ) : null
                        )
                )
            )
        )
    )
}