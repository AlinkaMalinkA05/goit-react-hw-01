import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import friends from "../friends.json";
import FriendList from "../Friendlist/Friendlist";

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
      <FriendList
        avatar={friends.avatar}
        name={friends.name}
        status={friends.isOnline}
        id={friends.id}
      />
    </>
  );
}
