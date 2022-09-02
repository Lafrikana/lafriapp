import '../styles/globals.css'
import '../styles/output.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import Cookies from 'universal-cookie';
import consts from 'consts';
import { ThemeProvider } from 'next-themes'
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider>
      <Component {...pageProps} />
    // </ThemeProvider>
  )
}


MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  let mg = /manage\/gallery/
  let mb = /manage\/blog/
  appProps.pageProps.hasReadPermission = "not yet";
  if(mg.test(appContext.router.route) || mb.test(appContext.router.route)){

    const cookies = new Cookies(appContext.ctx.req.headers.cookie);
    const password = cookies.get(consts.SiteReadCookie) ?? '';

    appProps.pageProps.cookieSrc = password
    appProps.pageProps.cookieConsts = consts.SiteReadPass

    if (password === consts.SiteReadPass) {
      appProps.pageProps.hasReadPermission = true;
    }
    else {
      appProps.pageProps.hasReadPermission = false;
    }
  }

  return { ...appProps };

};

export default MyApp