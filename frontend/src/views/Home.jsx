import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Pacman } from '../components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria
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
                            <div class="card h-100">
                                <img src={require("../images/SMW.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">SUPER MARIO WONDER</h4>
                                    <h4 class="card-score">4.5 ★</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <img src={require("../images/diablo4.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">DIABLO IV</h4>
                                    <h4 class="card-score">4.9 ★</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <img src={require("../images/ItTakesTwo.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">IT TAKES TWO</h4>
                                    <h4 class="card-score">4.7 ★</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br />

                <div class="container text-center 2">
                    <div class="row align-items-center">

                        <div class="col">
                            <div class="card h-100">
                                <img src={require("../images/SMW.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">SUPER MARIO WONDER</h4>
                                    <h4 class="card-title">4.5 ★</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <img src={require("../images/diablo4.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">DIABLO IV</h4>
                                    <h4 class="card-title">4.9 ★</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                                <img src={require("../images/ItTakesTwo.jpg")} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title">IT TAKES TWO</h4>
                                    <h4 class="card-title">4.7 ★</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            

    );
};
export default Home;