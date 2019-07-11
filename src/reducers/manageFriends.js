export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    break;
      case "REMOVE_FRIEND":
        const updatedFriends = state.friends.filter(friend => friend.id !== action.id);
        return {friends: updatedFriends}
    default:
      return state;
  }
}
