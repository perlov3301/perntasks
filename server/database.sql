CREATE DATABASE perntasks;

CREATE TABLE tasks(
    task_id SERIAL  NOT NULL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    phone INTEGER NOT NULL,
    email VARCHAR(30) NOT NULL,
    date_of_creating DATE NOT NULL
                    
);

insert into tasks (username, phone, email,date_of_creating) 
 values ('asdf',  05345234, 'asdf@gmail.com', '1960-03-14');
