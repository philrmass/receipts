import { route } from 'preact-router';
import Icon from 'utilities/icon';
import { version } from '../../package.json';
import Receipt from './Receipt';
import Totals from './Totals';
import styles from './Receipts.module.css';

export default function Receipts({ receipts }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          Receipts
          <div className={styles.version}>
            {`v${version}`}
          </div>
        </div>
        <Totals receipts={receipts} />
      </div>
      <div
        className={`shadows ${styles.receipts}`}
        onClick={() => route('/add')}
      >
        { receipts.map((receipt) => (
          <Receipt
            key={receipt.uuid}
            receipt={receipt}
          />
        )) }
      </div>
      <button
        className={`round ${styles.add}`}
        onClick={() => route('/add')}
      >
        <Icon name="plus" />
      </button>
      <button
        className={`round ${styles.remove}`}
        disabled={receipts.length === 0}
        onClick={() => route('/remove')}
      >
        <Icon name="cross" />
      </button>
    </div>
  );
}
