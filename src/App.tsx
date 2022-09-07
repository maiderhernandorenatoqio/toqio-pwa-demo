import React from "react";

import Navigator from './navigation/Navigator'
import About from "./screens/About";
import Home from "./screens/Home";

const App: React.FC = () => (
  <Navigator
    routes={[
      { Component: Home, path: '/', name: 'Home' },
      { Component: About, path: '/about', name: 'About' }
    ]}
  />
);

export default App;