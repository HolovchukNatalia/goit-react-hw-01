import "./Profile.css";

const Profile = (
	{name,
	tag,
	location,
	image,
	stats,
	}
) => {
	return (
<div className="profile">
  <div className="profile__info">
    <img className="portfofio__img"
      src={image}
      alt="User avatar"
    />
    <p className="user__name">{name}</p>
    <p className="user__tag">@{tag}</p>
    <p className="user__location">{location}</p>
  </div>

  <ul className="user__stats">
    <li className="user__stats-item">
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className="user__stats-item">
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className="user__stats-item">
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

);
};
export default Profile;