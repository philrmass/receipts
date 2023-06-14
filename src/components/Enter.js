import { useEffect, useState } from 'preact/hooks';
import Receipts from './Receipts';
import Title from './Title';
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
}) {
  const buttonEnabled = receipts.length > 0;
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
    <div className={styles.main}>
      <div className={styles.title}>
        <Title
          buttonEnabled={buttonEnabled} 
          showExit={showExit}
        />
      </div>
      <div className={styles.receipts}>
        <Receipts receipts={receipts} />
      </div>
      <div className={styles.controls}>
        <div className={styles.inputs}>
          <div className={styles.top}>
            <input
              className={styles.date}
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div>
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
            </div>
          </div>
          <input 
            className={styles.name}
            type="text"
            placeholder='Vendor'
            value={name}
            onClick={showNames}
          />
        </div>
        <div className={styles.button}>
          <button
            disabled={!isValid}
            onClick={() => addReceipt(date, name, amount)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
