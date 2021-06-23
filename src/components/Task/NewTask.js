import React, { useState } from "react";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

export default function NewTask(props) {
  const { isLoadingHttp, errorHttp, sendRequest: sendTaskRequest } = useHttp();
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; //firebase specific
    const createdTask = { id: generatedId, text: taskText };
    props.addTaskHandler(createdTask);
  };

  const enterTaskHandler = async taskText => {
    sendTaskRequest(
      {
        url:
          "https://react-my-burger-44816-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText }
      },
      createTask.bind(null, taskText)
    );
    console.log("adding task...", taskText);
    // setIsLoading(true);
    // try {
    //   const response = await fetch(
    //     "https://react-my-burger-44816-default-rtdb.firebaseio.com/tasks.json",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ text: taskText }) //to convert javascript object to json
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("New task could not be added");
    //   }
    //   const data = await response.json();
    // const generatedId = data.name; //firebase specific
    // const createdTask = { id: generatedId, text: taskText };
    // props.addTaskHandler(createdTask);
    // } catch (error) {
    //   setError(error.message);
    // }
    // setIsLoading(false);
  };
  return (
    <section>
      <TaskForm onEnterTask={enterTaskHandler}></TaskForm>
      {errorHttp && <p>{errorHttp}</p>}
    </section>
  );
}
