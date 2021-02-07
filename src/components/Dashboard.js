import React from "react";
import Temperature from "./Temperature";
import get from "../weather";
console.log(get("45039", "current"));

const Dashboard = () => {
    return (
        <React.Fragment>
            <Temperature />

        </React.Fragment>
    );
}

export default Dashboard;