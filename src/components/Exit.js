//import { useEffect, useState } from 'preact/hooks';
import styles from './Exit.module.css';

export default function Exit({
  receipts,
  setReceipts,
  showEnter,
}) {
  console.log('exit', receipts, typeof setReceipts);

  return (
    <div className={styles.exit}>
      <div onClick={showEnter}>Add Receipts</div>
      <h1>Exit</h1>
    </div>
  );
}
