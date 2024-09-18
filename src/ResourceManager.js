import React, { useState } from 'react';

const ResourceManager = () => {
    const [teamMembers, setTeamMembers] = useState([
        { name: 'John Doe', available: true, skills: ['JavaScript', 'React'] },
        { name: 'Jane Smith', available: false, skills: ['Design', 'CSS'] }
    ]);

    const toggleAvailability = (index) => {
        const updatedMembers = teamMembers.map((member, i) =>
            i === index ? { ...member, available: !member.available } : member
        );
        setTeamMembers(updatedMembers);
    };

    return (
        <div className="resource-manager">
            <h2>Team Availability</h2>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index}>
                        {member.name} - {member.available ? 'Available' : 'Not Available'}
                        <button onClick={() => toggleAvailability(index)}>
                            Toggle Availability
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceManager;

