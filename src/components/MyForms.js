import React from 'react';
import { Input ,Container, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice } from '../redux/slice/user';
import { nanoid } from '@reduxjs/toolkit';
import { ADD_USER, EDIT_USER } from '../redux/sagas/types';

const MyForms = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({...user, [prop]:event.target.value }))
  }

  const handleSubmit = () =>{
    user.id === 0 ? dispatch({type: ADD_USER, user: {...user, id:nanoid(8)}}): dispatch({type: EDIT_USER, user})
    dispatch(setUserSlice({
      id: 0,
      name: '',
      surname: '',
      email:'',
      phone: '',
      password:''
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
      <Input onChange={handleChange('password')} placeholder="Enter Password" value={user.password} fullWidth />
      <Button onClick= {() => handleSubmit()}fullWidth variant="contained">Add User</Button>
    </Container>
    
    </>
  )
}
export default MyForms;