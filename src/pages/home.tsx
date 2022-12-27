import React, { useState } from 'react';
import HomeContent from '../components/pages-components/home';

const Home = () => {
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

  const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(data);
  }

  return (
    <HomeContent onChange={handleInputChange} />
  );
};

export default Home;