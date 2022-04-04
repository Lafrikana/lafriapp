import React from 'react'
import Menu from './Menu';
import Footer from './Footer';

export default function Layout({ children, ...pageProps }) {

	return (
		<div id="container" className={ `env-${pageProps.env}` }>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
			<Menu env={ pageProps.env }/>
			{children}
			<Footer/>
		</div>
	);
}