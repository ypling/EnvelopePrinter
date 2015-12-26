export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENTS: {
    ENVELOPE_STORE:"ENVELOPE_STORE"
  },
  PRINT_EVENT:'print',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: {
    EDIT:"EDIT",
    ADD:"ADD",
    PRINT:"PRINT",
    SAVE_EDIT:"SAVE_EDIT",
    SAVE_ADD:"SAVE_ADD"

  },

  ActionSources: {
    SERVER_ACTION:"SERVER_ACTION",
    VIEW_ACTION: "VIEW_ACTION"
  },
  EnvelopePrinterAppViews:{
    LIST:"LIST",
    EDIT:"EDIT",
    PRINT:"PRINT",
    ADD:"ADD"
  }
};
