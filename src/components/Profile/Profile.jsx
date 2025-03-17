import css from "./Profile.module.css";

const Profile = (
	{name,
	tag,
	location,
	image,
	stats,
	}
) => {
	return (
	<div className={css.profile}>
      <div className={css.profile__info}>
        <img
          className={css.portfolio__img}
          src={image}
          alt="User avatar"
        />
        <p className={css.user__name}>{name}</p>
        <p className={css.user__tag}>@{tag}</p>
        <p className={css.user__location}>{location}</p>
      </div>

      <ul className={css.user__stats}>
        <li className={css.user__stats_item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.user__stats_item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.user__stats_item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
);
};
export default Profile;