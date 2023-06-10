//import { useEffect, useState } from 'preact/hooks';
import styles from './Names.module.css';

export default function Names({
  name,
  names,
  onClose,
  recentNames,
  setName,
}) {
  console.log('names', name, names, recentNames, typeof setName);

  const handleSave = () => {
    onClose();
  };

  return (
    <div className={styles.names}>
      <h1>Names</h1>
      <button onClick={onClose}>Close</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
