import UserProfile from '../userProfile/UserProfile';
import Statistics from '../statistics/StatsList';
import FriendList from '../friends/FriendList';
import TransactionHistory from '../transactions/Transactions';
import userData from '../../jsonFiles/user.json';
import statsData from '../../jsonFiles/data.json';
import friendsData from '../../jsonFiles/friends.json';
import transactions from '../../jsonFiles/transactions.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <UserProfile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
