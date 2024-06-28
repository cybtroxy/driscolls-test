import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const { t } = useTranslation();
  let userList = localStorage.getItem('UsersList');
  if (!userList || (userList && userList === '[]')) {
    userList = JSON.stringify([
      { id: 1, name: 'Patricia Delgado' },
      { id: 2, name: 'Carlos Castro' },
      { id: 3, name: 'John Doe' }
    ]);
    localStorage.setItem('UsersList', userList);
  }
  const users: {id: number, name: string}[] = userList ? JSON.parse(userList) : [];
  

  return (
    <div>
      <h1>{t('Users')}</h1>
      <Link to="/users/new">{t('Create User')}</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;