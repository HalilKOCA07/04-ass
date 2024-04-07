import Table from "react-bootstrap/Table";
import { AddUserLocal } from "../helper/Utils";
import { useState } from "react";
import addUserStyle from "./user.module.scss"

export const AddUser = ({ addUser, setAddUser, getUser, user }) => {
  const addUserList = (newUser) => {

    setAddUser([...addUser, newUser]);

    AddUserLocal("userList", [...addUser, newUser]);
  };

  const [addedUserWarning, setaddedUserWarning] = useState("")

  console.log(addUser)
  const handleAddUser = () => {

    const addedUser = (addUser.find((item) => item.email === user.email))

if(addedUser){
  setaddedUserWarning("EXISTING USER CAN NOT BE ADDED!!!")
}else{
      addUserList({
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      dob: user.dob.age,
      city: user.location.city,
      cell: user.cell,
      id: crypto.randomUUID()
    })
  setaddedUserWarning("")
}

  };

const handleDelete = (id) => {
  const newUser = addUser?.filter((newPerson) => newPerson.id !== id);
  setAddUser(newUser)
}

  return (
    <div className={addUserStyle.addUser}>
      <div className="btn d-flex gap-5 justify-content-center mt-3">
        <button className="btn btn-success" onClick={getUser}>
          New User
        </button>
        <button className="btn btn-primary" onClick={handleAddUser}>
          Add User
        </button>
      </div>
      {addedUserWarning && (
        <div className="alert alert-warning text-center text-danger fs-5 fw-bolder">{addedUserWarning}</div>
      )}
      {addUser?.length ? (

          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Delete</th>
              </tr>
            </thead>

        {addUser.map((item, index) => (
            <tbody>
              <tr  id={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(item.id)}>delete</button></td>
              </tr>
            </tbody>
         ))} 
          </Table>
 
      ) : (
        <div className={addUserStyle.imgContainer}>
           <img src="./img/bos-liste.jpg" width="70%" alt="No Appointments" />
        </div>
       
      )}
    </div>
  );
};
