import { _useEffect, useState } from 'preact/hooks';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';
// import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage, _useVisibility } from 'utilities/hooks';
import { getIconSvgs } from 'utilities/Icon';
// import { byDate } from '../utilities';
import AddReceipt from './AddReceipt';
import Receipts from './Receipts';
// import Enter from './Enter';
//import Exit from './Exit';
// import Names from './Names';
import Redirect from './Redirect';

const icons = [
  'cross',
  'plus',
];

// ??? add /remove
// ??? add /payees with uuid
// ??? delete unused components
//   const id = uuidv4();
// ??? click anywhere to add

export default function Home() {
  /*
  const [shown, setShown] = useLocalStorage('rcShown', 'enter');
  const [amount, setAmount] = useLocalStorage('rcAmount', null);
  const [date, setDate] = useLocalStorage('rcDate', null);
  const [name, setName] = useLocalStorage('rcName', null);
  const [recentNames, setRecentNames] = useLocalStorage('rcRecentNames', []);
  const [names, setNames] = useLocalStorage('rcNames', []);
  */
  const [receipts, _setReceipts] = useLocalStorage('rcReceipts', []);
  const [payee, _setPayee] = useState({});
  // const isVisible = useVisibility();

  /*
  useEffect(() => {
    const today = new Date();
    const year = today.toLocaleDateString('en-US', { year: 'numeric' });
    const month = today.toLocaleDateString('en-US', { month: '2-digit' });
    const day = today.toLocaleDateString('en-US', { day: '2-digit' });
    setDate(`${year}-${month}-${day}`);
  }, [isVisible]);
  */

  const addReceipt = (_date, _name, _amount) => {
  /*
    if (date && name && amount) {
      const all = [
        {
          date,
          name,
          amount,
        },
        ...receipts, 
      ];
      setReceipts(all.sort(byDate));
      setAmount(null);
      setName(null);
      */
  };

  /*
    setNames((all) => {
      const filtered = all.filter((n) => n.toLowerCase() !== name.toLowerCase());
      const sorted = [...filtered, name].sort();
      return sorted;
    });

    const recentMax = 5;
    setRecentNames((recent) => {
      const filtered = recent.filter((n) => n.toLowerCase() !== name.toLowerCase());
      const added = [name, ...filtered];
      const sliced = added.slice(0, recentMax);
      return sliced;
    });
  };
  */

  /*
  const removeName = (value) => {
    setNames((all) => all.filter((n) => n !== value));
    setRecentNames((recent) => recent.filter((n) => n !== value));
  };
  */

  /*
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

  /*
  const updateName = (value) => {
    setName(value);
  };
  */

  /*
  const renderComponent = () => {
    switch (shown) {
      case 'exit': 
        return (
          <Exit
            receipts={receipts}
            removeLastReceipt={removeLastReceipt}
            showEnter={() => setShown('enter')}
          />
        );
      case 'names': 
        return (
          <Names
            name={name}
            names={names}
            onClose={() => setShown('enter')}
            recentNames={recentNames}
            removeName={removeName}
            setName={updateName}
          />
        );
      default:
        return (
          <Enter
            addReceipt={addReceipt}
            amount={amount}
            date={date}
            name={name}
            receipts={receipts}
            setAmount={setAmount}
            setDate={setDate}
            showExit={() => setShown('exit')}
            showNames={() => setShown('names')}
          />
        );
    }
  };

  return renderComponent();
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
          addReceipt={addReceipt}
          payee={payee}
        />
        <div path="/payees">PAYEES</div>
        <div path="/remove">REMOVE-RECEIPTS</div>
        <Redirect default to="/" />
      </Router>
      { getIconSvgs(icons) }
    </>
  );
}
