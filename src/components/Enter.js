import { useEffect, useState } from 'preact/hooks';
import Receipts from './Receipts';
import styles from './Enter.module.css';

export default function Enter({
  addReceipt,
  amount,
  date,
  name,
  receipts,
  setAmount,
  setDate,
  showExit,
  showNames,
  version,
}) {
  const amountDigits = 8;
  const [amountStr, setAmountStr] = useState(amount?.toFixed(2) ?? '');
  const isValid = date && name && amountStr;

  useEffect(() => {
    setAmountStr(amount?.toFixed(2) ?? '');
  }, [amount]);

  useEffect(() => {
    setAmountStr(amountStr.replace(/[^0-9.]/g, ''));
  }, [amountStr]);

  const parseAmount = (str) => {
    const value = parseFloat(str);
    if (isNaN(value)) {
      setAmount(null);
    } else {
      setAmount(value);
    }
  };

  return (
    <div className={styles.enter}>
      <div className={styles.title}>
        <div>Receipts</div>
        <div className={styles.version}>
          {`v${version}`}
        </div>
      </div>
      <div className={styles.controls}>
        <input
          className={styles.date}
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input 
          className={styles.name}
          type="text"
          placeholder='Vendor'
          value={name}
          onClick={showNames}
        />
        <span>$</span>
        <input 
          className={styles.amount}
          type="text"
          maxLength={amountDigits}
          size={amountDigits}
          placeholder="0.00"
          value={amountStr}
          onInput={(e) => setAmountStr(e.target.value)}
          onChange={(e) => parseAmount(e.target.value)}
        />
        <button
          disabled={!isValid}
          onClick={() => addReceipt(date, name, amount)}
        >
          Add
        </button>
      </div>
      <Receipts receipts={receipts} />
      <div className={styles.buttons}>
        <button disabled={receipts.length === 0} onClick={showExit}>
          Remove Receipts
        </button>
      </div>
    </div>
  );
}
