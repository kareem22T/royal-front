import React from 'react'
import Styles from './Vaccinations.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Vaccinations() {

  
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
  return (
    <div dir={i18n.dir(i18n.language)}>

    <div>

    <h4 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Vaccinations')}</h4>

    <div className={`${Styles.first} mx-auto`}>
    <p className={Styles.firstPara}>{t('Vaccinations1')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations2')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations3')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations4')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations5')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations6')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations7')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations8')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations9')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations10')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations11')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations12')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations13')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations14')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations15')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations16')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations17')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations18')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations19')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations20')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations21')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations22')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations23')}</p>
    <p className={Styles.firstPara}>{t('Vaccinations24')}</p>
   



      </div>
      
    </div>

    </div>
  )
}
