import { Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window')

export const COLORS = {
    // base colors;
    primary: '#3b0c98',
    secondary: '#cacfd9',
    transparentBlack: '#1b191b92',
    dark: '#3d3b3df6',

    // color;
    black: '#1e1f20',
    links: '#ec0cecf3',
    white: '#ffffff',
    lightGray: '#eff2f5',
    gray: '#8b9097',
};


export const SIZES ={
    // global
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes;
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions;
    width,
    height
}

export const FONTS = {
    largeTitle: {fontFamily:"Roboto-Black", fontSize: SIZES.largeTitle,lineHeight: 50},
    h1: {fontFamily:"Roboto-Black", fontSize: SIZES.h1,lineHeight: 36},
    h2: {fontFamily:"Roboto-Bold", fontSize: SIZES.h2,lineHeight: 30},
    h3: {fontFamily:"Roboto-Bold", fontSize: SIZES.h3,lineHeight: 22},
    h4: {fontFamily:"Roboto-Bold", fontSize: SIZES.h4,lineHeight: 22},
    body1: {fontFamily:"Roboto-Regular", fontSize: SIZES.body1,lineHeight: 36},
    body2: {fontFamily:"Roboto-Regular", fontSize: SIZES.body2,lineHeight: 30},
    body3: {fontFamily:"Roboto-Regular", fontSize: SIZES.body3,lineHeight: 22},
    body4: {fontFamily:"Roboto-Regular", fontSize: SIZES.body4,lineHeight: 22},
}