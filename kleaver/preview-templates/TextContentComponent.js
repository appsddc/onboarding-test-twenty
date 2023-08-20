export const TextContentComponent = (data, content, apiData) => {

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    return (
        h('section', { className: data['background-colour'] },
            h('div', { className: 'prose lg:prose-xl mx-auto p-4' },
                h('h1', { className: `${fonts.title} ${data['title-alignment']} ${data['title-colour']}` }, data.title),
                h('p', { class: `${fonts.subtitle} ${data['title-alignment']} ${data['subtitle-colour']}` }, data.subtitle),
                h('div', { className: `${fonts.text} ${data['text-alignment']} ${data['text-colour']}` }, 
                    content
                )
            )
        )
    )
}