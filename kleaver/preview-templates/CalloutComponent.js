export const CalloutComponent = (data, colours, apiData) => {

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    // defining button data
    const buttonOne = data['button-one'];
    const buttonTwo = data['button-two'];

    return (
        h('section', { className: data['background-colour'] },
            h('div', { class: 'mx-auto p-4 max-w-screen-xl' },
            h('div', { class: 'max-w-2xl text-4xl font-extrabold md:text-5xl xl:text-6xl mx-auto' },
            h('div', { class: 'py-8 mx-auto max-w-screen-xl text-center lg:py-16' },
            h('h1', { class: `${fonts.title} mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-3xl ${data['title-colour']}` }, data.title),
            h('p', { class: `${fonts.subtitle} mb-8 text-lg font-normal lg:text-xl ${data['subtitle-colour']}` }, data.subtitle),
            h('div', { class: `${fonts.button} flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4` },
                buttonOne.visible &&
                h('a', { href: buttonOne.href, target: '_blank', class: `no-underline inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border 
                    ${buttonOne.colour['text-colour']} 
                    ${buttonOne.colour['background-colour']} 
                    ${buttonOne.colour['border-colour']} 
                    ${buttonOne.colour['text-hover-colour']} 
                    ${buttonOne.colour['background-hover-colour']} 
                    ${buttonOne.colour['border-hover-colour']} 
                ` },
                    buttonOne.text,
                    h('svg', { 'aria-hidden': 'true', class: 'ml-2 -mr-1 w-5 h-5', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
                    h('path', { fillRule: 'evenodd', d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
                    )
                ),
                buttonTwo.visible &&
                h('a', { href: buttonTwo.href, target: '_blank', class: `no-underline inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border 
                    ${buttonTwo.colour['text-colour']} 
                    ${buttonTwo.colour['background-colour']} 
                    ${buttonTwo.colour['border-colour']} 
                    ${buttonTwo.colour['text-hover-colour']} 
                    ${buttonTwo.colour['background-hover-colour']} 
                    ${buttonTwo.colour['border-hover-colour']} 
                ` },
                    buttonTwo.text,
                    h('svg', { 'aria-hidden': 'true', class: 'ml-2 -mr-1 w-5 h-5', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
                    h('path', { fillRule: 'evenodd', d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z', clipRule: 'evenodd' })
                    )
                )
            )
            )
            )
        )
        )
    )
}