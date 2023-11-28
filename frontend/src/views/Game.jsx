import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Pacman } from '../components/index';
import 'bootstrap/dist/css/bootstrap.min.css';


const Game = () => {
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
                    <div class="card mb-3" style={{background:'#101728'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={require("../images/SMW.jpg")} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">Super Mário Wonder</h2>
                                    <p class="card-text" style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <h3 class="card-score">Nota: 4.5/5.0</h3>
                                    <br />
                                    <button type="button" class="btn btn-dark" style={{background:'#412583'}}>Avalie o jogo!</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default Game;