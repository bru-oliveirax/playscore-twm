import { useNavigate, BrowserRouter as Route } from 'react-router-dom';
import { Login, SignUp } from '../../index';


function LoginButton() {
    const buttonStyle = {
        position: 'fixed',
        bottom: 'calc(50vh - 150px)',
        left: 'calc(50vw - 550px)', 
        fontFamily: 'CodeDC-Pro, sans-serif',
        background: 'linear-gradient(to right, #101728, #412583)',
        fontWeight: 'bold',
        color: '#fff',
        width: '300px',
        height: '50px',
      };

    const textStyle = {
        position: 'fixed',
        bottom: 'calc(50vh - 200px)',
        left: 'calc(50vw - 535px)', 
        fontFamily: 'CodeDC-Pro, sans-serif',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'underline',
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(<Route path = "/login" element = { <Login /> } />)
    }

    const handleTextClick = () => {
        navigate(<Route path = '/sign-up' element = {<SignUp />}/>)
    }


      return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '10px'}}>
                <button className="btn btn-primary border-0 outline-0" onClick={handleButtonClick} style = {buttonStyle}>
                    LOGIN
                </button>
            </div>
            <p onClick={handleTextClick} style={textStyle}>
                Não tenho conta. Cadastrar agora!
            </p>
        </div>
      );
}

export default LoginButton;