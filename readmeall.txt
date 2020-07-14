#create server
npm init -y
yarn add -D typescript
npx tsc --init => create tsconfig.json file with options
                  for compiler from ts to js(tsc)
package.json: " build" : "tsc"
node src/index.js => Hello from typescript
yarn add -D ts-node: path and compilation
package.json: "start": "ts-node src/index.ts"
yarn start => Hello from typescript
yarn add -D ts-node-dev : path compile and watching for mac
"start": "ts-node-dev --respawn src/index.ts"
yarn add -D  nodemon
"dev": "nodemon --exec ts-node src/index.ts" : the same like "start"
yarn add -D express => js library
yarn add -D @types/express : ts definitons
yarn add -D @types/node : definitions for node
yarn add -D shortid 
plus: create folder @types and 
  within file shortid.d.ts: declare module "shortid"
yarn add @types/shortid
# type restart server within vscode
command+shift+p => typescript restart ts server
with code 'control'+ right click => Go To type definition
for ts use casting: (req as any).name = 'bob' or (req: any) => {}
# another syntaxis: (a: number, b?: number) b? is optional
 if (b) {return a + b} else {return a} or add !: return a + b!;
 or casting : return a + (b as number)
 or escape line : @types ts-ignore
 #use for Objects:
 interface Params {
     a:number
     b: number
 }
 const add = (x: Params) => { return x.a + x.b}
 #no Object:
 type Add = (x: Params) => number;
 const add: Add = x => { return x.a + x.b}
 # express: create server
   cors: interaction react and node
   pg: interaction with postgresql queries
interface Params {
    a: number;
    b: number;
}
type Fn = () => void;
type MyAdd = (x: Params) => number;
const multi = (x: Params) => { return x.a * x.b};
const add = (a: number, b?: number) => { return a + (b as number);  }; 

# create database and table
CREATE DATABASE perntasks;
CREATE TABLE tasks(...)
\l list all databases
\c move inside a database
\dt show table in a database
CREATE DATABASE perntasks; => create database
CREATE TABLE tasks(...); =>
\dt => 
# connect perntasks to server for super user (admin)
db.ts => 
    const Pool = require("pg").Pool;
    const pool = new Pool({
        user: "perl",
        password: "myp",
        host: "localhost",
        post: 5432,
        database: "perntasks"
    });
    module.exports = pool;
index.ts => const pool = require("./db.ts");
app.post("/tasks", async (req, res) => {
  try {
console.log(req.body);
  }catch {}
});
Postman: untitled Request => POsT => http://localhost:5000/todos =>
  Body => raw (aka json text) => json
{
  "username": "alex",
	"phone": "053111111",
    "email": "alex@gmail.com",
	"date_of_creating": "12-12-2020"
} 
=> Send => header 'Content-Type: text/plain' data-raw '{ "description": "my first todo" }'
#develope server
#bind to postgresql => db.ts
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "myp",
    host: "localhost",
    post: 5432,
    database: "perntodo"
});

module.exports = pool;
index.ts
#update todo
// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } =req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", 
//       [description, id]);
//       res.json("todo is updated");
//   } catch (err) {
//     console.error(err.message);
//   }
// });
app.get("/tasks/:id", async(req, res) => {
  try {
   console.log(req.params);
  } catch (err) {
    console.error(err.message);
  }
});
#delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } =req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", 
      [id]);
    res.json(`${id}th todo is deleted`);
    console.log(`your ${id}th todo was deleted`);
  } catch (err) {
    console.error(err.message);
  }
});
#create todo
app.post("/todos", async (req, res) => {
    try {
    const { description } = req.body;
    var newTodo =await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",
    [description]);
    const a = newTodo.rows[0];
    console.log(a);
      res.json(a);
    } catch (err) {
        console.error(err.message);
    }
});
# get all todos
app.get('/todos', async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});
# get id todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0])
  } catch (error) {
    console.error(error.message);
  }
});
#create client
npx create-react-app client // code camp
create-react-app client --typescipt // ben awad
#rid off
serviceWorker and test
const onSubmitForm = async (e: MouseEvent) => {
    e.preventDefault();
    try{
      const body = { description };
      const response = fetch("http://localhost:5000/todo",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.messaage);
    }
  };
# npx create-react-app client
cd client
yarn start => dev server
yarn build  => create bundle of static files for producton
yarn test => the test runner
yarn eject => build app directory and removes create-react-app.You can't go back
# copy database to .csv file
test=# \copy (SELECT * FROM person LEFT JOIN car ON car.id = person.car_id) TO '/Users/perl/downloads/tasks.csv' DELIMITER ',' CSV HEADER;
test=# \copy (SELECT * FROM tasks) TO '/Users/perl/downloads/tasks.csv' DELIMITER ',' CSV HEADER;
test=# UPDATE person SET first_name = 'Odiel' , last_name = 'Montana', email = 'montana@gmail.com' WHERE id = 3010;


