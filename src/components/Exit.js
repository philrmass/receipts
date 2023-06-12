import Receipts from './Receipts';
import styles from './Exit.module.css';

export default function Exit({
  receipts,
  removeLastReceipt,
  showEnter,
}) {
  const last = receipts.at(-1);

  const renderLast = () => {
    if (!last) {
      return null;
    }

    const dateStr = new Date(last.date).toLocaleDateString();

    return (
      <div className={styles.last}>
        <div className={styles.top}>
          <div>{ dateStr }</div>
          <div>{ last.name }</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.amount}>
            <span>${last.amount.toFixed(2)}</span>
          </div>
          <button onClick={removeLastReceipt}>
            Remove
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.exit}>
      <Receipts receipts={receipts} />
      {renderLast()}
      <div className={styles.buttons}>
        <button onClick={showEnter}>Add Receipts</button>
      </div>
    </div>
  );
}
