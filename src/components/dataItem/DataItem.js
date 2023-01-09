import css from './DataItem.module.css';
import getRandomHexColor from 'utils/randomHexColor';

export default function DataItem({ label, percentage }) {
  return (
    <li
      className={css.item}
      style={{
        width: 100 + 'vw',
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}
