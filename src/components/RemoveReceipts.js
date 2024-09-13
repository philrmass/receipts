import styles from './RemoveReceipts.module.css';

export default function RemoveReceipts({ payee }) {
  return (
    <div className={styles.main}>
      <div>{`PAYEES (${payee.name})`}</div>
    </div>
  );
}
