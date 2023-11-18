import React, {useState, useEffect} from 'react';
import {Header, LoginButton, Pacman, StartImage, Title} from './index'


const Start = () => {
  const [loading, setLoading] = useState(false);
      
  useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, [])


    return (
      loading ?
          <Pacman/>
      :
        <div className='App'>
          <Header />
          <Title/>
          <LoginButton/>
          <StartImage/>
        </div>
    );
};

export default Start;