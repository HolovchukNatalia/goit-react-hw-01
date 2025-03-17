const FriendListItem = ({avatar, name, isOnline}) => {
	return (
<div>
	<img className="friend__img" src={avatar} alt="Avatar" width="48" />
	<p className="friend__name">{name}</p>
	<p className={isOnline ? "status-isOnline" : "status-isOffline"}>
        {isOnline ? "Online" : "Offline"}
      </p>
</div>
);
}

export default FriendListItem; 