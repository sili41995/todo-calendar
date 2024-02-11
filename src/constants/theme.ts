declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    accentColor: string;
    weekendBgColor: string;
    weekdayBgColor: string;
    currentDayMarkerColor: string;
    whiteColor: string;
    greyColor: string;
  };
  // fontFamily: {};
  // fontWeight: {};
  // fontSize: {};
  padding: {
    containerPadding: number;
  };
  cellGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    accentColor: '#3470ff',
    weekendBgColor: '#272829',
    weekdayBgColor: '#1E1F21',
    currentDayMarkerColor: '#990099',
    whiteColor: '#FFFFFF',
    greyColor: '#555759',
  },
  // fontFamily: {},
  // fontWeight: {},
  // fontSize: {},
  padding: {
    containerPadding: 16,
  },
  cellGap: 1,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
