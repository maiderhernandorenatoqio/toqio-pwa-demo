import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './navigator.styles.css'

type RouteProps = {
    Component: any;
    path: string;
    name: string
}
type NavigatorProps = {
    routes: RouteProps[]
}

const Navigator: React.FC<NavigatorProps> = ({ routes }) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {routes.map(({ path, name }) => (
                            <li key={path}>
                                <Link to={path}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(({ Component, path }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    )
};


export default Navigator;