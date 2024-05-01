import css from "/src/components/Profile/Profile.module.css"
export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
        <div className={css.wrapper} >
            <img className={css.image}
              src={image}
              alt="User avatar"
            />
          <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.list}>
            <li className={css.listItem}>
              <span className={css.listTitles}>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li className={css.listItem}>
              <span className={css.listTitles}>Views</span>
              <span>{stats.views}</span>
            </li>
            <li className={css.listItem}>
              <span className={css.listTitles}>Likes</span>
              <span>{stats.likes}</span>
            </li>
        </ul>
        </div>
    )
}

