import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeContent from '../components/pages-components/home';
import { useAuth } from '../services/auth/auth';

const Home = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {email, password} = data
    if (email !== '' && password !== '') {
      login(data)
    }
  }

  return (
    <HomeContent onChange={handleInputChange} onSubmit={handleSubmitForm} />
  );
};

export default Home;