import { version } from '../../package.json';
import styles from './Title.module.css';

export default function Title({
  buttonEnabled = true,
  showEnter,
  showExit,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div>Receipts</div>
        <div className={styles.version}>
          {`v${version}`}
        </div>
      </div>
      { showExit && (
        <button disabled={!buttonEnabled} onClick={showExit}>
          Remove Receipts
        </button>
      )}
      { showEnter && (
        <button disabled={!buttonEnabled} onClick={showEnter}>
          Add Receipts
        </button>
      ) }
    </div>
  );
}
