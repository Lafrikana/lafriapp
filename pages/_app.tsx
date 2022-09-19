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
import axios from 'axios';

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

    const config = {
      headers: appContext.ctx.req ? {cookie: appContext.ctx.req.headers.cookie} : undefined,
    };
    const base_url = "http://localhost:3005"
    // const base_url = "https://lafrikana.or.ke"
    let client_cookies = undefined, client_cookie = undefined;
    let deb = undefined;
    try {
      const res = await axios.post(`${base_url}/api/read_cookie`, {}, config);
      deb = res.data.cookie
      client_cookies = new Cookies(res.data.cookie)
      client_cookie = client_cookies.get(consts.SiteReadCookie);
    } catch(err){
      console.log(err)
    }

    console.log("Client Cookie")
    console.log(client_cookie)
    console.log(appProps.pageProps.hasReadPermission)
    console.log(deb)

    const cookies = new Cookies(appContext.ctx.req.headers.cookie);

    appProps.pageProps.cookieSrc = deb
    // appProps.pageProps.cookieSrc = client_cookie
    appProps.pageProps.cookieConsts = consts.SiteReadPass

    if (client_cookie === consts.SiteReadPass) {
      appProps.pageProps.hasReadPermission = true;
    }
    else {
      appProps.pageProps.hasReadPermission = false;
    }
  }

  return { ...appProps };

};

export default MyApp