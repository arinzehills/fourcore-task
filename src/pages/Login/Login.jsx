import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signInProgress,signInProgressCompleted} from '../../store/authSlice';
import usePost from '../../hooks/usePost';
import Button from '../../components/Button/Button';

const Login = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [error,setError]=useState('') 
  
  

  const onSubmit = async (data) => {
    try {
      dispatch(signInProgress(data))
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch('/user.json');
      const users = await response.json();
      const user = users.find(user => user.username === data.username && user.password === data.password);
      if (user) {
        dispatch(signIn(data));
      }else{
        dispatch(signInProgressCompleted())
        setError("Invalid user")

      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
console.log("IS L",isLoading)
  return (
    <div className="max-w-md mx-auto my-4 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            name="username"
            // type="username"
            // ref={register({ required: true })}
            {...register('username', { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.username && <p className="text-red-500">Username is required</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            // ref={register({ required: true })}
            {...register('password', { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500">Password is required</p>}
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <Button loading={isLoading} type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
