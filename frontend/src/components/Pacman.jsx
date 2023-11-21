import PacmanLoader from 'react-spinners/PacmanLoader'
import loading from '../views/StartPage'


function Pacman() {
  return (
    <div className='pacman'>
      <PacmanLoader
        size={30}
        color={'#36d7b7'}
        loading={loading}
      />
    </div>
  );
}

export default Pacman;