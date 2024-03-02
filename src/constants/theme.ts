declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryColor: string;
    otherColor: string;
    accentColor: string;
    weekendBgColor: string;
    primaryCalendarColor: string;
    greenColor: string;
    whiteColor: string;
    greyColor: string;
    lightgreyColor: string;
    primaryFontColor: string;
    blueBtnColor: string;
    redBtnColor: string;
    redIconColor: string;
    greenBtnColor: string;
    greenIconColor: string;
    authFormBGColor: string;
  };
  fontFamily: { primaryFontFamily: string };
  fontWeight: {
    primaryFontWeight: number;
    secondaryFontWeight: number;
    otherFontWeight: number;
  };
  fontSize: {
    titleFontSize: number;
    primaryFontSize: number;
    secondaryFontSize: number;
  };
  padding: {
    containerPadding: number;
  };
  borderRadius: { primaryBorderRadius: number; secondaryBorderRadius: number };
  containerWidth: { desktop: number };
  shadows: {
    primaryShadow: string;
  };
  cellGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
  trimText: string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3470ff',
    otherColor: '#38b6ff',
    primaryFontColor: '#141414',
    accentColor: '#0b44cd',
    weekendBgColor: '#272829',
    primaryCalendarColor: '#1E1F21',
    greenColor: '#00FF00',
    whiteColor: '#FFFFFF',
    greyColor: '#555759',
    lightgreyColor: '#d3d3d3',
    blueBtnColor: '#7fd1ff',
    redBtnColor: '#ff9192',
    redIconColor: '#d3232f',
    greenBtnColor: '#89f2a6',
    greenIconColor: '#00c938',
    authFormBGColor: '#fcfcfc',
  },
  fontFamily: { primaryFontFamily: 'Manrope' },
  fontWeight: {
    primaryFontWeight: 600,
    secondaryFontWeight: 400,
    otherFontWeight: 500,
  },
  fontSize: {
    titleFontSize: 36,
    primaryFontSize: 16,
    secondaryFontSize: 20,
  },
  padding: {
    containerPadding: 16,
  },
  borderRadius: {
    primaryBorderRadius: 8,
    secondaryBorderRadius: 4,
  },
  containerWidth: { desktop: 1200 },
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  cellGap: 1,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
  trimText: `word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;`,
};

export default theme;
