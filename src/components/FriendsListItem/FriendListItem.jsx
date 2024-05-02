import css from "/src/components/FriendsListItem/FriendsListItem.module.css"
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={css.wrapper}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendsName} >{name} </p>
  <p>{isOnline ? "Online" : "Offline"}</p>
</div>
)
}