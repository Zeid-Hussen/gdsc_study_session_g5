import React from 'react';
import './GroupList.css'; // Import your CSS file

const GroupList = () => {
  // Array of group members' names
  const groupMembers = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Emma',
    'Frank',
    'Grace',
    'Henry',
    'Ivy',
    'Jack',
  ];

  return (
    <div className="group-list">
      <h2>Group 10 Members</h2>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <img
        src="https://via.placeholder.com/150"
        alt="Group Image"
        className="group-image"
      />
    </div>
  );
};

export default GroupList;
