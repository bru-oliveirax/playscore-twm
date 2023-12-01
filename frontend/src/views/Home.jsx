import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Pacman } from '../components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle]             = useState('');
  const [imageURL, setImageURL]       = useState('');
  const [total_score, setTotal_score] = useState(0);

  useEffect(() => {
    game(games);
  }, []);

const game = async (games) => {
  console.log(games);
  axios.get(("http://127.0.0.1:8000/games")).then((response) =>{
    console.log(response.data);
    setTitle(response.data.title);
    setImageURL(response.data.imageURL);
    setTotal_score(response.data.total_score);
  })
  
};


  return (
    <div className='App' style={{overflowY: 'auto'}}>
      {loading ? <Pacman /> : (
        <>
          <Header />
          <div className="container-sm">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categoria
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Role-playing (RPG)</a></li>
                <li><a className="dropdown-item" href="#">Adventure</a></li>
                <li><a className="dropdown-item" href="#">Platform</a></li>
                <li><a className="dropdown-item" href="#">First Person Shooter (FPS)</a></li>
                <li><a className="dropdown-item" href="#">Multiplayer Online Battle Arena (MOBA)</a></li>
              </ul>
            </div>

            <br />

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {games.map((game) => (
                <div key={game.title} className="col">
                  <div className="card h-100">
                    <img src={game.imageURL} alt={game.title} />
                    <div className="card-body">
                      <h4 className="card-title">{game.title}</h4>
                      <h4 className="card-score">{game.total_score} ★</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <br />
        </>
      )}
    </div>
  );
};

export default Home;
