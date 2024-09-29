import styles from './Totals.module.css';

export default function Totals({ receipts }) {
  const total = receipts.reduce((sum, { amount }) => sum + amount, 0);

  return (
    <div className={styles.totals}>
      <div>{ `${receipts.length} receipts` }</div>
      <div>{ `$${total.toFixed(2)}` }</div>
    </div>
  );
}
