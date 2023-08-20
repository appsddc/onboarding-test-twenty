export const OpeningHoursComponent = (data, apiData) => {

  const fonts = 'font' in apiData && 'font' in apiData.font ? (apiData.font.font) : '';

  const hours = 'opening-hours' in apiData ? apiData['opening-hours'] : '';

  const message = 'opening-hours' in apiData && 'message' in apiData['opening-hours'] ? apiData['opening-hours'].message : '';

  console.log(`MESSAGE: ${message}`);
  
  // setting the colours
  const colour = data.colour;

  return (
    h('section', { class: data['background-colour'] },
      h('div', { class: 'prose lg:prose-xl mx-auto p-4' },
        h('div', { class: 'w-full mx-auto h-min' },
          h('h1', { class: `${fonts.title} ${data['title-colour']} text-center` }, data.title),
          h('p', { class: `${fonts.subtitle} ${data['subtitle-colour']} text-center` }, data.subtitle),
        ),
        h('br'),
        h('div', { class: `${fonts.text} grid sm:grid-cols-2 grid-cols-1 gap-4 p-8 rounded-lg sm:gap-16 w-full mx-auto border ${colour['background-colour']} ${colour['border-colour']}` },
          h('div', { class: `grid grid-cols-2 gap-4 w-fit h-fit mx-auto` },
            // monday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Monday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.monday),
            // tuesday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Tuesday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.tuesday),
            // wednesday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Wednesday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.wednesday),
            // thursday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Thursday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.thursday)
          ),
          h('div', { class: 'grid grid-cols-2 gap-4 w-fit h-fit mx-auto' },
            // friday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Friday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.friday),
            // saturday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Saturday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.saturday),
            // sunday hours
            h('div', { class: `w-fit` }, h('string', { class: `${colour['day-colour']}` }, "Sunday")),
            h('div', { class: `w-fit ${colour['time-colour']}` }, hours.hours.sunday)
          )
        ),
        h('br'),
        message ?
        (
          h('div', {
            class: `${fonts.text} mb-4 rounded-lg ${colour.message['background-colour']} ${colour.message['border-colour']} border px-6 py-5 text-base`,
            role: 'alert'
          },
            h('strong', { class: `${colour.message['notice-colour']}` }, 'Notice: '),
            h('span', { class: `${colour.message['text-colour']}` }, message)
          )
        )
        : null
      )
    )
  )
}
