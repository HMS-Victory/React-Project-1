import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList]=useState([])
  function AddUserHandler(username, userAge){
    setUsersList((prevUserList)=>{
      return [...prevUserList, {name: username, age: userAge, key: Math.random().toString()}];
    });
  }


  return (
    <div>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
