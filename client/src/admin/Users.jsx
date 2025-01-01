import React, { useContext } from 'react';
import { UsersContext } from '../context/UserContext';

function Users() {
    const { datas } = useContext(UsersContext);

    return (
        <div>
            <table border='1' style={{ width: "100%", textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((item, index) => (
                        <tr className='border h-12' key={item.id || index}>
                            <td className='text-xl'>{index + 1}</td>
                            <td className='text-xl'>{item.username}</td>
                            <td className='text-xl'>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
