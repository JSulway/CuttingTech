import * as api from '../apis/kanbanApi.js';

function createTaskSucceeded(task) {
  return {  type: 'CREATE_TASK_SUCCEEDED', payload: { task,  },  }
}
export function createTask({ title, description, status = 'Unstarted' }) {
  return dispatch => {
    api.createTask({ title, description, status }).then(resp => {
      dispatch(createTaskSucceeded(resp.data));
    });
  };
}

function editTaskSucceeded(task) {
  return {  type: 'EDIT_TASK_SUCCEEDED', payload: { task,  },  }
}
export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id);
    const updatedTask = Object.assign({}, task, params);

    api.editTask(id, updatedTask).then(resp => {
      dispatch(editTaskSucceeded(resp.data));
    });
  };
}
function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}

function removeTaskSucceeded(task) {
  return {  type: 'REMOVE_TASK_SUCCEEDED', payload: task }
}
export function removeTask(task) {
  return dispatch => {
    api.removeTask(task).then(resp => {
      dispatch(removeTaskSucceeded(task));
    });
  };
}

export function fetchTasksSucceeded(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCEEDED',
    payload: {
      tasks
    }
  }
}

export function fetchTasks() {
  return dispatch => {
      api.fetchTasks().then(resp => {
        dispatch(fetchTasksSucceeded(resp.data));
      });
  }
}
