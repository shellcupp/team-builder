import React, { useState} from 'react';

const Form = props => {
const [teamMember, setTeamMember] = useState({});

const handleChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value})
};

const submitForm = e => {
    e.preventDefault();
    if (teamMember.name.trim().length === 0 ){
    return
    };
    
    props.addTeamMember(teamMember);
    setTeamMember({name:'',email:'', role:''});
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
    <button type='submit'> Add Team Member </button>
    </form>
)
}
export default Form;