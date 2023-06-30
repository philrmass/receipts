import { useEffect, useState } from 'preact/hooks';
import styles from './Names.module.css';

function filterBySearch(names, term) {
  const match = term.toLowerCase();
  return names.filter((name) => {
    const lower = name.toLowerCase();
    return lower.indexOf(match) !== -1;
  });
}

export default function Names({
  name,
  names,
  onClose,
  recentNames,
  setName,
}) {
  const [nameStr, setNameStr] = useState(name);
  const [searched, setSearched] = useState(names);
  const [recentSearched, setRecentSearched] = useState(recentNames);

  useEffect(() => {
    if (nameStr) {
      setSearched(filterBySearch(names, nameStr));
      setRecentSearched(filterBySearch(recentNames, nameStr));
    } else {
      setSearched(names);
      setRecentSearched(recentNames);
    }
  }, [nameStr, names, recentNames]);

  const handleClear = () => {
    setName('');
    setNameStr('');
  };

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
          { renderNames(searched) }
        </div>
        <div className={styles.title}>Recent</div>
        <div className={styles.recent}>
          { renderNames(recentSearched) }
        </div>
        <div className={styles.controls}>
          <input 
            type="text"
            value={nameStr}
            placeholder='Vendor'
            onInput={(e) => setNameStr(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key, e.target.value)}
          />
          <div className={styles.buttons}>
            <button onClick={() => onClose()}>Close</button>
            <button onClick={() => handleClear()}>Clear</button>
            <button onClick={() => handleSave(nameStr)}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
