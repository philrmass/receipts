import { route } from 'preact-router';
import { getDateString } from '../utilities';
import styles from './Receipts.module.css';

export default function Receipts({ receipts }) {
  const renderReceipt = ({ date, name, amount }) => (
    <div className={styles.receipt}>
      <div>{name}</div>
      <div>{`$${amount.toFixed(2)}`}</div>
      <div>{getDateString(date)}</div>
    </div>
  );

  return (
    <div>
      <div>Receipts</div>
      <div className={styles.receipts}>
        { receipts.map((receipt) => renderReceipt(receipt)) }
      </div>
      <button
        className={styles.add}
        onClick={() => route('/add')}
      >
        +
      </button>
      <button
        className={styles.remove}
        onClick={() => route('/add')}
      >
        -
      </button>
    </div>
  );
}
/*
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
*/
