import { useEffect, useState } from 'preact/hooks';
import { route } from 'preact-router';
import Receipt from './Receipt';
import Totals from './Totals';
import styles from './RemoveReceipts.module.css';

function scrollIntoCenter(uuid) {
  if (!uuid) {
    return;
  }

  const elem = document.getElementById(uuid);
  elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function RemoveReceipts({ receipts, removeReceipt }) {
  const [done, setDone] = useState({});
  const notDoneReceipts = receipts.filter(({ uuid }) => !done[uuid]);

  useEffect(() => {
    scrollIntoCenter(receipts[0]?.uuid);
  }, [receipts]);

  const handleClick = (selectedUuid) => {
    const value = !done[selectedUuid];
    setDone((last) => ({ ...last, [selectedUuid]: value }));

    const found = receipts.findIndex(({ uuid }) => uuid === selectedUuid);
    const next = receipts.findIndex(({ uuid }, index) => index > found && !done[uuid]);
    scrollIntoCenter(receipts[next]?.uuid);
  };

  const handleDone= () => {
    receipts.map(({ uuid }) => {
      if (done[uuid]) {
        removeReceipt(uuid);
      }
    });
    route('/');
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.receipts}>
          { receipts.map((receipt) => (
            <Receipt
              key={receipt.uuid}
              id={receipt.uuid}
              receipt={receipt}
              setBackground={!done[receipt.uuid]}
              onClick={() => handleClick(receipt.uuid)}
            />
          )) }
        </div>
        <div className={styles.done}>
          <button onClick={handleDone}>
            Done
          </button>
          <div className={styles.totals}>
            <Totals receipts={notDoneReceipts} />
          </div>
        </div>
      </div>
    </>
  );
}
