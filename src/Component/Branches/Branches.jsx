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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBranches } from '../../features/branchesSlice';

const Branches = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches.branches);  
  useEffect(() => {
    dispatch(fetchAllBranches());
  }, [dispatch]);

  const [results, setResults] = useState([])
  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Branches')}</h1>

      {
        (branches && branches.length > 0) && (
          branches.map(res => (
            <div className={`${Styles.first} my-5 d-flex flex-row align-items-center justify-content-between`}>
            <div>
              <p>{t('branch') + ": " + (currentLanguage == "ar" ? res.address_ar : res.address)}</p>
              <p>{t('City') + ": " + (currentLanguage == "ar" ? res.city.name_ar : res.city.name)}</p>
              <p>{t('Region') + ": " + (currentLanguage == "ar" ? res.region.name_ar : res.region.name)}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="60" height="60" viewBox="0 0 24 24" style={{color: "#b39330"}} stroke-width="1.5" stroke="#b39330" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
          </svg>
            </div>
          ))
        )
      }


    </div>
  );
};

export default Branches;
