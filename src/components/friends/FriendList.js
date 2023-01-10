import PropTypes from 'prop-types';
import FriendListItem from '../friendsListItem/FriendsListItem';
import { Friends } from './FriendsList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </Friends>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
