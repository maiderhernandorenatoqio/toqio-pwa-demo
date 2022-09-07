import React from "react";

import Navigator from './navigation/Navigator'
import About from "./screens/About";
import Home from "./screens/Home";

const App: React.FC = () => (
  <Navigator
    routes={[
      { component: Home, path: '/', name: 'Home' },
      { component: About, path: '/about', name: 'About' }
    ]}
  />
);

export default App;