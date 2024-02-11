declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryColor: string;
    accentColor: string;
    weekendBgColor: string;
    primaryCalendarColor: string;
    currentDayMarkerColor: string;
    whiteColor: string;
    greyColor: string;
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
  borderRadius: { primaryBorderRadius: number };
  cellGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3470ff',
    accentColor: '#0b44cd',
    weekendBgColor: '#272829',
    primaryCalendarColor: '#1E1F21',
    currentDayMarkerColor: '#00FF00',
    whiteColor: '#FFFFFF',
    greyColor: '#555759',
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
  borderRadius: { primaryBorderRadius: 8 },
  cellGap: 1,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
