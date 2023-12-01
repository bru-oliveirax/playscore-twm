import { useState, useEffect } from 'react';
import { Header, Pacman } from '../components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    loading ?
      <Pacman />
      :
      <div className='App' style={{ overflowY: 'auto' }}>

        <Header />
        <div class="container-sm">
          <h2>Rate your games now!</h2>
          <br />
          <br />
          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose your category
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Role-playing (RPG)</a></li>
              <li><a class="dropdown-item" href="#">Adventure</a></li>
              <li><a class="dropdown-item" href="#">Platform</a></li>
              <li><a class="dropdown-item" href="#">First Person Shooter (FPS)</a></li>
              <li><a class="dropdown-item" href="#">Multiplayer Online Battle Arena (MOBA)</a></li>
            </ul>
          </div>
          <br />
          <div class="row align-items-center">
            <div class="col">
              <Link to="/game">
                <div class="card h-100">
                  <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/1.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-title">Mass Effect Trilogy</h4>
                    <h5 class="card-title">4.8 ★</h5>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/2.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">Red Dead Redemption 2</h4>
                  <h5 class="card-title">5.0 ★</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/3.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">The Witcher 3: Wild Hunt</h4>
                  <h5 class="card-title">4.7 ★</h5>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div class="row align-items-center">
            <div class="col">
              <div class="card h-100">
                <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/4.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">Sekiro: Shadows Die Twice</h4>
                  <h5 class="card-title">4.7 ★</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/5.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">Ghost of Tsushima</h4>
                  <h5 class="card-title">4.5 ★</h5>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100">
                <img src="https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/6.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h4 class="card-title">Super Mario World</h4>
                  <h5 class="card-title">4.5 ★</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container d-flex justify-content-center pagination-container">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <br />

        <div class="container text-center">
          <p><a class="link-opacity-25-hover" href="#" style={{ color: 'white' }}>Logout</a></p>
        </div>
      </div>
  );
};
export default Home;