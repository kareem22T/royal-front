import React from 'react'
import Styles from './Insurances.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Insurances() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
    const settings = useSelector((state) => state.settings.settings);
    const currentLanguage = i18n.language;
  
  return (
    <div dir={i18n.dir(i18n.language)}>

    <div>

    <h4 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Insurances')}</h4>

    <div className={`${Styles.first} mx-auto`}>
    <p className={Styles.firstPara}>{currentLanguage == "ar" ? settings.medical_inssurence_ar : settings.medical_inssurence}</p>



      </div>
      
    </div>

    </div>
  )
}
