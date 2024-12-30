import React, { useContext } from 'react'
import { UsersContext } from '../context/UserContext'

function Users() {
    const {datas} = useContext(UsersContext)

    
  return (
    <div>
      <table border='1' style={{width: "100%", textAlign: 'left'}}>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            {datas.map((item) => (
                <tr key={item.id || index}>
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
