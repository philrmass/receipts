import { useEffect } from 'preact/hooks';
import { useLocalStorage, useVisibility } from 'utilities/hooks';
import { byDate } from '../utilities';
import Enter from './Enter';
import Exit from './Exit';
import Names from './Names';

export default function Home() {
  const [shown, setShown] = useLocalStorage('rcShown', 'enter');
  const [amount, setAmount] = useLocalStorage('rcAmount', null);
  const [date, setDate] = useLocalStorage('rcDate', null);
  const [name, setName] = useLocalStorage('rcName', null);
  const [recentNames, setRecentNames] = useLocalStorage('rcRecentNames', []);
  const [names, setNames] = useLocalStorage('rcNames', []);
  const [receipts, setReceipts] = useLocalStorage('rcReceipts', []);
  const isVisible = useVisibility();

  useEffect(() => {
    const today = new Date();
    const year = today.toLocaleDateString('en-US', { year: 'numeric' });
    const month = today.toLocaleDateString('en-US', { month: '2-digit' });
    const day = today.toLocaleDateString('en-US', { day: '2-digit' });
    setDate(`${year}-${month}-${day}`);
  }, [isVisible, setDate]);

  const addReceipt = (date, name, amount) => {
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
    }

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

  const removeName = (value) => {
    setNames((all) => all.filter((n) => n !== value));
    setRecentNames((recent) => recent.filter((n) => n !== value));
  };

  const removeLastReceipt = () => {
    setReceipts((receipts) => {
      const updated = receipts.slice(0, -1);
      if (updated.length === 0) {
        setShown('enter');
      }
      return updated;
    });
  };

  const updateName = (value) => {
    setName(value);
  };

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
}
