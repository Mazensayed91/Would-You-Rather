import React, { useState } from 'react';
import Tab from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";


const views = ['Home', 'New Question', 'Leaderboard'];



function renderSwitch(activeType) {
    switch(activeType) {
        case 'Home':
            return <Redirect to="/"/>;
        case 'New Question':
            return <Redirect to="/new_question" />;
        case 'Leaderboard':
            return <Redirect to="/leaderboard" />;
        default:
            console.log("default case")
    }
}
function NavBar() {
    const [active, setActive] = useState(views[0]);
    return (
        <React.Fragment>
                {views.map(type => (
                    <Tab
                        key={type}
                        onClick={() => {
                            setActive(type);
                            renderSwitch(active)
                        }}
                    >
                        {type}
                    </Tab>

                ))}
            {renderSwitch(active)}
            <p />

        </React.Fragment>
    );
}

export default NavBar