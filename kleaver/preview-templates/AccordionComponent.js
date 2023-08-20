
export const AccordionComponent = (data, tmpColours, apiData) => {
    // holds the data of the first item
    const firstItemData = 'items' in data ? data.items[0] : null;
    // holds the data of the last item
    const lastItemData = 'items' in data ? (data.items).at(-1) : null;
    // holds the data of items between first and last
    const middleItemsData = 'items' in data ? (data.items).slice(1, -1) : null;

    // setting our colours for the accordion
    const colour = data.colour;

    // setting our fonts
    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';


    const firstItem = () => {
         return firstItemData.title ? (
            h('div', {  },
                h('h2', { id: `${(firstItemData.title).replace(' ', '')}-heading` }, 
                    h('button', { class: `flex items-center justify-between w-full p-5 font-medium text-left ${colour['title-colour']} border border-b-0 ${colour['border-colour']} rounded-t-xl ${colour['title-background-colour']} ${colour['title-background-hover-colour']}`, 'data-accordion-target': `${(firstItemData.title).replace(' ', '')}-body`, 'aria-expanded': true, 'aria-controls': `${(firstItemData.title).replace(' ', '')}-body` },
                        h('span', { class: `` }, firstItemData.title),
                        h('svg', { 'data-accordion-icon': true, class: 'w-3 h-3 rotate-180 shrink-0', 'aria-hidden': 'true', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 10 6' },
                            h('path', { stroke: 'currentColor', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5 5 1 1 5' }, [])
                        )
                    )
                ),

                h('div', { id: `${(firstItemData.title).replace(' ', '')}-body`, class: ``, 'aria-labelledby': `${(firstItemData.title).replace(' ', '')}-heading` }, 
                    h('div', { class: `p-5 border border-b-0 ${colour['border-colour']} ${colour['content-background-colour']}` }, 
                        h('div', { class: `mb-2 ${colour['text-colour']} prose` }, 

                        // firstItemData.content
                        h(window.ReactMarkdown, { }, firstItemData.content)
                        )
                    )
                )

            )
        ) : null
    };

    // render last items
    const lastItem = () => {
        return lastItemData.title ? (
            h('div', { },
                h('h2', { id: `${(lastItemData.title).replace(' ', '')}-heading` }, 
                    h('button', { class: `flex items-center justify-between w-full p-5 font-medium text-left ${colour['title-colour']} border ${colour['border-colour']} ${colour['title-background-colour']} ${colour['title-background-hover-colour']}`, 'data-accordion-target': `${(lastItemData.title).replace(' ', '')}-body`, 'aria-expanded': true, 'aria-controls': `${(lastItemData.title).replace(' ', '')}-body` },
                        h('span', {  }, lastItemData.title),
                        h('svg', { 'data-accordion-icon': true, class: 'w-3 h-3 rotate-180 shrink-0', 'aria-hidden': 'true', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 10 6' },
                            h('path', { stroke: 'currentColor', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5 5 1 1 5' }, [])
                        )
                    )
                ),

                h('div', { id: `${(lastItemData.title).replace(' ', '')}-body`, class: '', 'aria-labelledby': `${(lastItemData.title).replace(' ', '')}-heading` }, 
                    h('div', { class: `p-5 border border-t-0 rounded-b-xl ${colour['border-colour']} ${colour['content-background-colour']}` }, 
                        h('div', { class: `mb-2 ${colour['text-colour']} prose` }, 
                        h(window.ReactMarkdown, { }, lastItemData.content)
                        )
                    )
                )

            )
        ) : null
    };


    // middle items
    const middleItems = (item) => {
        return item.title ? (
            h('div', { },
                h('h2', { id: `${(item.title).replace(' ', '')}-heading` }, 
                    h('button', { class: `flex items-center justify-between w-full p-5 font-medium text-left ${colour['title-colour']} border border-b-0 ${colour['border-colour']} ${colour['title-background-colour']} ${colour['title-background-hover-colour']}`, 'data-accordion-target': `${(item.title).replace(' ', '')}-body`, 'aria-expanded': true, 'aria-controls': `${(item.title).replace(' ', '')}-body` },
                        h('span', {  }, item.title),
                        h('svg', { 'data-accordion-icon': true, class: 'w-3 h-3 rotate-180 shrink-0', 'aria-hidden': 'true', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 10 6' },
                            h('path', { stroke: 'currentColor', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5 5 1 1 5' }, [])
                        )
                    )
                ),

                h('div', { id: `${(item.title).replace(' ', '')}-body`, class: '', 'aria-labelledby': `${(item.title).replace(' ', '')}-heading` }, 
                    h('div', { class: `p-5 border border-b-0 ${colour['border-colour']} ${colour['content-background-colour']}` }, 
                        h('div', { class: `mb-2 ${colour['text-colour']} prose` }, 
                        h(window.ReactMarkdown, { }, item.content)
                        )
                    )
                )

            )
        ) : null
    };

    // main return
    return (
        h('section', { className: `w-full ${data['background-colour']}` },
            h('div', { class: 'mx-auto p-4 max-w-screen-xl mx-auto' },
                h('h1', 
                { class: `${fonts.title} ${data['title-colour']} mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center` }, 
                    data.title ? data.title : null
                ),
                h('p', 
                    { class: `${fonts.subtitle} ${data['subtitle-colour']} mb-8 text-lg font-normal lg:text-xl text-center` }, 
                    data.subtitle ? data.subtitle : null
                ),
          

                h('div', { id: 'accordion-collapse', 'data-accordion': 'collapse', class: `${fonts.text}` },
                    // first item
                    firstItemData ? firstItem() : null,

                    // middle items
                    middleItemsData ? middleItemsData.map(item => middleItems(item)) : null,

                    // last item
                    lastItemData && lastItemData != firstItemData ? lastItem() : null,
                )
            )
        )
    )
}