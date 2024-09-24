import { useEffect, useState } from 'preact/hooks';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage, useVisibility } from 'utilities/hooks';
import { getIconSvgs } from 'utilities/Icon';
import { byDate } from '../utilities';
import AddReceipt from './AddReceipt';
import Payees from './Payees';
import Receipts from './Receipts';
import Redirect from './Redirect';
import RemoveReceipts from './RemoveReceipts';

const icons = [
  'cross',
  'plus',
];

function getToday() {
  const today = new Date();
  const year = today.toLocaleDateString('en-US', { year: 'numeric' });
  const month = today.toLocaleDateString('en-US', { month: '2-digit' });
  const day = today.toLocaleDateString('en-US', { day: '2-digit' });

  return `${year}-${month}-${day}`;
}

function byName(a, b) {
  return a.localeCompare(b);
}

// ??? set $ as negative button
// ??? improve remove receipts
// ??? - grey out when clicked, scroll up
// ??? - done removes all greyed out rectipts
export default function Home() {
  const [payees, setPayees] = useLocalStorage('rcNames', []);
  const [receipts, setReceipts] = useLocalStorage('rcReceipts', []);
  const [payeeIndex, setPayeeIndex] = useState(null);
  const payee = payees[payeeIndex] ?? '';
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(getToday());
  const isVisible = useVisibility();

  useEffect(() => {
    if (isVisible) {
      setDate(getToday());
    }
  }, [isVisible]);

  const selectPayee = (payee) => {
    const index = payees.findIndex((p) => p === payee);
    setPayeeIndex(index);
  };

  const clearPayee = () => {
    setPayeeIndex(null);
  };

  const updatePayees = (values, value) => {
    const sorted = values.sort(byName);
    const index = sorted.findIndex((p) => p === value);

    setPayees(sorted);
    setPayeeIndex(index);
  };

  const savePayee = (value) => {
    if (value) {
      if (payeeIndex) {
        updatePayees([
          ...payees.slice(0, payeeIndex),
          value,
          ...payees.slice(payeeIndex + 1),
        ], value);
      } else {
        updatePayees([...payees, value], value);
      }
    }
  };

  const removePayee = (value) => {
    setPayees((last) => last.filter((l) => l !== value));
  };

  const addReceipt = (date, name, amount) => {
    if (date && name && amount) {
      const uuid = uuidv4();

      setReceipts((last) => {
        const updated = [
          ...last, 
          {
            amount,
            date,
            name,
            uuid,
          },
        ];

        return updated.sort(byDate);
      });
    }
  };

  const removeReceipt = (uuid) => {
    setReceipts((last) => last.filter((l) => l.uuid !== uuid));
  };

  /*
  // ??? implement remove
  const removeLastReceipt = () => {
    setReceipts((receipts) => {
      const updated = receipts.slice(0, -1);
      if (updated.length === 0) {
        setShown('enter');
      }
      return updated;
    });
  };
  */

  return (
    <>
      <Router history={createHashHistory()}>
        <Receipts
          path="/"
          receipts={receipts}
        />
        <AddReceipt
          path="/add"
          amount={amount}
          addReceipt={addReceipt}
          clearPayee={clearPayee}
          date={date}
          payee={payee}
          setAmount={setAmount}
          setDate={setDate}
        />
        <Payees
          clearPayee={clearPayee}
          path="/payees"
          payee={payee}
          payees={payees}
          removePayee={removePayee}
          savePayee={savePayee} 
          selectPayee={selectPayee}
        />
        <RemoveReceipts
          div path="/remove"
          receipts={receipts}
          removeReceipt={removeReceipt}
        />
        <Redirect default to="/" />
      </Router>
      { getIconSvgs(icons) }
    </>
  );
}
