export const NavbarPreview = (data, apiData, configData) => {

    // console logging the navbar data
    console.log(`navData: ${JSON.stringify(apiData.navigation)}`);

    const navData = data;

    return (
        h('nav', { class: `${navData.general['background-colour']} ${apiData.font.font.navbar} w-full` },
        h('div', { class: `max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4` },
        // logo and brand name
        h('a', { class: `flex items-center` }, 
        h('img', { src: `${configData.logo}`, class: `h-8 mr-3`, alt: 'Logo' }),
        h('span', { class: `self-center text-2xl font-semibold whitespace-nowrap ${navData.general['title-colour']}` }, configData.title )
        ),
        
        // action button and hamburger
        h('div', { class: `flex md:order-2 ${apiData.font.font.button}` },
            // action button
            h('a', { href: `${navData['action-button'].href}`, type: 'button', class: `transition-colors duration-200 border-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ${navData['action-button'].visible} 
            ${navData['action-button'].colour['text-colour']} 
            ${navData['action-button'].colour['text-hover-colour']} 
            ${navData['action-button'].colour['background-colour']} 
            ${navData['action-button'].colour['background-hover-colour']} 
            ${navData['action-button'].colour['border-colour']} 
            ${navData['action-button'].colour['border-hover-colour']}
            ` }, navData['action-button'].text),
            
            // hamburger button
            h('button', { id: 'hamburgerButton', type: 'button', ariaControls:"navbar-sticky", ariaExpanded:"false" ,class: `inline-flex items-center p-2 text-sm rounded-lg md:hidden border 
            ${navData.hamburger['icon-colour']} 
            ${navData.hamburger['icon-hover-colour']} 
            ${navData.hamburger['background-colour']} 
            ${navData.hamburger['background-hover-colour']} 
            ${navData.hamburger['border-colour']} 
            ${navData.hamburger['border-hover-colour']} 
            `},
            h('span', { class: `sr-only` }, 'Open main menu'),
            h('svg', { class: `w-6 h-6`, ariaHidden: 'true', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
            h('path', { fillRule: 'evenodd', d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z', clipRule: 'evenodd' })
            )
            )
        ),
        
        // navbar items
        h('div', { id: 'navbarItems', class: `items-center justify-between w-full md:flex md:w-auto md:order-1`, id: 'navbar-sticky' },
        h('ul', { class: `flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg ${navData.mobile['background-colour']} ${navData.mobile['border-colour']} md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent` },
        navData.items.map(item => {
            return h('li', { },
            h('a', { href: `${item.link}`, class: `block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 
            ${navData.mobile['background-hover-colour']} 
            ${navData.general['text-colour']} 
            ${navData.general['text-hover-colour']}
            ` }, item.name )
            )
        })
        )
        )
        )
        )
        )
};
  