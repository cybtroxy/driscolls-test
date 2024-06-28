import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetail = () => {
  const { t } = useTranslation();
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userList = JSON.parse(localStorage.getItem('UsersList') ?? '[]');
  const user = userList.find((user: { id: string }) => user.id.toString() === id) ?? { name: '' };

  const handleDelete = () => {
    const userList = JSON.parse(localStorage.getItem('UsersList') ?? '[]');
    const userIndex = userList.findIndex((u: any) => u.id.toString() === id);
    userList.splice(userIndex, 1);
    localStorage.setItem('UsersList', JSON.stringify(userList));
    navigate('/users');
  };

  return (
    <div>
      <h1>{t('User Detail')}</h1>
      <p>{t('Name')}: {user.name}</p>
      <button onClick={() => navigate(`/users/${id}/edit`)}>{t('Edit')}</button>
      <button onClick={handleDelete}>{t('Delete')}</button>
    </div>
  );
};

export default UserDetail;