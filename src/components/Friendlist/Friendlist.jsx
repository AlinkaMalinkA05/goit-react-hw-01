import css from "/src/components/Friendlist/Friendlist.module.css"
import FriendListItem from "../FriendsListItem/FriendListItem";
export default function Friendlist({friends}) { 
    return (
        <>
            <ul className={css.list}>
            {friends.map((friend)=> (
            <li key ={friend.id}>
                <FriendListItem friend={friend} />
	</li>
            ))}
	</ul>
    

        </>
    )
    }