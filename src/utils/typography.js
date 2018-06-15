import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";
fairyGateTheme.scaleRatio = 1.5;
fairyGateTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    lineHeight: 1.45
  },
  'a': {
    color: '#555',
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, #1ca086 0px, #1ca086 2px, rgba(0, 0, 0, 0) 3px)`
  },
  'a:hover': {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, #1ca086 0px, #1ca086 2px, rgba(0, 0, 0, 0) 3px)`,
    backgroundColor: `rgba(28,160,134, 0.3)`
  }
});

const typography = new Typography(fairyGateTheme);

export default typography;

