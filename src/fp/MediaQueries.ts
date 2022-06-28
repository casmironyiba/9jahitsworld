export const breakpoints = {
  mobileS: 20, //320px
  mobileM: 23.4, //375px
  mobileL: 26.6, //425px
  tablet: 48, //768px
  laptop: 64, //1024
  laptopL: 90, //1440px
  desktop: 160, //2560px
};

export const mediaQueries = (key: keyof typeof breakpoints) => (
  style: TemplateStringsArray | String
) => `@media screen and (min-width: ${breakpoints[key]}rem) {${style}}`;
