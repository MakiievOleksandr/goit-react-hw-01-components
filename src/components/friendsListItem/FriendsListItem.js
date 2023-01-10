import {
  Avatar,
  ConnectStatus,
  FriendName,
  FriendsListItem,
} from './FriendsListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsListItem>
      <ConnectStatus className={`${isOnline}`}>{isOnline}</ConnectStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
}
