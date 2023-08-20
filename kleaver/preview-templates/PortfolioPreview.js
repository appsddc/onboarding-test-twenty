export const PortfolioPreview = (data, content, colours, apiData) => {

    const categoryColour = {
        background: 'category-config' in data && 'background-colour' in data['category-config']['regular-card'] ? colours.background[data['category-config']['background-colour']] : 'bg-tertiary',
        text: 'category-config' in data && 'text-colour' in data['category-config']['regular-card'] ? colours.text[data['category-config']['text-colour']] : 'text-white',
    }

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : {};


    // return the preview
    return (
        h('section', { class: 'py-24 bg-white' },
            h('div', { class: 'container px-4 mx-auto' },
                h('div', { class: 'mx-auto mb-12 text-center md:max-w-2xl' },
                    h('div', { class: `${fonts.subtitle} inline-block px-3 py-1 mb-4 text-xs leading-5 uppercase ${categoryColour.background} ${categoryColour.text} rounded-full shadow-sm` },
                    data.category),
                    h('h2', { class: `${fonts.title} mb-4 text-3xl font-bold leading-tight tracking-tighter text-gray-700 md:text-5xl` },
                    data.title),
                    h('p', { class: `${fonts.subtitle} mb-4 text-lg text-gray-500 md:text-xl` },
                    data.description),
                h('div', { class: 'flex items-center justify-center' },
                h('p', { class: `${fonts.subtitle} inline-block text-primary` },
                new Date(data.date).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })))),
            h('div', { class: 'max-w-6xl mx-auto mb-10 overflow-hidden rounded-lg h-[650px]' },
            h('img', { class: 'object-cover w-full h-full', src: data.image, alt: 'portfolio-cover-image' })),
        h('div', { class: `${fonts.text} mx-auto md:max-w-3xl prose` },
        content)
        ))
    );
}