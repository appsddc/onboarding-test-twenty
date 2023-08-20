export const ContactFormComponent = (data, colours, apiData) => {

    console.log(`Contact Form Data: ${JSON.stringify(data)}`);
    // console.log(`Options: ${data.query.options}`);




    const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

    const formColour = data['colours'];

    const buttonColour = data['submit-button'].colour;

    // bubble design
    const bubbleDesign = (
        h('section', { class: `${data['background-colour']}` },
            h('div', { class: 'prose lg:prose-xl mx-auto p-4 pb-8' },
                h('div', { class: 'py-8 lg:py-16 px-4 mx-auto max-w-screen-md' },
                h('h1', { class: `${fonts.title} ${data['title-colour']} mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white` }, data.title),
                h('p', { class: `${fonts.subtitle} ${data['subtitle-colour']} mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl` }, data.subtitle),
                h('form', { name: data['form-id'], action: '', class: `${fonts.form} space-y-8`, netlify: true },
                    data.name && h('div', null,
                    h('label', { for: 'name', class: `block mb-2 text-sm font-medium ${formColour['label-text-colour']}` }, 'Your full name'),
                    h('input', { type: 'text', name: 'name', class: `shadow-sm focus:outline-none focus:ring-0 ${formColour['input-background-colour']} border ${formColour['input-border-colour']} ${formColour['input-text-box-colour']} ${formColour['input-placeholder-colour']} text-sm rounded-lg block w-full p-2.5`, placeholder: 'Full Name', required: true })
                    ),
                    data.email && h('div', null,
                    h('label', { for: 'email', class: `block mb-2 text-sm font-medium ${formColour['label-text-colour']}` }, 'Your email'),
                    h('input', { type: 'email', name: 'email', class: `shadow-sm focus:outline-none focus:ring-0 ${formColour['input-background-colour']} border ${formColour['input-border-colour']} ${formColour['input-text-box-colour']} ${formColour['input-placeholder-colour']} text-sm rounded-lg block w-full p-2.5`, placeholder: 'Email', required: true })
                    ),
                    data.phone && h('div', null,
                    h('label', { for: 'phone', class: `block mb-2 text-sm font-medium ${formColour['label-text-colour']}` }, 'Your phone number'),
                    h('input', { type: 'tel', name: 'phone', class: `shadow-sm focus:outline-none focus:ring-0 ${formColour['input-background-colour']} border ${formColour['input-border-colour']} ${formColour['input-text-box-colour']} ${formColour['input-placeholder-colour']} text-sm rounded-lg block w-full p-2.5`, placeholder: 'Phone', required: true })
                    ),
                    
                    
                    // query section
                    data.query.visible ? h('div', { class: `relative z-0 w-full mb-6 group` },
                        h('label', { for: 'countries', class: `block mb-2 text-sm font-medium focus:outline-none focus:ring-0 ${formColour['label-text-colour']}` }, 'query' in data && 'text' in data.query ? data.query.text : 'Select Contact Reason' ),
                        h('select', { name: 'query-type', class: `${formColour['input-background-colour']} border ${formColour['input-border-colour']} ${formColour['input-text-box-colour']} text-sm rounded-lg block w-full p-2.5` },
                        data.query.options && data.query.options.map(option => h('option', { value: option.option }, option.option))
                        )
                    ) : null,
                    

                    data.message && h('div', { class: 'sm:col-span-2' },
                    h('label', { for: 'message', class: `block mb-2 text-sm font-medium ${formColour['label-text-colour']}` }, 'Your message'),
                    h('textarea', { name: 'message', rows: '6', class: `block p-2.5 w-full text-sm focus:outline-none focus:ring-0 ${formColour['input-background-colour']} ${formColour['input-text-box-colour']} ${formColour['input-placeholder-colour']} rounded-lg shadow-sm border ${formColour['input-border-colour']}`, placeholder: 'Leave a comment...' })
                    ),
                    h('button', {type: 'submit', class: `${fonts.button} py-3 px-5 text-sm font-medium text-center rounded-lg w-full border 
                        ${buttonColour['text-colour']} 
                        ${buttonColour['text-hover-colour']} 
                        ${buttonColour['background-colour']} 
                        ${buttonColour['background-hover-colour']} 
                        ${buttonColour['border-colour']} 
                        ${buttonColour['border-hover-colour']} 
                    ` }, data['submit-button'].text) 
                    ) 
                ) 
            )
        )
    )



    // line design
    const lineDesign = (
        h('section', { class: `${data['background-colour']}` },
        h('form', { class: 'prose lg:prose-xl mx-auto p-4 pb-8' },
        h('div', { class: 'py-8 lg:py-16 px-4 mx-auto max-w-screen-md' },
                h('h1', { class: `${fonts.title} ${data['title-colour']} mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900` }, data.title),
                h('p', { class: `${fonts.subtitle} ${data['subtitle-colour']} mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl` }, data.subtitle),
                h('form', { name: data['form-id'], class: `${fonts.form} space-y-8` },
                    data.name && h('div', null,
                    h('input', { type: 'text', name: 'name', class: `block py-2.5 px-1 w-full text-sm focus:outline-none focus:ring-0 ${formColour['input-text-box-colour']} ${formColour['input-background-colour']} border-0 border-b-2 ${formColour['input-border-colour']} appearance-none focus:outline-none focus:ring-0 peer`, placeholder: 'Full Name', required: true }),
                    h('label', { for: 'name', class: `peer-focus:font-medium absolute text-sm px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formColour['label-text-colour']}
                
                    ` }, 'Your full name')
                    ),
                    data.email && h('div', null,
                    h('input', { type: 'email', name: 'email', class: `block py-2.5 px-1 w-full text-sm focus:outline-none focus:ring-0 ${formColour['input-text-box-colour']} ${formColour['input-background-colour']} border-0 border-b-2 ${formColour['input-border-colour']} appearance-none focus:outline-none focus:ring-0 peer`, placeholder: 'Email', required: true }),
                    h('label', { for: 'email', class: `peer-focus:font-medium absolute text-sm px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formColour['label-text-colour']}
                
                    ` }, 'Your email')
                    ),
                    data.phone && h('div', null,
                    h('input', { type: 'tel', name: 'phone', class: `block py-2.5 px-1 w-full text-sm focus:outline-none focus:ring-0 ${formColour['input-text-box-colour']} ${formColour['input-background-colour']} border-0 border-b-2 ${formColour['input-border-colour']} appearance-none focus:outline-none focus:ring-0 peer`, placeholder: 'Phone', required: true }),
                    h('label', { for: 'phone', class: `peer-focus:font-medium absolute text-sm px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formColour['label-text-colour']}
                
                    ` }, 'Your phone number')
                    ),

                    // query section
                    h('div', { class: `relative z-0 w-full mb-6 group` },
                        h('label', { for: 'countries', class: `block mb-2 text-sm font-medium ${formColour['label-text-colour']}` }, 'Select Contact Reason'),
                        h('select', { name: 'query-type', class: `block py-2.5 px-1 w-full text-sm focus:outline-none focus:ring-0 ${formColour['input-text-box-colour']} ${formColour['input-background-colour']} border-0 border-b-2 ${formColour['input-border-colour']} appearance-none focus:outline-none focus:ring-0 peer` },
                        data.query.options && data.query.options.map(option => h('option', { value: option.option }, option.option))
                        )
                    ),


                    data.message && h('div', { class: 'sm:col-span-2' },
                    h('textarea', { name: 'message', rows: '6', class: `block py-2.5 px-1 focus:outline-none focus:ring-0 w-full text-sm ${formColour['input-text-box-colour']} ${formColour['input-background-colour']} border-0 border-b-2 ${formColour['input-border-colour']} appearance-none`, placeholder: 'Leave a comment...' }),
                    h('label', { for: 'message', class: `peer-focus:font-medium absolute text-sm px-2 duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formColour['label-text-colour']} border-0 border-b-2 ${formColour['input-border-colour']}
                
                    ` }, 'Your message')
                    ),
                    h('button', {type: 'submit', class: `${fonts.button} py-3 px-5 text-sm font-medium text-center rounded-lg w-full border 
                        ${buttonColour['text-colour']} 
                        ${buttonColour['text-hover-colour']} 
                        ${buttonColour['background-colour']} 
                        ${buttonColour['background-hover-colour']} 
                        ${buttonColour['border-colour']} 
                        ${buttonColour['border-hover-colour']} 
                    ` }, data['submit-button'].text) 
                    ) 
                ) 
            )
        )
    )



    // decide which form style should be rendered

    if (data.design === "Line") {
        return lineDesign;
    } else {
        return bubbleDesign;
    }


}
