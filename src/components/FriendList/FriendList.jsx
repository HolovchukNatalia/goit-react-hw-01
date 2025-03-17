import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
	return (
	<ul className={css.friends__list}>
		{friends.map(friend => (
		  <li className={css.friend__item} key={friend.id}>
			<FriendListItem
			  avatar={friend.avatar}
			  name={friend.name}
			  isOnline={friend.isOnline}
			/>
		  </li>
		))}
	</ul>
);
}

export default FriendList;