import getRandomHexColor from 'utils/randomHexColor';
import { DataLabel, Item, Percentage } from './DataItem.styled';

export default function DataItem({ label, percentage }) {
  return (
    <Item
      style={{
        width: 100 + 'vw',
        backgroundColor: getRandomHexColor(),
      }}
    >
      <DataLabel>{label}</DataLabel>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
}
