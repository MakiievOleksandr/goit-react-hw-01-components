import PropTypes, { shape } from 'prop-types';

import {
  TableData,
  TableHeader,
  TableRow,
  Transactions,
} from './Transaction.styled';

export default function TransactionHistory({ items }) {
  return (
    <Transactions>
      <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Transactions>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
