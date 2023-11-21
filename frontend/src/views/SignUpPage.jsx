import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/index';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Lógica de cadastro aqui...
    if (name !== '' && email !== '' && password !== '' && password === confirmPassword) {
      navigate('/');
    } else {
      alert('Preencha todos os campos corretamente para se cadastrar.');
    }
  };

  const formContainerStyle = {
    marginTop: '15px', // Ajuste a margem superior do contêiner do formulário
  };

  const inputStyle = {
    border: '1px solid #fff',
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
      <div className="container mt-2" style={{ marginTop: '20px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-4">Crie uma conta</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control"
                  style={inputStyle}
                />
              </div>
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
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="form-control"
                  style={inputStyle}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '80%' }}>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
