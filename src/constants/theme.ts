declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { accentColor: string };
  // fontFamily: {};
  // fontWeight: {};
  // fontSize: {};
  padding: {
    containerPadding: number;
  };

  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    accentColor: '#3470ff',
  },
  // fontFamily: {},
  // fontWeight: {},
  // fontSize: {},
  padding: {
    containerPadding: 16,
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
