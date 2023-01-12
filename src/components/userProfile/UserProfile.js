import PropTypes from 'prop-types';

import {
  Avatar,
  Description,
  Profile,
  UserName,
  UserTag,
  Location,
  Stats,
  Quantity,
  StatsItem,
  StatsLabel,
} from './UserProfile.styled';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers </StatsLabel>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views </StatsLabel>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes </StatsLabel>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Profile>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
