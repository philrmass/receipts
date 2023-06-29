import Receipts from './Receipts';
import Title from './Title';
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
        <div className={styles.values}>
          <div>{ dateStr }</div>
          <div>{ last.name }</div>
          <span>${last.amount.toFixed(2)}</span>
        </div>
        <div className={styles.button}>
          <button onClick={removeLastReceipt}>
            Remove
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Title showEnter={showEnter} />
      </div>
      <div className={styles.receipts}>
        <Receipts receipts={receipts} />
      </div>
      {renderLast()}
    </div>
  );
}
