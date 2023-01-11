import PropTypes from 'prop-types';
import DataItem from '../dataItem/DataItem';
import { Statistics, StatList, Title } from './StatsList.styled';

export default function Statistic({ title, stats }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <DataItem
            label={stat.label}
            percentage={stat.percentage}
            key={stat.id}
          />
        ))}
      </StatList>
    </Statistics>
  );
}

Statistic.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
