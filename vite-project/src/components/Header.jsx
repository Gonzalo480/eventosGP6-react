import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Bienvenido a los Eventos</h1>
      <div className="auth-buttons">
        <button className="login-button">Iniciar sesión</button>
        <button className="register-button">Registrarse</button>
      </div>
    </header>
  );
};

export default Header;
