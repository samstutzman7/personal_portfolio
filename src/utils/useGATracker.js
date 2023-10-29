import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const useGaTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    //console.log("in here from " + location.pathname + location.search);

    useEffect(() => {
        if (!window.location.href.includes("localhost") && !initialized) {
            ReactGA.initialize("G-2ZGCCB2VJ8");
            setInitialized(true);
        }
        
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.send({ hitType: "pageview", page: "/" + location.pathname + location.search, title: location.pathname + location.search });
        }
    }, [initialized, location]);
};

export default useGaTracker;