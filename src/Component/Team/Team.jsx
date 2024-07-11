import React, { useContext, useEffect, useState } from 'react';
import Styles from './Results.module.css'
import { useSSR, useTranslation } from 'react-i18next';
import { AppContext } from '../../Context/userContext';
import axios from 'axios';
import { API } from '../../features/globals';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { api } from '../../API';

const Team = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('ourTeam')}</h1>


    </div>
  );
};

export default Team;
