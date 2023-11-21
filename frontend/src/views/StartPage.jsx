import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Pacman } from '../components/index';
import image from "../assets/start_image.png"


const Start = () => {
  const [loading, setLoading] = useState(false);
      
  useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      }, [])

  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate("/login");
  };

  const handleTextClick = () => {
      navigate('/sign-up');
  };

    return (
      loading ?
          <Pacman/>
      :
        <div className='App'>
          <Header />
          <p className='title-style'>
                Comece a <br/> 
                avaliar!
          </p>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '10px'}}>
                <button className="btn btn-primary border-0 outline-0 login-button-style" onClick={handleButtonClick}>
                    LOGIN
                </button>
            </div>
            <p className='sign-up-text-style' onClick={handleTextClick}>
                Não tenho conta. Cadastrar agora!
            </p>
          </div>
          <div style={{ position: 'relative', height: '100vh' }}>
            <img className='start-image'
              src={image}
              alt=""
            />
          </div>
        </div>
    );
};

export default Start;