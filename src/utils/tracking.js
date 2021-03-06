import ReactGA from 'react-ga';
import { getCookie, setCookie } from './cookie';

export const GA_COOKIE_NAME = 'gatsby-gdpr-google-analytics';

let initalized = false;
/**
 * Init Google analitics
 */
export const initGA = () => {
  if (initalized) {
    return;
  }

  ReactGA.initialize(process.env.GA_TRACKING_ID, {
    anonymize: true,
  });

  initalized = true;

  ReactGA.ga('set', 'checkProtocolTask', function() {});
};

/**
 * Log a page view event - path optional
 */
export const logPageView = path => {
  if (!initalized) {
    initGA();
  }

  ReactGA.pageview(path || document.location.pathname);
};
/**
 * Return true or false if cookie has been set, undefined otherwise
 */
export const getGACookie = () => {
  const gaCookie = getCookie(GA_COOKIE_NAME);
  if (gaCookie === undefined) {
    return gaCookie;
  } else {
    return gaCookie === 'true';
  }
};

export const setGACookie = (accept = true) => {
  const d = new Date();
  d.setDate(d.getDate() + 365);

  const cookie = `${GA_COOKIE_NAME}=${accept}`;
  setCookie(cookie, d);
};
