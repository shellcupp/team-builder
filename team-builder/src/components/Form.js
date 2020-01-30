import React, { useState} from 'react';

const Form = props => {
    const [teamMember, setTeamMember] = useState({
        name: 'Default',
        role: 'Default'
    });
const handleChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value})
};

const submitForm = e => {
    e.preventDefault();
    props.addTeamMember(teamMember);
    setTeamMember({name:'', role:''});
};

return(
    <form onSubmit={submitForm}>
    <label htmlFor='name'> Name </label>
    <input
     id='name'
     type='text'
     name='name'
     placeholder='Enter Name'
     value={teamMember.name}
     onChange={handleChange}
    />
    <label htmlFor='email'> Email </label>
    <input
    id='email'
    type='email'
    name='email'
    placeholder='Enter Email'
    value={teamMember.email}
    onChange={handleChange}
    />
    <label htmlFor='role'> Role </label>
    <input
    id='role'
    type='text'
    name='role'
    placeholder='Enter Role'
    value={teamMember.role}
    onChange={handleChange}
    />
    <button type='submit'>Add Team Member</button>
    </form>
)
}
export default Form;