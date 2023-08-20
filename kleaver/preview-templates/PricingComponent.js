export const PricingComponent = (data, colours, apiData) => {

    let gridConfig;
    if ('pricing' in data) {
        let count = 0;

        for (var option in data.pricing) {
        if (data.pricing.hasOwnProperty(option) && data.pricing[option].visible === true) {
            count++;
        }
        }
        switch(count) {
            case 1:
                gridConfig = 'sm:grid-cols-1 lg:grid-cols-1';
                break;
            case 2:
                gridConfig = 'sm:grid-cols-2 lg:grid-cols-2';
                break;
            case 3:
                gridConfig = 'sm:grid-cols-2 lg:grid-cols-3';
                break;
            default:
                gridConfig = 'sm:grid-cols-2 lg:grid-cols-4';
                break;
        };
    }

    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    const cardData = (card) => {
        return {
            visible: 'pricing' in data && card in data.pricing && 'visible' in data.pricing[card] ? data.pricing[card].visible : true,
            name: 'pricing' in data && card in data.pricing && 'name' in data.pricing[card] ? data.pricing[card].name : '',
            price: 'pricing' in data && card in data.pricing && 'price' in data.pricing[card] ? data.pricing[card].price : '',
            description: 'pricing' in data && card in data.pricing && 'description' in data.pricing[card] ? data.pricing[card].description : '',
            highlighted: 'pricing' in data && card in data.pricing && 'highlight' in data.pricing[card] ? data.pricing[card].highlight : false,
            button: {
                text: 'pricing' in data && card in data.pricing && 'button-text' in data.pricing[card] ? data.pricing[card]['button-text'] : 'Get in touch',
                link: 'pricing' in data && card in data.pricing && 'button-link' in data.pricing[card] ? data.pricing[card]['button-link'] : '#',
            }
        }
    }


    const cardColour = {
        regular: {
            card: data['card-config']['regular-card'],
            button: data['card-config']['regular-button'],
        },
        highlighted: {
            card: data['card-config']['highlighted-card'],
            button: data['card-config']['highlighted-button']
        }
    }

    console.log(`CARD CONFIG: ${JSON.stringify(cardColour)}`);


    // function to render features
    const renderFeatures = (option) => {
        if (data.hasOwnProperty('pricing') && option in data.pricing && 'features' in data.pricing[option] && data.pricing[option].features.length > 0) {
            // console.log(`FEATURES: ${JSON.stringify(data.pricing[option].features)}`);
            return (
                h('ul', { class: `${fonts.text} mt-7 space-y-2.5 text-sm` }, 
                    console.log(`OPTIONS: ${data.pricing[option].features}`),
                    data.pricing[option].features.map(elem => (
                        h('li', { class: `flex space-x-2` }, 
                            elem['tick-visible'] && h('svg', {
                                class: `flex-shrink-0 h-5 w-5
                                ${cardData(option).highlighted ? 
                                    cardColour.highlighted.card['features-tick-colour']
                                    :
                                    cardColour.regular.card['features-tick-colour']
                                }
                                `,
                                width: '16',
                                height: '16',
                                viewBox: '0 0 16 16',
                                fill: `none`,
                                xmlns: 'http://www.w3.org/2000/svg'
                            },
                            h('path', {
                                d: 'M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z',
                                fill: 'currentColor'
                            }
                        )
                ),

                h('span', { class: ` ${cardData(option).highlighted ? cardColour.highlighted.card['features-colour'] : cardColour.regular.card['features-colour']}` },
                elem.feature
                            )
                        )
                    )
                ))
            )
        } else {
            return [];
        }
    }




    // Function to render any given card id
    const renderCard = (cardOption) => {
        console.log('render card called with card', cardOption);
        return (
            cardData(cardOption).visible &&      // test if visible
            h('div', { class: `flex flex-col border lg:p-4 ${cardData(cardOption).highlighted ? `${cardColour.highlighted.card['border-colour']}` : `${cardColour.regular.card['border-colour']}`} 
            ${cardData(cardOption).highlighted ? `${cardColour.highlighted.card['background-colour']}` : cardColour.regular.card['background-colour']} 
            text-center rounded-xl p-8 h-full` },

                cardData(cardOption).highlighted ? h('p', { class: `mx-auto w-fit gap-1.5 py-1.5 px-3 rounded-md text-xs ${fonts.subtitle} uppercase font-semibold ${cardColour.highlighted.card.message['text-colour']} ${cardColour.highlighted.card.message['background-colour']}` }, `${cardColour.highlighted.card.message.text}`) : null,
                h('h4', { class: `${fonts.title} font-medium text-lg ${cardData(cardOption).highlighted ? cardColour.highlighted.card['title-colour'] : cardColour.regular.card['title-colour']}` }, cardData(cardOption).name),
                h('span', { class: `${fonts.subtitle} mt-2 font-bold text-5xl ${cardData(cardOption).highlighted ? cardColour.highlighted.card['price-colour'] : cardColour.regular.card['price-colour']}` }, cardData(cardOption).price),
                h('p', { class: `${fonts.subtitle} mt-2 text-sm ${cardData(cardOption).highlighted ? cardColour.highlighted.card['description-colour'] : cardColour.regular.card['description-colour']}` }, cardData(cardOption).description),

                // Features List
                renderFeatures(cardOption),
                // End Features List
                h('div', { class: `h-full flex items-end` },
                
                    h('a', { class: `${fonts.button} mt-4 mb-0 inline-flex justify-center w-full items-center gap-2 rounded-md border-2 font-semibold transition-all text-sm py-3 px-4
                    ${cardData(cardOption).highlighted ? 
                        `
                        ${cardColour.highlighted.button.colour['background-colour']} 
                        ${cardColour.highlighted.button.colour['background-hover-colour']} 
                        ${cardColour.highlighted.button.colour['text-colour']} 
                        ${cardColour.highlighted.button.colour['text-hover-colour']} 
                        ${cardColour.highlighted.button.colour['border-colour']} 
                        ${cardColour.highlighted.button.colour['border-hover-colour']} 
                        ` :
                        `
                        ${cardColour.regular.button.colour['background-colour']} 
                        ${cardColour.regular.button.colour['background-hover-colour']} 
                        ${cardColour.regular.button.colour['text-colour']} 
                        ${cardColour.regular.button.colour['text-hover-colour']} 
                        ${cardColour.regular.button.colour['border-colour']} 
                        ${cardColour.regular.button.colour['border-hover-colour']} 
                        `
                    }
                    `, href: `${cardData(cardOption).button.link}` },
                    `${cardData(cardOption).button.text}`
                    )

                ),
            )
        )
    }


    return (
        h('section', { class: `${data['background-colour']}` }, 
            h('div', { class: 'max-w-screen-xl px-4 py-10 lg:py-14 mx-auto' }, 
                // Title
                h('div', { class: 'max-w-2xl mx-auto text-center mb-10 lg:mb-14' }, 
                    h('h1', { class: `${fonts.title} text-3xl font-bold md:text-4xl md:leading-tight ${data['title-colour']}` }, data.title ),
                    h('p', { class: `${fonts.subtitle} mt-1 ${data['subtitle-colour']}` }, data.subtitle)
                ),
                // End Title

                // Grid
                h('div', { class: `mt-12 grid ${gridConfig} gap-6 lg:items-center h-auto` }, 
                
                    // Cards
                    renderCard('option-one'),
                    renderCard('option-two'),
                    renderCard('option-three'),
                    renderCard('option-four'),
                    // End Cards

                ),
                // End Grid
            )
        )
    )
}