const faces = {
    0: 'o(^▽^)o',
    1: '（♯▼皿▼）',
    2: '┌(☆o★)┘',
    3: '（＾ｖ＾）'
}

const INITIAL_STATE = {
    count: 0
  };

function faceReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "CHANGE":
            var newState = { ...state };
            newState.count = action.to;
            return newState;
        default:
            return state
    }
}

var store = Redux.createStore(faceReducer)

$(document).ready(function() {
    // get the state from redux
    let currentState = store.getState(); // {count: 0}
    // set the text of my counter to be the initial state
    let $faces = $("#faces");
    $faces.text(faces[currentState.count]);
  
    $("#smile").on("click", function() {
      store.dispatch({ type: "CHANGE", to: 0 });
      let updatedState = store.getState();
      $faces.text(faces[updatedState.count]);
    });

    $("#angry").on("click", function() {
      store.dispatch({ type: "CHANGE", to: 1 });
      let updatedState = store.getState();
      $faces.text(faces[updatedState.count]);
    });

    $("#dance").on("click", function() {
      store.dispatch({ type: "CHANGE", to: 2 });
      let updatedState = store.getState();
      $faces.text(faces[updatedState.count]);
    });

    $("#laugh").on("click", function() {
      store.dispatch({ type: "CHANGE", to: 3 });
      let updatedState = store.getState();
      $faces.text(faces[updatedState.count]);
    });
  
  });

// const INITIAL_STATE = {
//     count: 0
//   };
//   // make a reducer
//   function rootReducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         var newState = { ...state };
//         newState.count++;
//         return newState;
//       case "DECREMENT":
//         var newState = { ...state };
//         newState.count--;
//         return newState;
//       default:
//         return state;
//     }
//   }
//   var store = Redux.createStore(rootReducer);
  
//   $(document).ready(function() {
//     // get the state from redux
//     let currentState = store.getState(); // {count: 0}
//     // set the text of my counter to be the initial state
//     let $counter = $("#counter");
//     $counter.text(currentState.count);
  
//     $("#increment").on("click", function() {
//       store.dispatch({ type: "INCREMENT" });
//       let updatedState = store.getState();
//       $counter.text(updatedState.count);
//     });
  
//     $("#decrement").on("click", function() {
//       store.dispatch({ type: "DECREMENT" });
//       let updatedState = store.getState();
//       $counter.text(updatedState.count);
//     });
//   });