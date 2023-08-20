export const FontPreview = (data) => {
    return (
        h('section', {}, 
            h('div', { class: 'prose font-default' }, 
                h('h1', { }, 'Default Font (Sans Serif)'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-inter',}, 
                h('h1', { }, 'Inter Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-oswald' }, 
                h('h1', { }, 'Oswald Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-playfair' }, 
                h('h1', { }, 'Playfair Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-program' }, 
                h('h1', { }, 'Program Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-nunito' }, 
                h('h1', { }, 'Nunito Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            ),
            h('div', { class: 'prose font-rubik' }, 
                h('h1', { }, 'Rubik Font Type'),
                h('p', { }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis.'),
                h('br'), h('br')
            )
        )
    )
};
  