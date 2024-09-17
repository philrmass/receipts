import { route } from 'preact-router';
import { getDateString } from '../utilities';
import styles from './RemoveReceipts.module.css';

export default function RemoveReceipts({ receipts, removeReceipt }) {
  const renderReceipt = ({ date, name, amount, uuid }) => (
    <div key={uuid} className={styles.receipt}>
      <div className={styles.details}>
        <div>{name}</div>
        <button
          className={styles.remove}
          onClick={() => removeReceipt(uuid)}
        >
          X
        </button>
      </div>
      <div className={styles.details}>
        <div>{`$${amount.toFixed(2)}`}</div>
        <div>{getDateString(date)}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.receipts}>
        { receipts.map((receipt) => renderReceipt(receipt)) }
      </div>
      <div className={styles.done}>
        <button
          onClick={() => route('/')}
        >
          Done
        </button>
      </div>
    </div>
  );
}
