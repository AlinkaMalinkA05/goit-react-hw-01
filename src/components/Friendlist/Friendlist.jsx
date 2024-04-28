import FriendListItem from "../FriendsListItem/FriendListItem";
export default function Friendlist({friends}) { 
    return (
        <>
            <ul>
            {friends.map((friend)=> (
            <li key ={friend.id}>
                <FriendListItem />
	</li>
            ))}
	</ul>
    

        </>
    )
    }