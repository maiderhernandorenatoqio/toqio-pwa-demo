import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

type RouteProps = {
    component: any;
    path: string;
    name: string
}
type NavigatorProps = {
    routes: RouteProps[]
}

const Navigator: React.FC<NavigatorProps> = ({ routes }) => {
    return (
        <Router>
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
                {routes.map(({ component, path }) => (
                    <Route path={path} key={path}>
                        {component}
                    </Route>
                ))}
            </Routes>
        </Router>
    )
};

export default Navigator;