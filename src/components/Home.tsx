import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <nav>
      <h3>{t('Welcome Message')}</h3>
    </nav>
  );
};

export default Home;