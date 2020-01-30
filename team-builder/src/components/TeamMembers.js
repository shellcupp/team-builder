import React from 'react';


const TeamMembers = props => {
  const {teamMember} = props;
  
  return (
    <div >
    {props.teamMember.map(person => (
        <div key={teamMember.id}>
            <h2>Name: {person.name}</h2>
            <p>Email: {person.email}</p>
            <p>Role: {person.role}</p>
        </div>
    ))}
</div>
  );
    }

export default TeamMembers;
