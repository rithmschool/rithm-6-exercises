const INITIAL_STATE = { emoji: "(`･Д･)ノ=☆" }

function moodReducer(state = INITIAL_STATE, action) {

  switch (action.type) {

    case "Happy":
      var newState = { ...state, emoji: "◉‿◉" };
      return newState;

    case "Sad":
      var newState = { ...state, emoji: "(ㄒoㄒ)" };
      return newState;

    case "Angry":
      var newState = { ...state, emoji: "(◣_◢)" };
      return newState;

    case "Confused":
      var newState = { ...state, emoji: "ɾ◉⊆◉ɹ" };
      return newState;

    default:
      return state;
  }
}
