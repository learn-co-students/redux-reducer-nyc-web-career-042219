export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        friends: [
          ...state.friends,
          {
            name: action.friend.name,
            hometown: action.friend.hometown,
            id: action.friend.id
          }
        ]
      }
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(friend => {
        return friend.id !== action.id
      })
      return {
        ...state,
        friends: newFriends
      }
    default:
      return state;
  }
}
