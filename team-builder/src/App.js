import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';
import './App.css';

function App(props) {
  const [teamMember, setTeamMember] = useState
  ([
    {
      name:'Default',
      email:'Default',
      role:'Default'
    }
  ]);
 
  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  };
//get ready to edit members
//add edit button
  return (
    <div className="App">
        <h1>Team Member List</h1>
        <Form addTeamMember={addTeamMember}/>
        <TeamMembers teamMember={teamMember}/>
    </div>
  );
}

export default App;
