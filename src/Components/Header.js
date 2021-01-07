import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
// Importando um SVG
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UseContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {/* Se existir usuario no "data" ele exibe o nome do usuario, se não mostra logar */}
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
            <Link className={styles.login} to="/login">
              Login / Criar
            </Link>
          )}
      </nav>
    </header>
  );
}

export default Header;