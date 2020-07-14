import React, {Fragment, useEffect, useState} from 'react';
 
const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const jsonData = await response.json();
      console.log("array of jsonData from ListTasks.tsx")
      console.log(jsonData);
      setTasks(jsonData);
    } catch (err) { console.error(err.message); }
  };
  useEffect(() => {  getTasks(); }, []);
  console.log("tasks from ListTasks.tsx");
  console.log(tasks);
    return (
      <Fragment>
        <h1>List of Users</h1>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>username</th>
              <th>phone</th>
              <th>email</th>
              <th>date_of_creating</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>John Doe</td>
              <td>234235</td>
              <td>jdoe@gmail.com</td>
              <td>2020-07-14</td>
              <td>Get Edit Delete</td>
            </tr> */}
            {tasks.map((task: any) => (
              <tr>
                <td>{task.username}</td>
                <td>{task.phone}</td>
                <td>{task.email}</td>
                <td>{task.date_of_creating}</td>
                <td>Get Edit Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
};

export default ListTasks;