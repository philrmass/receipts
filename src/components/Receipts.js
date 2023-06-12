import styles from './Receipts.module.css';

export default function Receipts({ receipts }) {
  const renderReceipt = ({ date, name, amount }) => {
    const dateObj = new Date(date);

    return (
      <tr>
        <td>{dateObj.toLocaleDateString()}</td>
        <td>{name}</td>
        <td>{`$${amount.toFixed(2)}`}</td>
      </tr>
    );
  };

  return (
    <div>
      <div className={styles.receipts}>
        <table>
          { receipts.map((receipt) => renderReceipt(receipt)) }
        </table>
      </div>
    </div>
  );
}
