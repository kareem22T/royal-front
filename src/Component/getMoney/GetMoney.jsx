import React from 'react'
import Styles from './GetMoney.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function GetMoney() {

  
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
  return (
    <div dir={i18n.dir(i18n.language)}>

    <div>

    <h4 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('returnPlicy')}</h4>

    <div className={`${Styles.first} mx-auto`}>
        <p className={Styles.firstPara}>{t('returnPlicy')} : {t('returnPoliy1')}</p>
        <p className={Styles.firstPara}>{t('returnPoliy2')} : {t('returnPoliy3')}</p>

        <p className={Styles.firstPara}>{t('returnPoliy2')} :</p>
        <p className={Styles.firstPara}>{t('returnPoliy5')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy6')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy7')}</p>
        <p className={Styles.firstPara}>{t('returnPoliy8')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy9')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy10')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy11')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy12')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy13')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy14')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy15')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy16')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy17')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy188')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy19')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy20')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy21')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy22')} </p>
        <p className={Styles.firstPara}>{t('returnPoliy18')} </p>

        <p className={Styles.firstPara}>{t('returnPoliy23')} </p>


      </div>
      
    </div>

    </div>
  )
}
