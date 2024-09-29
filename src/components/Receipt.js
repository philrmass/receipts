import { getDateString } from '../utilities';
import styles from './Receipt.module.css';

export default function Receipt({
  id,
  onClick,
  receipt,
  setBackground,
}) {
  const classes = `${styles.wrap} ${setBackground ? styles.background : ''}`;
  
  return (
    <div
      id={id}
      className={classes}
      onClick={onClick}
    >
      <div className={styles.receipt}>
        <div className={styles.name}>
          {receipt.name}
        </div>
        <div className={styles.details}>
          <div>{`$${receipt.amount.toFixed(2)}`}</div>
          <div>{getDateString(receipt.date)}</div>
        </div>
      </div>
    </div>
  );
}
