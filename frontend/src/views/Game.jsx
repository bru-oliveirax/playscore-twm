import { useState, useEffect } from 'react';
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
                                <img src=  'https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/1.png' alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">Mass Effect Trilogy</h2>
                                    <br />
                                    <p class="card-text" style={{textAlign: 'justify'}}>Embark on a spacefaring adventure across the galaxy as Commander Shepard. Your choices shape the destiny of the universe in this epic trilogy, blending gripping narrative, intense combat, and meaningful decisions.</p>
                                    <h5 class="card-title">Category: Role-playing (RPG), Adventure</h5>
                                    <br />
                                    <div class="col-md-2">
                                        <input type="text" class="form-control" placeholder="Nota" aria-label="Nota"/>
                                    </div>
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