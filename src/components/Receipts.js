import { getDateString } from '../utilities';
import styles from './Receipts.module.css';

export default function Receipts({ receipts }) {
  const renderReceipt = ({ date, name, amount }) => (
    <div className={styles.receipt}>
      <div className={styles.date}>
        <div>{getDateString(date)}</div>
        <div>{`$${amount.toFixed(2)}`}</div>
      </div>
      <div>{name}</div>
    </div>
  );

  return (
    <div>
      <div className={styles.receipts}>
        { receipts.map((receipt) => renderReceipt(receipt)) }
      </div>
    </div>
  );
}
