export function manageFriends(prevState, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {...prevState, friends: [...prevState.friends, action.friend]}
        case "REMOVE_FRIEND":
            const newFriends = prevState.friends.filter(friend => friend.id !== action.id)
            return{...prevState, friends: newFriends}
        default:
            return prevState
            
    }
}
