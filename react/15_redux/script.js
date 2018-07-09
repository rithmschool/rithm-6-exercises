const INITIAL_STATE = {
  mood: "(ꅈꇅꅈ)"
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      var newState = { ...state };
      newState.mood = "โ๏∀๏ใ";
      return newState;
    case "GLAMOROUS":
      var newState = { ...state };
      newState.mood = "(ㅇㅅㅇ❀)";
      return newState;
    case "AWKWARD":
      var newState = { ...state };
      newState.mood = "ฅ•ω•ฅ";
      return newState;
    case "SOWEIRD":
      var newState = { ...state };
      newState.mood = "ʘ̥ꀾʘ̥";
      return newState;
    default:
      return state;
  }
}

var store = Redux.createStore(rootReducer);

$(document).ready(function() {
  let currentState = store.getState();
  let $mood = $("#mood");
  $mood.text(currentState.mood);

  $("#happy").on("click", function() {
    store.dispatch({ type: "HAPPY" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#glamorous").on("click", function() {
    store.dispatch({ type: "GLAMOROUS" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#awkward").on("click", function() {
    store.dispatch({ type: "AWKWARD" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });

  $("#so-weird").on("click", function() {
    store.dispatch({ type: "SOWEIRD" });
    let updatedState = store.getState();
    $mood.text(updatedState.mood);
  });
});
