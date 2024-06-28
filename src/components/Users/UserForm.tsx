import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const user = isEdit ? JSON.parse(localStorage.getItem('UsersList') ?? '[]').find((u: any) => u.id.toString() === id) : { name: '' };
  console.log(JSON.parse(localStorage.getItem('UsersList') ?? '[]'));
  console.log(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEdit) {
      const userList = JSON.parse(localStorage.getItem('UsersList') ?? '[]');
      const lastUserId = userList.length > 0 ? userList[userList.length - 1].id : 0;
      const newUser = { ...user, id: lastUserId + 1 };
      userList.push(newUser);
      localStorage.setItem('UsersList', JSON.stringify(userList));
    } else {
      const userList = JSON.parse(localStorage.getItem('UsersList') ?? '[]');
      const userIndex = userList.findIndex((u: any) => u.id.toString() === id);
      userList[userIndex] = user;
      localStorage.setItem('UsersList', JSON.stringify(userList));
    }
    navigate('/users');
  };

  return (
    <div>
      <h1>{isEdit ? t('Edit User') : t('Create User')}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t('Name')}: </label>
        <input
          type="text"
          defaultValue={user.name}
          onChange={(e) => {
            user.name = e.target.value;
          }}
        />
        <button type="submit">{t('Save')}</button>
      </form>
    </div>
  );
};

export default UserForm;