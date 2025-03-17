import "./FriendList.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {
	return (
	<ul className="friends__list">
		{friends.map(friend => (
			<li className="friend__item" key={friend.id}>
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