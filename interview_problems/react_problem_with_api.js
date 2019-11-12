import React from 'react';
const APIURL = "https://jsonplaceholder.typicode.com/users";
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
