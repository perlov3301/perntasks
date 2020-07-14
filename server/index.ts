import express from 'express';
const app = express();
const cors = require("cors");
const pool = require("./db.ts");
// middleware
app.use(cors());
app.use(express.json()); // access data from req.body
// routes
// create a task
app.post("/tasks", async (req, res) => {
    try {
        const { username, phone, email, date_of_creating } = req.body;
        const newTask = await pool
          .query("INSERT INTO tasks (username, phone, email, date_of_creating) VALUES($1,$2,$3,$4) RETURNING *", 
          [username, phone, email, date_of_creating]);
        console.log(`user "${username}" has posted`);
        res.json(newTask.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
// get all tasks
app.get("/tasks", async(req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// get a task
app.get("/tasks/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM tasks WHERE task_id = $1", [id]);
    res.json(task.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// edit a task
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, phone, email, date_of_creating } = req.body;
    const updateTask = await pool
      .query("UPDATE tasks SET username = $1, phone = $2, email = $3, date_of_creating = $4 WHERE task_id = $5", 
        [username, phone, email, date_of_creating, id]);
    res.json(`your ${id}th task was update`);
    console.log(`your ${id}th task was update`);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE task_id = $1",[id]);
    res.json(`${id}th task was deleted`);
  } catch (err) { console.error(err.message) }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`express server has started at port ${port}`);
});
// console.log(`Hello World from ts at ${port}`);