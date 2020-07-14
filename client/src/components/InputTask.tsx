import React, { Fragment, useState } from 'react';


const InputTask = () => {

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date_of_creating, setDate_of_creating] = useState("");

  const onSubmitform = async (e: any) => {
    e.preventDefault();
    try {
      const body = { username, phone, email, date_of_creating };
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log("response from InputTasks.tsx(fetch)");
      console.log(response)
  // host hostname href<---  pathname (relative to the host) port protocol  search 
      window.location.href = "/";
    } catch (err) { console.error(err.message); }
  };
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern TasksList</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitform} >
                <label> User Name
                  <input type="text" className="form-control" name="userName"
                    id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </label> <br/>
                <label> Phone
                  <input type="tel" className="form-control" name="phone"  
                    id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                </label><br/>
                <label> email
                  <input type="email" className="form-control"   name="email" 
                   id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label><br/>
                <label> Date
                  <input type="date" className="form-control" name="date"  
                    id="date" value={date_of_creating} onChange={e => setDate_of_creating(e.target.value)} />
                </label> <br/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTask;