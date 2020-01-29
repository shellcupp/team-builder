import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';
import './App.css';

function App(props) {
  const [teamMember, setTeamMember] = useState([
    {
      name:'Default Name',
      role:'Default Role'
    }
  ]);
 
  const addTeamMember = person => {
    const newTeamMember = {
      name: person.name,
      role: person.role
    };
    setTeamMember([...teamMember, newTeamMember]);
  };

  return (
    <div className="App">
        <h1>Team Members</h1>
        <Form addTeamMember={addTeamMember}/>
         < TeamMembers teamMember={teamMember}  />
    </div>
  );
}

export default App;
