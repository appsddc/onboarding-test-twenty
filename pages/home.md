---
title: Home
permalink: /
layout: default
jumbotron:
  visible: false
  title-colour:
    label: White
    value: text-white
  subtitle-colour:
    label: Light Grey
    value: text-gray-100
  height: screen
  overlay:
    visible: true
    colour: "#374151"
    blend:
      label: Multiply
      value: bg-blend-multiply
    size:
      label: Cover
      value: cover
  button-one:
    visible: false
    colour:
      text-colour: text-white
      text-hover-colour: hover:text-primary
      background-colour: bg-primary
      background-hover-colour: hover:bg-white
      border-colour: border-primary
      border-hover-colour: hover:border-primary
  button-two:
    visible: false
    colour:
      text-colour: text-primary
      text-hover-colour: hover:text-white
      background-colour: bg-white
      background-hover-colour: hover:bg-secondary
      border-colour: border-primary
      border-hover-colour: hover:border-secondary
sections:
  - subtitle-colour: text-gray-500
    title-colour: text-black
    button-one:
      visible: true
      text: Book a consultation
      href: "#"
      colour:
        text-colour: text-white
        text-hover-colour: hover:text-primary
        background-colour: bg-primary
        background-hover-colour: hover:bg-white
        border-colour: border-primary
        border-hover-colour: hover:border-primary
    background-colour: bg-white
    button-two:
      visible: true
      text: Pricing
      href: "#"
      colour:
        text-colour: text-primary
        text-hover-colour: hover:text-white
        background-colour: bg-white
        background-hover-colour: hover:bg-secondary
        border-colour: border-primary
        border-hover-colour: hover:border-secondary
    subtitle: Give your business the cutting edge
    title: Meet Kleaver
    type: hero
    image: /assets/img/cover-img.png
  - type: callout
    title: Get in touch
    subtitle: Business queries and consultation bookings
    background-colour: bg-white
    title-colour: text-black
    subtitle-colour: text-gray-500
    button-one:
      visible: true
      text: Contact us
      href: "#"
      colour:
        text-colour: text-white
        text-hover-colour: hover:text-primary
        background-colour: bg-primary
        background-hover-colour: hover:bg-white
        border-colour: border-primary
        border-hover-colour: hover:border-primary
    button-two:
      visible: false
      text: Pricing
      href: "#"
      colour:
        text-colour: text-primary
        text-hover-colour: hover:text-white
        background-colour: bg-white
        background-hover-colour: hover:bg-secondary
        border-colour: border-primary
        border-hover-colour: hover:border-secondary
  - type: carousel
    title: Lorem ipsum dolor sit amet
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-white
    images:
      - src: /assets/img/adeolu-eletu-e7rlgujjazc-unsplash.jpg
        alt: image-1
      - src: /assets/img/bruce-mars-8yg31xn4dsw-unsplash.jpg
        alt: image-2
      - src: /assets/img/carlos-muza-hpjsku2uysu-unsplash.jpg
        alt: image-3
  - subtitle-colour: text-gray-500
    title-colour: text-black
    message: true
    colours:
      input-background-colour: bg-white
      label-text-colour: text-black
      input-text-box-colour: text-black
      input-placeholder-colour: text-gray-500
      input-border-colour: border-primary
    submit-button:
      visible: true
      text: Submit
      colour:
        text-colour: text-white
        text-hover-colour: hover:text-primary
        background-colour: bg-primary
        background-hover-colour: hover:bg-white
        border-colour: border-primary
        border-hover-colour: hover:border-primary
    query:
      visible: true
      text: Select Contact Reason
      options:
        - option: Consultation
        - option: Product Query
        - option: Other
    name: true
    background-colour: bg-bgSecondary
    phone: true
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title: Lorem ipsum dolor sit amet
    type: contact-form
    email: true
    design: Line
  - type: customer-logos
    background-colour: bg-gray-100
    block-title: Customers
    logos:
      - name: logo-1
        logo: /assets/img/facebook-logo.png
      - logo: /assets/img/google-logo.png
        name: logo-2
      - logo: /assets/img/logo.svg
        name: logo-3
      - logo: /assets/img/twitter-logo.png
        name: logo-4
    title-colour: text-black
    subtitle-colour: text-gray-500
    subtitle: See what our customers think
    title: Customers
  - type: accordion
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-gray-100
    colour:
      title-background-colour: bg-bgSecondary
      title-background-hover-colour: hover:bg-gray-100
      content-background-colour: bg-white
      title-colour: text-primary
      text-colour: text-gray-500
      border-colour: border-primary
    title: FAQs
    subtitle: Here are our most frequently asked questions
    items:
      - title: Do I get a login?
        content: Yes. All clients get a login for their own site to customise it and add
          posts to your portfolio.
      - title: Can I book a consultation?
        content: Visit our [contact page](/contact) to book a consultation.
      - title: Where can I find your prices?
        content: All of our prices are listed on our [pricing page](/pricing).
      - title: Do you have a free trial?
        content: During your consultation, you will have the opportunity to trial our
          product.
  - type: gallery
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-bgSecondary
    images:
      - alt: image-01
        src: /assets/img/adeolu-eletu-e7rlgujjazc-unsplash.jpg
      - alt: image-02
        src: /assets/img/bruce-mars-8yg31xn4dsw-unsplash.jpg
      - alt: image-03
        src: /assets/img/carlos-muza-hpjsku2uysu-unsplash.jpg
      - alt: image-04
        src: /assets/img/microsoft-edge-1n49cn7p0fg-unsplash.jpg
    title: Gallery
    subtitle: Check out some of our most recent projects
  - type: basic-map
    title: Map Component
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-bgTertiary
    iframe: <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80853.01367290599!2d11.213479702175084!3d50.7077553228001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3fc0692447a7b%3A0x4208ec17435a620!2s07407%20Rudolstadt!5e0!3m2!1sen!2sde!4v1691551988225!5m2!1sen!2sde"
      width="600" height="450" style="border:0;" allowfullscreen=""
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  - type: iframe
    title: Video Component
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-bgTertiary
    iframe: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/BHACKCNDMW8" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  - type: iframe
    title: Invalid Iframe Component
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-gray-100
    iframe: w
  - type: opening-hours
    title: Opening Hours
    subtitle: Check out our in-store opening hours. Our website is available 24/7.
    title-colour: text-black
    subtitle-colour: text-gray-500
    background-colour: bg-white
    colour:
      background-colour: bg-bgPrimary
      border-colour: border-tertiary
      day-colour: text-primary
      time-colour: text-gray-500
      message:
        background-colour: bg-bgTertiary
        border-colour: border-gray-100
        notice-colour: text-black
        text-colour: text-gray-500
  - subtitle-colour: text-gray-500
    title-colour: text-black
    pricing:
      option-one:
        visible: true
        name: Starter
        price: €19
        description: Lorem ipsum dolor sit amet
        highlight: false
        features:
          - feature: Feature One
            tick-visible: true
          - feature: Feature Two
            tick-visible: true
          - feature: Feature Three
            tick-visible: true
        button-text: Get in touch
        button-link: "#"
      option-two:
        visible: true
        name: Essential
        price: €39
        description: Lorem ipsum dolor sit amet
        highlight: false
        features:
          - feature: Feature One
            tick-visible: true
          - feature: Feature Two
            tick-visible: true
          - feature: Feature Three
            tick-visible: true
        button-text: Get in touch
        button-link: "#"
      option-three:
        visible: true
        name: Startup
        price: €59
        description: Lorem ipsum dolor sit amet
        highlight: true
        features:
          - feature: Feature One
            tick-visible: true
          - feature: Feature Two
            tick-visible: true
          - feature: Feature Three
            tick-visible: true
        button-text: Get in touch
        button-link: "#"
      option-four:
        visible: true
        name: Business
        price: Talk to Sales
        description: Lorem ipsum dolor sit amet
        highlight: false
        features:
          - feature: Feature One
            tick-visible: true
          - feature: Feature Two
            tick-visible: true
          - feature: Feature Three
            tick-visible: true
        button-text: Get in touch
        button-link: "#"
    background-colour: bg-white
    anchor: "#pricing"
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title: Pricing
    type: pricing
    card-config:
      regular-card:
        background-colour: bg-bgPrimary
        title-colour: text-secondary
        price-colour: text-primary
        description-colour: text-gray-500
        features-colour: text-gray-500
        features-tick-colour: text-gray-500
        border-colour: border-tertiary
      regular-button:
        colour:
          text-colour: text-white
          text-hover-colour: hover:text-primary
          background-colour: bg-primary
          background-hover-colour: hover:bg-white
          border-colour: border-primary
          border-hover-colour: hover:border-primary
      highlighted-card:
        background-colour: bg-primary
        title-colour: text-gray-100
        price-colour: text-white
        description-colour: text-gray-100
        features-colour: text-gray-100
        features-tick-colour: text-gray-100
        border-colour: border-gray-100
        message:
          text: Most popular
          text-colour: text-primary
          background-colour: bg-white
      highlighted-button:
        colour:
          text-colour: text-primary
          text-hover-colour: hover:text-white
          background-colour: bg-white
          background-hover-colour: hover:bg-secondary
          border-colour: border-primary
          border-hover-colour: hover:border-secondary
  - subtitle-colour: text-secondary
    title-colour: text-primary
    text-alignment: text-center
    background-colour: bg-white
    text-colour: text-gray-500
    title-alignment: text-center
    Markdown: >-
      # Lorem Ipsum


      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    title: Lorem ipsum dolor sit amet
    type: text-content
---
