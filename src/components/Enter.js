//import { useEffect, useState } from 'preact/hooks';
import styles from './Enter.module.css';

export default function Enter({
  receipts,
  setReceipts,
  showExit,
  showNames,
  version,
}) {
  console.log('enter', receipts, typeof setReceipts);

  return (
    <div className={styles.enter}>
      <h1>Enter</h1>
      <div onClick={showNames}>Name</div>
      <div onClick={showExit}>Remove Receipts</div>
      <div>{version}</div>
    </div>
  );
}
