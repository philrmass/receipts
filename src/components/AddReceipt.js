import { route } from 'preact-router';
import styles from './AddReceipt.module.css';

function validateAmount(str) {
  const value = parseFloat(str);

  if (Number.isNaN(value)) {
    return '';
  }
  return value.toFixed(2);
}

export default function AddReceipt({
  addReceipt,
  amount,
  clearPayee,
  date,
  payee,
  setAmount,
  setDate,
}) {
  const isValid = validateAmount(amount) && payee;

  const handleAmountChange = () => {
    const value = parseFloat(amount);

    if (Number.isNaN(value)) {
      setAmount('');
    } else {
      setAmount(value.toFixed(2));
      // ??? blur
    }
  };

  const handleClose = () => {
    route('/');
  };

  const handleAdd = () => {
    if (isValid) {
      addReceipt(date, payee, parseFloat(amount));

      clearPayee();
      setAmount('');
      handleClose(); 
    }
  };

  return (
    <div
      className={styles.main}
      onClick={handleClose}
    >
      <div className={styles.top} />
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={() => route('/payees')}>
          { payee || 'Payee' }
        </div>
        <div className={styles.row}>
          <div className={styles.amount}>
            <span>$</span>
            <input 
              type="number"
              placeholder="0.00"
              value={amount}
              onInput={(e) => setAmount(e.target.value)}
              onChange={() => handleAmountChange()}
            />
          </div>
          <div className={styles.date}>
            <div onClick={(e) => e.srcElement.nextElementSibling.showPicker()}>
              { date }
            </div>
            <input
              type='date'
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClose}>Cancel</button>
          <button
            disabled={!isValid}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
      <div className={styles.bottom} />
    </div>
  );
}
