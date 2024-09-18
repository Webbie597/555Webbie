import React from 'react';

const NavBar = ({ setView }) => {
    return (
        <nav>
            <button onClick={() => setView('tasks')}>Task Board</button>
            <button onClick={() => setView('calendar')}>Calendar</button>
            <button onClick={() => setView('resources')}>Resource Manager</button>
        </nav>
    );
};

export default NavBar;
