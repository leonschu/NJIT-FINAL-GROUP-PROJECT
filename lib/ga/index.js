import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-YLT7XPLSM6');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
