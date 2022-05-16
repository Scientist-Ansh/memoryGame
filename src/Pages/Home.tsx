import styles from '../styles/Home.module.css';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.container}>
      <h1>MemoryGame</h1>

      <Link to="/instructions">
        {' '}
        <button>Instructions</button>{' '}
      </Link>
      <Link to="/game">
        {' '}
        <button>Play</button>
      </Link>
    </div>
  );
}
export default Home;
