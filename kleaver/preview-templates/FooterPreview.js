export const FooterPreview = (data, apiData, configData) => {

    const footer = data;

    const font = apiData.font.font;

    console.log(`FOOTER DATA: ${JSON.stringify(footer)}`);


    // setting the right div for columns for links

    let divCase;

    console.log(footer['link-sections'].length);

    switch (footer['link-sections'].length) {
        case 1:
            divCase =  'sm:grid-cols-1'
            break;
        case 2:
            divCase =  'sm:grid-cols-2'
            break;
        case 3:
            divCase =  'sm:grid-cols-3'
            break;
        case 4:
            divCase =  'sm:grid-cols-4'
            break;
        case 5:
            divCase =  'sm:grid-cols-5'
            break;
        default:
            divCase =  'sm:grid-cols-6'
    }

    let linkSectionsLength = footer['link-sections'].length;
// linkSectionsLength = linkSectionsLength > 6 ? 6 : linkSectionsLength; // Limit the maximum number of columns to 6

    



    return (
        h('footer', { class: `${ footer.colour['background-colour'] } ${ font.footer }` },
            h('div', { class: "mx-auto text-center" },
                h('div', { class: "mx-auto w-full max-w-screen-xl p-4 py-6" },
                    h('div', { class: "md:flex md:justify-between" },
                        h('div', { class: "mb-6 md:mb-0 text-left" },
                            h('a', { href: "/", class: "flex items-center" },
                                h('img', { src: configData.logo, class: "h-8 mr-3", alt: "Company Logo" }),
                                h('span', { class: `self-center ${ footer.colour['branding-text-colour'] } text-2xl font-semibold whitespace-nowrap` }, configData.title)
                            ),
                            h('br'),
                            h('a', { target: "_blank", href:  footer.address.link },
                                h('div', { class: `${ footer.address['text-colour'] } hover:underline` },
                                    h('p', {}, footer.address['line-one']),
                                    h('p', {}, footer.address['line-two']),
                                    h('p', {}, footer.address['line-three'])
                                )
                            ),
                            h('br'),
                            h('a', { href: `tel:${ footer.phone.number }`, class: `${ footer.phone['text-colour'] } hover:underline` },
                                footer.phone.text ? 
                                    h('p', {}, `${ footer.phone.text }`)
                                    :
                                    h('p', {}, `${ footer.phone.number }`),
                            )
                        ),
                        
                        h('div', { class: `grid grid-cols-2 gap-8 sm:gap-6 ${divCase}` },
                        
                        
                        footer['link-sections'].map(section => {
                            return h('div', {},
                                h('h2', { class: `mb-6 text-sm font-semibold ${ footer.colour['branding-text-colour'] } uppercase` }, section.title),
                                h('ul', { class: `${ footer.colour['main-text-colour'] } font-medium` },

                                    section.links.map(link => {
                                        return h('li', { class: "mb-4" },
                                            link.type != '-' ?
                                                h('a', { href: `${ link.type } ${ link.href }`, class: "hover:underline" }, link.title)
                                            :
                                                h('a', { href: `${ link.href }`, class: "hover:underline" }, link.title)
                                        )
                                    })

                                )
                            )
                        }),
                    )
                ),
                h('hr', { class: `my-6 sm:mx-auto ${ footer.colour['divider-colour'] } lg:my-8` }),
                h('div', { class: "sm:flex sm:items-center sm:justify-between" },
                    h('span', { class: `text-sm ${ footer.colour['main-text-colour'] } sm:text-center` }, `© ${ footer.copyright.year } `, 
                        h('a', { href: footer.copyright.link, class: "hover:underline" }, footer.copyright.business), ` - ${ footer.copyright.message } Built by`, 
                        h('a', { href: "https://www.kleaver.ie", class: "hover:underline", target: "_blank" }, "Kleaver"), " in Kildare 🇮🇪"),
                    h('div', { class: "sm:justify-center sm:mt-0" },
                        h('div', { class: "flex space-x-6 mt-4 sm:mt-0 w-min mx-auto" },
                            footer.socials.facebook.visible ?
                                h('a', { href: `https://www.facebook.com/${ footer.socials.facebook.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" })
                                )
                            ) : null,

                            footer.socials.instagram.visible ?
                                h('a', { href: `https://www.instagram.com/${ footer.socials.instagram.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
                                )
                            ) : null,

                            footer.socials.tiktok.visible ?
                                h('a', { href: `https://www.tiktok.com/@${ footer.socials.tiktok.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 448 512" },
                                    h('path', { d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" })
                                )
                            ) : null,

                            // M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z

                            footer.socials.twitter.visible ?
                                h('a', { href: `https://www.twitter.com/${ footer.socials.twitter.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" })
                                )
                            ) : null,

                            footer.socials.youtube.visible ?
                                h('a', { href: `https://www.youtube.com/${ footer.socials.youtube.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" })
                                )
                            ) : null,

                            footer.socials.linkedin.visible ?
                                h('a', { href: `https://www.linkedin.com/in/${ footer.socials.linkedin.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" })
                                )
                            ) : null,

                            footer.socials.whatsapp.visible ?
                                h('a', { href: `https://www.wa.me/${ footer.socials.whatsapp.username }`, class: `${ footer.colour['main-text-colour'] } ${ footer.colour['highlight-text-colour'] }` },
                                h('svg', { xmlns: "http://www.w3.org/2000/svg", class: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24" },
                                    h('path', { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" })
                                )
                            ) : null
                        )
                    )
                )
                )
            )
        )
    )
};
