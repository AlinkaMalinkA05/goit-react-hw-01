import Profile from "../Profile/Profile";
import userData from "/src/userData.json";
import friends from "/src/friends.json";
import FriendList from "../Friendlist/Friendlist";
import transactions from "/src/transactions.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function App()  {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
