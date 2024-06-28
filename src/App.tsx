import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UsersList from './components/Users/UsersList';
import UserDetail from './components/Users/UserDetail';
import UserForm from './components/Users/UserForm';
import NewsList from './components/News/NewsList';
import NewsDetail from './components/News/NewsDetail';
import Menu from './components/Menu';
import Home from './components/Home';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className='container'>
        <div className='lang'>
          <button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
          <button onClick={() => changeLanguage('es')}>🇲🇽 ES</button>
        </div>
        <Menu />
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/edit" element={<UserForm />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>{t('Page not found')}</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;