import React from 'react';
import UserCard from './components/UserCard'
import users from './users.json';

export default function App() {
  return (
    <div className='container'>
      {users.map(user => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  );
}
