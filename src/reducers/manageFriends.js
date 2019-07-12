export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends,action.friend]}
      break;
    case 'REMOVE_FRIEND':
      let updateFriend = state.friends.filter(friend=>{
        return friend.id !== action.id
      })

      return {friends: updateFriend}
      // return {friends: [...state.friends]}
      break;
    default:
      return state
  }
}
