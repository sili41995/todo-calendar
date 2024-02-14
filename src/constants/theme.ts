declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryColor: string;
    accentColor: string;
    weekendBgColor: string;
    primaryCalendarColor: string;
    greenColor: string;
    whiteColor: string;
    greyColor: string;
    lightgreyColor: string;
    primaryFontColor: string;
    blueBtnColor: string;
  };
  // fontFamily: {};
  fontWeight: {
    primaryFontWeight: number;
    secondaryFontWeight: number;
    otherFontWeight: number;
  };
  fontSize: {
    primaryFontSize: number;
    secondaryFontSize: number;
  };
  padding: {
    containerPadding: number;
  };
  borderRadius: { primaryBorderRadius: number; secondaryBorderRadius: number };
  shadows: {
    primaryShadow: string;
  };
  cellGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3470ff',
    primaryFontColor: '#000000',
    accentColor: '#0b44cd',
    weekendBgColor: '#272829',
    primaryCalendarColor: '#1E1F21',
    greenColor: '#00FF00',
    whiteColor: '#FFFFFF',
    greyColor: '#555759',
    lightgreyColor: '#d3d3d3',
    blueBtnColor: '#7fd1ff',
  },
  // fontFamily: {},
  fontWeight: {
    primaryFontWeight: 600,
    secondaryFontWeight: 400,
    otherFontWeight: 500,
  },
  fontSize: {
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
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  cellGap: 1,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
