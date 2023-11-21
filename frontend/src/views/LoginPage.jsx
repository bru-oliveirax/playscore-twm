import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/index';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Alterar a lógica aqui -------------------------------------------------------------
    if (email === 'user@example.com' && password === 'password') {
      navigate('/');
    } else {
      alert('Credenciais inválidas');
    }
  };
  // -------------------------------------------------------------------------------------

  const inputStyle = {
    backgroundColor: '#232b3d', 
    padding: '10px', 
    borderRadius: '5px', 
    marginBottom: '15px', 
    width: '80%', 
    border: 'none', 
    outline: 'none',
    color: '#A9A9A9',
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                  style={inputStyle}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control"
                  style={inputStyle}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '80%' }}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;