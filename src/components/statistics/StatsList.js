import PropTypes from 'prop-types';
import DataItem from '../dataItem/DataItem';
import { Statistics, StatList, Title } from './StatsList.styled';

export default function Statistic({ title, stats }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <DataItem label={label} percentage={percentage} key={id} />
        ))}
      </StatList>
    </Statistics>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
