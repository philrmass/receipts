import { route } from 'preact-router';
import Icon from 'utilities/icon';
import { getDateString } from '../utilities';
import { version } from '../../package.json';
import styles from './Receipts.module.css';

export default function Receipts({ receipts }) {
  const renderReceipt = ({ date, name, amount, uuid }) => (
    <div key={uuid} className={styles.receipt}>
      <div>{name}</div>
      <div className={styles.details}>
        <div>{`$${amount.toFixed(2)}`}</div>
        <div>{getDateString(date)}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        Receipts
        <div className={styles.version}>
          {`v${version}`}
        </div>
      </div>
      <div
        className={styles.receipts}
        onClick={() => route('/add')}
      >
        { receipts.map((receipt) => renderReceipt(receipt)) }
      </div>
      <button
        className={`round ${styles.add}`}
        onClick={() => route('/add')}
      >
        <Icon name="plus" />
      </button>
      <button
        className={`round ${styles.remove}`}
        onClick={() => route('/remove')}
      >
        <Icon name="cross" />
      </button>
    </div>
  );
}
