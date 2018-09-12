import React from 'react';

const TASK_STATUSES = [                   // Defines the list of possible statuses as a variable for clarity convenience
  'Unstarted',
  'In Progress',
  'Completed'
]

const Task = props => {
  function onStatusChange(e) {           // Calls onStatusChange with the ID of the updated task and the value of the new status
    props.onStatusChange(props.task.id, e.target.value)
  }

  function onRemoveTask(e) {           // Calls onStatusChange with the ID of the task to be removed
    props.onRemoveTask(props.task)
  }

  return (
    <div className="task">
      <div className="task-header">
        <div>
          <table>
          <tbody>
          <tr>
            <td width="33%"></td>
            <td width="33%" align="right">
              <select className="statusDropDown" value={props.task.status} onChange={onStatusChange}> {/*Adds a callback to run when the drop-down’s change event fires*/}
                {TASK_STATUSES.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </td>
            <td width="33%" align="right">
              <img src="./images/cross.jpg" alt="Remove Task" onClick={onRemoveTask}></img>
            </td>
          </tr>
          <tr>
          <td>
          {props.task.title}
          </td>
        </tr>
        </tbody>
        </table>
        </div>
      </div>
      <hr />
      <div className="task-body">{props.task.description}</div>
    </div>
  );
}

export default Task;
