import React from 'react';
import { Input ,Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice } from '../redux/slice/user';
import { addUserSlice, updateUserSlice } from '../redux/slice/users';
import { nanoid } from '@reduxjs/toolkit';

const MyForms = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({...user, [prop]:event.target.value }))
  }

  const handleSubmit = () =>{
    user.id === 0 ? dispatch(addUserSlice({...user, id:nanoid(8)})) : dispatch(updateUserSlice({...user}))
    dispatch(setUserSlice({
      id: 0,
      name: '',
      surname: '',
      email:'',
      phone: ''
  }))
  }
  return (
    <>
    <Container>
    <Input disabled placeholder="Enter Name" value={user.id} fullWidth />
      <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth />
      <Input onChange={handleChange('surname')} placeholder="Enter Surname" value={user.surname} fullWidth />
      <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth />
      <Input onChange={handleChange('phone')} placeholder="Enter Phone" value={user.phone} fullWidth />
      <Button onClick= {() => handleSubmit()}fullWidth variant="contained">Add User</Button>
    </Container>
    
    </>
  )
}
export default MyForms;