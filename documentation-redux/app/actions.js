
const actionsEnv = {
  ADD: 'ADD_TODO',
  TOGGLE: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

const VisibilityFilters = { 
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const addTodo = function(text) {
  return { type: actionsEnv.ADD, text };
}

const toggleTodo = function(index) { 
  return {type: actionsEnv.TOGGLE, index };
}

const setVisibilityFilter = function(filter) { 
  return { type: actionsEnv.SET_VISIBILITY_FILTER, filter };
};

module.exports = { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, actionsEnv };
