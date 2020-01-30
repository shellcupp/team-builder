import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';
import './App.css';

function App(props) {
  const [teamMember, setTeamMember] = useState
  ([]);
 
  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  };

//getting ready to add edit members
//add edit button
  return (
    <div>
        <h1>Team Member List</h1>
        <Form addTeamMember={addTeamMember}/>
        <TeamMembers teamMember={teamMember}/>
    </div>
  );
}

export default App;
