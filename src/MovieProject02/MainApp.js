import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
function MainApp() {
  return (
    <>
      <Auth0Provider
        domain="dev-odu2dzn708lldehf.us.auth0.com"
        clientId="kYlMOleYbta4N42hntkymuVpX7pfQ6L0"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </>
  );
}

export default MainApp;
