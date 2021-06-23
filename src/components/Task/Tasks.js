import React from "react";
import Section from "./UI/Section";
import classes from "./Tasks.module.css";
import TaskItem from "./TaskItem";

export default function Tasks(props) {
  let taskList = <h2>No tasks found, please start adding</h2>;
  if (props.tasks.length > 0) {
    taskList = (
      <ul>
        {props.tasks.map(task => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </ul>
    );
  }
  let content = taskList;
  if (props.isLoading) {
    content = <p>Loading...Please wait</p>;
  }
  if (props.error)
    content = <button onClick={props.onFetch}>Try again...</button>;
  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
}
