import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import styles from './AddReceipt.module.css';

function getToday() {
  const today = new Date();
  const year = today.toLocaleDateString('en-US', { year: 'numeric' });
  const month = today.toLocaleDateString('en-US', { month: '2-digit' });
  const day = today.toLocaleDateString('en-US', { day: '2-digit' });

  return `${year}-${month}-${day}`;
}

export default function AddReceipt({ addReceipt, payee }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(getToday());
  console.log('PAYEE', payee);

  const handleAmountChange = () => {
    console.log('SET-AMOUNT', amount, typeof amount);
    /*
    setAmount(amount.replace(/[^0-9.]/g, ''));
    const value = parseFloat(str);
    if (isNaN(value)) {
      setAmount(null);
    } else {
      setAmount(value);
    }
    setAmount(amount?.toFixed(2) ?? '');
    */
  };

  const handleAdd = () => {
    // ??? convert amount to number

    addReceipt();
    route('/add');
  };

  return (
    <div className={styles.main}>
      <div>
        { payee.name ?? 'Payee' }
      </div>
      <div className={styles.amount}>
        <span className={styles.dollar}>$</span>
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
      <div>
        <button
          onClick={() => route('/')}
        >
          Cancel
        </button>

        <button
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}
