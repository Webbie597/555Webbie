import React from 'react';
import './App.css';
import TaskBoard from './TaskBoard';
import CalendarView from './CalendarView';

function App() {
    return (
        <div className="App">
            <h1>Dashboard Mock-up</h1>
            <TaskBoard />
            <CalendarView />
        </div>
    );
}

export default App;
