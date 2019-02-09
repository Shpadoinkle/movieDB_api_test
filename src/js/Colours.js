const colourOptions = [
    'teal', 'blue', 'darkblue', 'purple', 'red', 'green', 'tangerine'
]
const COLOUR_TEAL = '#04c4a9';
const COLOUR_BLUE = '#0083ee';
const COLOUR_DARKBLUE = '#191e78';
const COLOUR_PURPLE = '#8e44ad';
const COLOUR_RED = '#de375c';
const COLOUR_GREEN = '#00cc76';
const COLOUR_TANGERINE = '#ff8c75';


const TEXT_DARK = '#3e4245';
const TEXT_MID = '#5a5a6e';
const TEXT_LIGHT = '#717b81';
const TEXT_BRAND = '#E3F4FC';
const TEXT_BRAND_LIGHT = '#A1D1E6';

const getRandomColour = () => {
    var index = Math.floor(Math.random() * colourOptions.length);
    return colourOptions[index];
}

export {
    COLOUR_TEAL,
    COLOUR_BLUE,
    COLOUR_DARKBLUE,
    COLOUR_PURPLE,
    COLOUR_RED,
    COLOUR_GREEN,
    COLOUR_TANGERINE,

    TEXT_DARK,
    TEXT_MID,
    TEXT_LIGHT,
    TEXT_BRAND,
    TEXT_BRAND_LIGHT,


    getRandomColour
};
