import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import Icon from 'utilities/Icon';
import styles from './Payees.module.css';

function filterBySearch(payees, term) {
  const match = term.toLowerCase();
  return payees.filter((name) => {
    const lower = name.toLowerCase();
    return lower.indexOf(match) !== -1;
  });
}

export default function Payees({
  clearPayee,
  payee,
  payees,
  removePayee,
  savePayee,
  selectPayee,
}) {
  const [value, setValue] = useState(payee);
  const [matched, setMatched] = useState(payees);

  useEffect(() => {
    setValue(payee);
  }, [payee]);

  useEffect(() => {
    if (value) {
      setMatched(filterBySearch(payees, value));
    } else {
      setMatched(payees);
    }
  }, [payees, value]);

  const handleSave = () => {
    savePayee(value);
    handleClose(); 
  };

  const handleClose = () => {
    route('/add');
  };

  const handleKeyDown = (key) => {
    if (key === 'Enter') {
      handleSave();
    } else if (key === 'Escape') {
      handleClose(); 
    }
  };

  const handleClear = () => {
    setValue('');
    clearPayee();
  };

  // ??? add delete payee
  /*
    <button onClick={() => removePayee(payee)}>
      X
    </button>
  */
  const renderPayee = (payee) => (
    <div className={styles.payee}>
      <button
        onClick={() => removePayee(payee)}
      >
      <Icon 
        className={styles.icon}
        name="cross"
      />
      </button>
      <div onClick={() => selectPayee(payee)}>
        { payee }
      </div>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.payees}>
        <div className={styles.spacer} />
        <div className={styles.list}>
          { matched.map((payee, index) => renderPayee(payee, index)) }
        </div>
      </div>
      <div className={styles.search}>
        <input 
          type="text"
          value={value}
          placeholder='Vendor'
          onInput={(e) => setValue(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
        <button
          className={styles.clear}
          onClick={handleClear}
        >
          <Icon name="cross" className={styles.icon} />
        </button>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
