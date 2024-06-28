import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  const routes = [
    { path: '/', name: t('Home') },
    { path: '/news', name: t('News') },
    { path: '/users', name: t('Users') },
  ];

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;