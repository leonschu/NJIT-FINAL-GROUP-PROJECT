import "@styles/globals.scss";
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../lib/ga';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export default function App({ Component, pageProps }) {
    const [isConsentGiven, setIsConsentGiven] = useState(false);

    useEffect(() => {
        // Check if consent has already been given
        const consent = getCookieConsentValue();
        if (consent === "true") {
            initGA();
            setIsConsentGiven(true);
        }

        // Handle route changes for Google Analytics
        const handleRouteChange = () => {
            if (isConsentGiven) {
                logPageView();
            }
        };

        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [isConsentGiven]);
    
    return (
        <>
            <Component {...pageProps} />
            <CookieConsent
                location="bottom"
                buttonText="I accept"
                declineButtonText="I decline"
                cookieName="myAwesomeCookieName"
                style={{ background: "#2B373B" }}
                buttonStyle={{
                    color: "#B8B094", // Use the 500 color from your provided color scheme
                    fontSize: "13px",
                    backgroundColor: "#4e503b", // Background color for the "I accept" button
                }}
                declineButtonStyle={{
                    color: "#FF0000", // Red color for the "I decline" button
                    fontSize: "13px",
                    backgroundColor: "#4e503b", // Background color for the "I decline" button
                }}
                onAccept={() => {
                    initGA();
                    setIsConsentGiven(true);
                }}
                onDecline={() => {
                    setIsConsentGiven(false);
                }}
                enableDeclineButton
                flipButtons
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>Your choice will be saved for your next visit.</span>
            </CookieConsent>
        </>
    );
    
}
