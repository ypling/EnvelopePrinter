export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    TASK_ADDED:"TASK_ADDED"
  },

  ActionSources: {
    SERVER_ACTION:"SERVER_ACTION",
    VIEW_ACTION: "VIEW_ACTION"
  }
};
