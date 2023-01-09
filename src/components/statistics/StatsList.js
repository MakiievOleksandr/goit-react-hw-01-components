import PropTypes from 'prop-types';
import DataItem from '../dataItem/DataItem';
import css from './Stats.module.css';

export default function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <DataItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  key: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
