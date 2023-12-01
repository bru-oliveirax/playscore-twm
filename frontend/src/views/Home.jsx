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
      });
  }, []);

  return (
    <div className='App' style={{ overflowY: 'auto' }}>
      {loading ? <Pacman /> : (
        <>
          <Header />
          <div className="container-sm">
            {/* O restante do seu código para renderizar os cards aqui */}
            {data.map((games) => (
              <div key={games.id} className="col">
                <div className="card h-100">
                  <img src={require(`../images/${games.imageURL}`)} className="card-img-top" alt={games.title} />
                  <div className="card-body">
                    <h4 className="card-title">{games.title}</h4>
                    <h4 className="card-score">{games.total_score} ★</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
