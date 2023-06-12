import { useState } from 'preact/hooks';
import styles from './Names.module.css';

export default function Names({
  name,
  names,
  onClose,
  recentNames,
  setName,
}) {
  const [nameStr, setNameStr] = useState(name);

  const handleSave = (value) => {
    setName(value);
    onClose();
  };

  return (
    <div className={styles.main}>
      <input 
        className={styles.name}
        type="text"
        value={nameStr}
        placeholder='Vendor'
        onInput={(e) => setNameStr(e.target.value)}
        onChange={(e) => handleSave(e.target.value)}
      />
      <div className={styles.names}>
        <div className={styles.title}>Recent</div>
        { recentNames.map((n) => (
          <div key={n} onClick={() => handleSave(n)}>
            { n }
          </div>
        )) }
      </div>
      <div className={styles.names}>
        <div className={styles.title}>All</div>
        { names.map((n) => (
          <div key={n} onClick={() => handleSave(n)}>
            { n }
          </div>
        )) }
      </div>
      <button onClick={onClose}>Close</button>
      <button onClick={() => handleSave(nameStr)}>Save</button>
    </div>
  );
}
