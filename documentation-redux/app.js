const { createStore } = require('redux');
const { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } = require('./actions.js');
const { todoApp } = require('./reducers.js');

let store = createStore(todoApp);

store.dispatch(addTodo('test true'))
store.dispatch(addTodo('test false'))
console.log(store.getState());

store.dispatch(toggleTodo(0))
console.log(store.getState());

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


