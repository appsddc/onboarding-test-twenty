const yaml = require("js-yaml");
const fs = require("fs");

let yamlFile = fs.readFileSync("_config.yml", "utf8");
let loadedYaml = yaml.load(yamlFile);

// company main colours
const primary = loadedYaml.primaryColour;
const secondary = loadedYaml.secondaryColour;
const tertiary = loadedYaml.tertiaryColour;

// background main colours (with exclusion of the default - white)
const bgPrimary = loadedYaml.bgPrimaryColour;
const bgSecondary = loadedYaml.bgSecondaryColour;
const bgTertiary = loadedYaml.bgTertiaryColour;

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/preline/dist/*.js',
    'safelist.txt',
  ],
  safelist: [
    'font-default',
    'font-anton',
    'font-oswald',
    'font-playfair',
    'font-program',
    'font-nunito',
    'font-rubik',
    'text-primary',
    'text-secondary',
    'text-tertiary',
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
    'border-primary',
    'border-secondary',
    'border-tertiary',
    'bg-bgPrimary',
    'bg-bgSecondary',
    'bg-bgTertiary',
  ],
  theme: {
    extend: {
      colors: {
        'primary': primary,
        'secondary': secondary,
        'tertiary': tertiary,
        'bgPrimary': bgPrimary,
        'bgSecondary': bgSecondary,
        'bgTertiary': bgTertiary,
        'bgDefault': '#ffffff',
        'gray-100': '#f7fafc',
        'gray-500': '#a0aec0',
        'blue-500': '#4299e1',
      }
    },
    fontFamily: {
      'default': ['sans-serif'],
      'anton': ['Anton', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
      'playfair': ['"Playfair Display"', 'sans-serif'],
      'program': ['"Press Start 2P"', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    require('preline/plugin')
  ]
}
