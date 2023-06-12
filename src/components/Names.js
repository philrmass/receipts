import { useState } from 'preact/hooks';
import styles from './Names.module.css';

export default function Names({
  name,
  //names,
  onClose,
  //recentNames,
  setName,
}) {
  const [nameStr, setNameStr] = useState(name);

  const handleSave = (value) => {
    console.log('SAVE', value);
    setName(value);
    onClose();
  };

  return (
    <div className={styles.names}>
      <input 
        className={styles.name}
        type="text"
        value={nameStr}
        placeholder='Vendor'
        onInput={(e) => setNameStr(e.target.value)}
        onChange={(e) => handleSave(e.target.value)}
      />
      <h1>Names</h1>
      <button onClick={onClose}>Close</button>
      <button onClick={() => handleSave(nameStr)}>Save</button>
    </div>
  );
}
