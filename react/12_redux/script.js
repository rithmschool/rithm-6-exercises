const INITIAL_STATE = {
  mood: "┐(￣ヘ￣)┌"
};
// make a reducer
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOVE-DROOL":
      var newState = { ...state };
      newState.mood = "ԅ(♡﹃♡ԅ)";
      return newState;
    case "FRUSTRATION":
      var newState = { ...state };
      newState.mood = "(╯°Д°)╯ ┻━┻";
      return newState;
    case "CAT":
      var newState = { ...state };
      newState.mood = "^ↀᴥↀ^";
      return newState;
    case "CRAZED":
      var newState = { ...state };
      newState.mood = "⊙▂⊙";
      return newState;
    default:
      return state;
  }
}
var store = Redux.createStore(rootReducer);

$(document).ready(function() {
  // get the state from redux
  let currentState = store.getState(); // {count: 0}
  // set the text of my counter to be the initial state
  let $mood = $("#emoji__mood");
  $mood.text(currentState.mood);

  $("#love-drool").on("click", function() {
    store.dispatch({ type: "LOVE-DROOL" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#frustrated").on("click", function() {
    store.dispatch({ type: "FRUSTRATION" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#cat").on("click", function() {
    store.dispatch({ type: "CAT" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#crazed").on("click", function() {
    store.dispatch({ type: "CRAZED" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });
});

// "ԅ(♡﹃♡ԅ)"  "(╯°Д°)╯ ┻━┻" "^ↀᴥↀ^"
// "ԅ(♡﹃♡ԅ)"  "(╯°Д°)╯ ┻━┻" "^ↀᴥↀ^"
