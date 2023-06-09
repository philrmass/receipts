import { useEffect, useState } from 'preact/hooks';
import { useLocalStorage } from 'utilities/hooks';
import { version } from '../../package.json';
import styles from './Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const [max, setMax] = useLocalStorage('xMax', 0);

  useEffect(() => {
    setMax((m) => count > m ? count : m);
  }, [count, setMax]);

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <div>{`Count: ${count}`}</div>
      <div>{`Max: ${max}`}</div>
      <button onClick={() => setCount((c) => c + 1)}>Add</button>
      <div>{`v${version}`}</div>
    </div>
  );
}
