import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  useEffect(() => {
    if (document.getElementById("video")) {
      document.getElementById("video").play();
    }
  }, []);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <style>
          {`
              #video {
                position: absolute;
                height: 100%;
                width: 177.77777778vh; /* 100 * 16 / 9 */
                min-width: 100%;
                min-height: 56.25vw; /* 100 * 9 / 16 */
                
                // border: 1px red solid;
                left: 50%; /* % of surrounding element */
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: -2;
              }

              #vid-overlay {
                position:absolute;
                background-color: rgba(0,0,0,0.7);
                z-index:-1;
                height: 100%;
                width: 100%;

              }
              #overall {
                position: relative;
                // border: 3px green solid;
                overflow: hidden;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            `}
        </style>
        <NavBar />
        <div className="flex-grow-1" id="overall">
          <video
            autoPlay
            muted
            loop
            id="video"
            src="https://cdn.sanity.io/files/6mx0z6jm/production/5efa0aeee9c301d39989e36122008558242727bf.mp4"
            type="video/mp4"
          ></video>
          <div id="vid-overlay"></div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
