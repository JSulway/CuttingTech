export default function tasks(state = { tasks: [] }, action) {
  switch (action.type) {
      case 'FETCH_TASKS_SUCCEEDED': {  // >>>> The reducer now listens for the server action.
        return { tasks: action.payload.tasks, };
      }
      case 'CREATE_TASK_SUCCEEDED': {          // Shows the new action handler
          return { tasks: state.tasks.concat(action.payload.task), };
      }
      case 'EDIT_TASK_SUCCEEDED': {     //Because json-server requires a full object to be passed along for PUT requests,
        const { payload } = action;       //you must grab the task out of the store and merge in the new properties yourself
        return {
          tasks: state.tasks.map(task => {
            if (task.id === payload.task.id) {          // Replaces the old task with the updated one
              return payload.task;
            }
            return task;
          }),
        };
      }
      case 'REMOVE_TASK_SUCCEEDED': {
        return { tasks: state.tasks.filter(task => task.id !== action.payload.id) }; // filters out the removed task
      }
      default: {
        return state;// Always fall back to returning the given state in case a reducer receives an action it can’t handle;
      }
  }
}
