const INITAL_STATE = {
  emoji: "(хдх)"
};

function rootReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      var newState = { ...state };
      newState.emoji = "（･□･）川";
      return newState;
    case "ANGRY":
      var newState = { ...state };
      newState.emoji = "（～Д～）＊＊＊";
      return newState;
    case "SAD":
      var newState = { ...state };
      newState.emoji = "(*●艸ЗU$)◆◇";
      return newState;
    case "CONFUSED":
      var newState = { ...state };
      newState.emoji = "( ﾟ ３ﾟ)≡@";
      return newState;
    default:
      return state;
  }
}

$(document).ready(function() {
  let emojiFace = Redux.createStore(rootReducer);
  let currentState = emojiFace.getState();
  let $root = $("#root");
  $root.text(currentState.emoji);

  $("#happy").on("click", function() {
    emojiFace.dispatch({ type: "HAPPY" });
    let updatedState = emojiFace.getState();
    $root.text(updatedState.emoji);
  });

  $("#mad").on("click", function() {
    emojiFace.dispatch({ type: "ANGRY" });
    let updatedState = emojiFace.getState();
    $root.text(updatedState.emoji);
  });

  $("#sad").on("click", function() {
    emojiFace.dispatch({ type: "SAD" });
    let updatedState = emojiFace.getState();
    $root.text(updatedState.emoji);
  });

  $("#confused").on("click", function() {
    emojiFace.dispatch({ type: "CONFUSED" });
    let updatedState = emojiFace.getState();
    $root.text(updatedState.emoji);
  });
});
