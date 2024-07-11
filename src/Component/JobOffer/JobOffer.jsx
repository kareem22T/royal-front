import React from 'react'
import Styles from './JobOffer.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function JobOffer() {

  
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
  return (
    <div dir={i18n.dir(i18n.language)}>

    <div>

    <h4 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('jobs')}</h4>

    <div className={`${Styles.first} mx-auto`}>
    <p className={Styles.firstPara}>{t('opportunities')}</p>



      </div>
      
    </div>

    </div>
  )
}
