const initialState = { todos: [
    {idx: "b20ad430-4839-11e8-90fe-9bba125db109", title: "dog", description: "walk the dog, now!", isCompleted: false, isUnderEdit: false},
    {idx: "cebf9d40-4839-11e8-a842-810fdbcd3333", title: "laundry", description: "do the laundry", isCompleted: true, isUnderEdit: false},
    {idx: "df01c110-4839-11e8-b650-f345208caca1", title: "reset test", description: "reset the last test", isCompleted: false, isUnderEdit: false}
] }

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            var newState = { todos: [ action.payload, ...state.todos ] };
            return newState;
        case 'MOD_TODO':
            var newState = { todos: [...action.payload] };
            return newState;
        case 'DEL_TODO':
            var newState = { todos: [...action.payload] };
            return newState;
        default:
            return state;
    }
}