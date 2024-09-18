import React, { useState } from 'react';
import './App.css';
import TaskBoard from './TaskBoard';
import CalendarView from './CalendarView';
import NavBar from './NavBar';
import ResourceManager from './ResourceManager';

function App() {
    const [view, setView] = useState('tasks');

    return (
        <div className="App">
            <h1>Dashboard Mock-up</h1>
            <NavBar setView={setView} />
            {view === 'tasks' && <TaskBoard />}
            {view === 'calendar' && <CalendarView />}
            {view === 'resources' && <ResourceManager />}            
        </div>
    );
}

export default App;
