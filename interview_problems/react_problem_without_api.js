import React from 'react';

const userList = [
  {"id": 1, "name": "Leanne Graham"},
  {"id": 2, "name": "Ervin"},
  {"id": 3, "name": "Clementine Bauch"},
  {"id": 4, "name": "Patricia Lebsack"},
  {"id": 5, "name": "Chelsey Dietrich"},
  {"id": 6,	"name": "Mrs. Dennis Schulistionst"},
  {"id": 7,	"name": "Kurtis Weissnat"},
  {"id": 8,	"name": "Nicholas Runolfsdottir Vaurs"},
  {"id": 9,	"name": "Glenna"},
  {"id": 10, "name": "Clementina DuBuque"}
];

function Users() {
  
  function getUsers() {
    //write code here
  }

  function sortList() {
      //write code here
  }
  
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
      </ul>
    </main>
  )
}

export default Users;
