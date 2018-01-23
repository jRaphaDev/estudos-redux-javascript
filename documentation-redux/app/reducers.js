const { combineReducers } = require('redux');
const { actionsEnv, VisibilityFilters } = require('./actions.js');

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action)  => {
  switch (action.type) {
    case actionsEnv.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {

    case actionsEnv.ADD:
      return [ ...state, { text: action.text, completed: false } ];

    case actionsEnv.TOGGLE:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });

    default:
      return state;
  };
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

module.exports = { todoApp };

