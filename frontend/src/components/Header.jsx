import logo from "../assets/playstore-logo.png"


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img 
            src={logo} 
            alt=""
            className="img-fluid" 
            style={{ width: '120px', height: 'auto' }}
          />
        </a>
      </div>
    </nav>
  );
}

export default Header;