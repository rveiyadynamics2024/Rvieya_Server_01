// src/pages/Services.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import EduTechServices from './EduTech';
import ITServices from './ItServices';
import DigitalMarketing from './Digital';

function Services() {
  const { type } = useParams();

  const contentMap = {
    'edutech': {
      
      component: <EduTechServices />
    },
    'it-services': {
      
      component: <ITServices />
    },
    'digital-marketing': {
    
      component: <DigitalMarketing />
    }
  };

  const content = contentMap[type];

  if (!content) {
    return <h2 style={{ padding: '40px' }}>Invalid service selected.</h2>;
  }

  return (
    <div className="page-content" style={{ padding: '40px' }}>
      <h1>{content.title}</h1>
      {content.component}
    </div>
  );
}

export default Services;
