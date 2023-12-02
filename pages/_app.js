import "@styles/globals.scss";
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../lib/ga';
export default function App({ Component, pageProps }) {

    useEffect(() => {
        initGA();
        
        const handleRouteChange = () => {
          logPageView();
        };
    
        Router.events.on('routeChangeComplete', handleRouteChange);
    
        return () => {
          Router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, []);

    return <Component {...pageProps} />;
}

