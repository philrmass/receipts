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
    setName(value?.trim());
    onClose();
  };

  const handleKeyDown = (key, value) => {
    if (key === 'Enter') {
      handleSave(value);
    } else if (key === 'Escape') {
      onClose();
    }
  };

  const renderNames = (names) => (
    <>
      { names.map((value) => (
        <div
          key={value}
          className={styles.name}
          onClick={() => handleSave(value)}
        >
          {value}
        </div>
      )) }
    </>
  );

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.title}>All</div>
        <div className={styles.all}>
          { renderNames(names) }
        </div>
        <div className={styles.title}>Recent</div>
        <div className={styles.recent}>
          { renderNames(recentNames) }
        </div>
        <div className={styles.controls}>
          <input 
            autofocus
            type="text"
            value={nameStr}
            placeholder='Vendor'
            onInput={(e) => setNameStr(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key, e.target.value)}
          />
          <div className={styles.buttons}>
            <button onClick={() => onClose()}>Close</button>
            <button onClick={() => handleSave(nameStr)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
