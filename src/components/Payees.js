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

  const handleAction = () => {
    savePayee(value);
    handleClose(); 
  };

  const handleClose = () => {
    route('/add');
  };

  const handleKeyDown = (key) => {
    if (key === 'Enter') {
      handleAction();
    } else if (key === 'Escape') {
      handleClose(); 
    }
  };

  const handleClear = () => {
    setValue('');
    clearPayee();
  };

  const handleListClick = () => {
    if (matched.length === 0) {
      handleAction();
    } else if (matched.length === 1) {
      selectPayee(matched[0]);
      handleClose(); 
    }
  };

  const getActionLabel = () => {
    if (matched.includes(value)) {
      return 'Set';
    }

    if (payee) {
      return (value !== payee) ? 'Save' : 'Set';
    }

    return 'Add';
  };

  const renderXButton = (onClick) => (
    <button
      className={styles.x}
      onClick={onClick}
    >
      <Icon 
        className={styles.icon}
        name="cross"
      />
    </button>
  );

  const renderPayee = (payee) => (
    <div className={styles.payee}>
      { renderXButton(() => removePayee(payee)) }
      <div onClick={() => selectPayee(payee)}>
        { payee }
      </div>
    </div>
  );

  return (
    <div className={styles.main}>
      <div
        className={`shadows ${styles.payees}`}
        onClick={handleListClick}
      >
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
        { renderXButton(handleClear) }
      </div>
      <div className={styles.buttons}>
        <button onClick={handleClose}>Close</button>
        <button disabled={!value} onClick={handleAction}>
          { getActionLabel() }
        </button>
      </div>
    </div>
  );
}
