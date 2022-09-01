/* eslint-disable @next/next/next-script-for-ga */
import React from 'react'
import Menu from './Menu';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, ...pageProps }) {
	let display = "/assets/icons/lafrikana_solid400.jpg", og_whatsapp = "/assets/icons/lafrikana_solid400.jpg", og_facebook = "/assets/icons/lafrikana_ogF.jpg"
	return (
		<>
			<Head>
				<title>{pageProps.title}</title>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JXJYXG05H"></script>
				<script dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-7JXJYXG05H');`
				}}>
				</script>
				<link rel="icon" href="/favico.ico" />
				<meta name="description" content="Lafrikana" />
				<meta name="description" content="L'Afrikana - Care and Empowerment" />
				<meta name="keywords" content="L'Afrikana, lafrikana, organization, cbo, care, empowerment, rebuild, aep, accelerated education program, go girl, go-girl" />
				<meta name="copyright" content="https://www.lafrikana.or.ke" />
				<meta name="language" content="EN" />
				<meta name="robots" content="follow, index" />
				<meta name="revised" content="20th April, 2022" />
				<meta name="owner" content="breephr.com" />
				<meta name="url" content="https://www.lafrikana.or.ke" />
				<meta name="theme-color" content="#7E4911"/>
				<meta property="og:title" content={pageProps.title} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.lafrikana.or.ke" />
				<meta property="og:description" content="L'Afrikana - Care and Empowerment" />
				<meta property="og:site_name" content="https://www.lafrikana.or.ke" />
				<meta property="og:image" content={og_facebook} />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image" content={og_whatsapp} />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="400" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@lafrikanacbo1" />
				<meta name="twitter:title" content={pageProps.title} />
				<meta name="twitter:description" content="L'Afrikana - Care and Empowerment" />
				<meta name="twitter:image" content={display} />
				<meta itemProp="name" content={pageProps.title} />
				<meta itemProp="description" content="L'Afrikana - Care and Empowerment" />
				<meta itemProp="image" content={display} />
			</Head>
			<div id="container" className={ `env-${pageProps.env}` }>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
				{
					pageProps.env != "manage-gallery" && pageProps.env != "manage-blog" ?
						<Menu env={ pageProps.env }/>
					: ""
				}
				<div className="overflow-x-hidden">
					{children}
				</div>
				<Footer/>
			</div>
		</>
	);
}