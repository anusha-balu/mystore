import React from "react";

const context = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, //we are doing this just for getting the auto completion when we type ctx.
  onLogin: () => {}
});

export default context;
