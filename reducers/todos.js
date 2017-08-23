export default function todos(state = {}, action) {
  console.log("reducer",state,action);
  var new_state=$.extend(true,{},state);
  switch (action.type) {
    case "UPDATING":
      new_state.add_new=true;
      return new_state; 
    case "UPDATED":
      new_state.add_new=false;
      return new_state;
    default:
      return new_state;
    }
}