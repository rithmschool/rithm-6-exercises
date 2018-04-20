var store = Redux.createStore(moodReducer);

$(document).ready(function () {
    let currentState = store.getState();
    let $mood = $("#mood");
    $mood.text(currentState.emoji);

    $("#happy").on("click", function () {
        store.dispatch({ type: "Happy" });
        let updatedState = store.getState();
        $mood.text(updatedState.emoji);
    });

    $("#sad").on("click", function () {
        store.dispatch({ type: "Sad" });
        let updatedState = store.getState();
        $mood.text(updatedState.emoji);
    });

    $("#angry").on("click", function () {
        store.dispatch({ type: "Angry" });
        let updatedState = store.getState();
        $mood.text(updatedState.emoji);
    });

    $("#confused").on("click", function () {
        store.dispatch({ type: "Confused" });
        let updatedState = store.getState();
        $mood.text(updatedState.emoji);
    });
});