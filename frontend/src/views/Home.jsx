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
            <div className='App'>

                <Header />
                <div class="container-sm">
                    <div class='container text-center 0'>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <br />
                        <br />
                    </div>
                    <div class="container text-center 1">
                        <div class="row align-items-center">

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/SMW.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">SUPER MARIO WONDER</h3>
                                        <h4 class="card-title">4.5 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/diablo4.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">DIABLO IV</h3>
                                        <h4 class="card-title">4.9 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/ItTakesTwo.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">IT TAKES TWO</h3>
                                        <h4 class="card-title">4.7 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="container text-center 2">
                        <div class="row align-items-center">

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/SMW.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">SUPER MARIO WONDER</h3>
                                        <h4 class="card-title">4.5 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/diablo4.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">DIABLO IV</h3>
                                        <h4 class="card-title">4.9 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100">
                                    <img src={require("../images/ItTakesTwo.jpg")} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">IT TAKES TWO</h3>
                                        <h4 class="card-title">4.7 ★</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default Home;