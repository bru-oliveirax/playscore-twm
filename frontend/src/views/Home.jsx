import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Pacman } from '../components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/games")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao obter dados:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='App' style={{ overflowY: 'auto' }}>
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
              {data.map((games) => (
                <div key={games.id} className="col">
                  <div className="card h-100">
                    <img src={require(`../images/${games.image}`)} className="card-img-top" alt={games.title} />
                    <div className="card-body">
                      <h4 className="card-title">{games.title}</h4>
                      <h4 className="card-score">{games.score} ★</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Renderize mais cards ou outras seções, se necessário */}
            </div>
            <br />
            <br />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
