import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const { t } = useTranslation();
  
  const news = [
    { id: 1, title: 'Von der Leyen nominated to stay on in top EU job' },
    { id: 2, title: 'Falling roof pillars smash cars at Delhi airport' },
    { id: 3, title: 'As young Iranians lose hope, a reformist runs for president' },
    { id: 4, title: 'EU warns Georgia\'s NGO law is blocking its path to joining' },
    { id: 5, title: 'Rock stars, wrestlers and pilgrims: Africa\'s top shots' },
    { id: 6, title: 'Le Pen threatens to challenge Macron\'s army powers' },
    { id: 7, title: 'Sinkhole swallows Illinois football pitch' },
  ];

  return (
    <div>
      <h1>{t('News')}</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;