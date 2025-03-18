import css from "./FriendList/FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
	return (
<div>
	<img className={css.friend__img} src={avatar} alt="Avatar" width="48" />
	<p className={css.friend__name}>{name}</p>
	<p className={isOnline ? css.status__isOnline : css.status__isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
</div>
);
}

export default FriendListItem; 