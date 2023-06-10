import { useLocalStorage } from 'utilities/hooks';
import { version } from '../../package.json';
import Enter from './Enter';
import Exit from './Exit';
import Names from './Names';

export default function Home() {
  const [shown, setShown] = useLocalStorage('rcShown', 'enter');
  const [name, setName] = useLocalStorage('rcNames', null);
  const [recentNames, setRecentNames] = useLocalStorage('rcNames', []);
  const [names, setNames] = useLocalStorage('rcNames', []);
  const [receipts, setReceipts] = useLocalStorage('rcReceipts', []);

  const updateName = (value) => {
    setName(value);
    setRecentNames([]);
    setNames([]);
  };

  const renderComponent = () => {
    switch (shown) {
      case 'exit': 
        return (
          <Exit
            receipts={receipts}
            setReceipts={setReceipts}
            showEnter={() => setShown('enter')}
          />
        );
      case 'names': 
        return (
          <Names
            onClose={() => setShown('enter')}
            name={name}
            names={names}
            recentNames={recentNames}
            setName={updateName}
          />
        );
      default:
        return (
          <Enter
            receipts={receipts}
            setReceipts={setReceipts}
            showExit={() => setShown('exit')}
            showNames={() => setShown('names')}
            version={version}
          />
        );
    }
  };

  return renderComponent();
}
