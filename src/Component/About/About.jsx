import React from 'react';
import Styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const settings = useSelector((state) => state.settings.settings);
  const currentLanguage = i18n.language;

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('aboutUs')}</h1>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('aboutUs')}</h1>
        <p className={Styles.firstPara}>{currentLanguage == "ar" ? settings.about_royal_ar : settings.about_royal}</p>
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourVision')}</h1>
        <p className={Styles.secPara}>{currentLanguage == "ar" ? settings.about_vision_ar : settings.about_vision}</p>
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourMsg')}</h1>
        <p className={Styles.secPara}>{currentLanguage == "ar" ? settings.about_msg : settings.about_msg}</p>

      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('ourValue')}</h1>
        <p className={Styles.secPara}>{currentLanguage == "ar" ? settings.about_value : settings.about_value}</p>
   
      </div>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('Ourgoals')}</h1>
        <p className={Styles.secPara}>{currentLanguage == "ar" ? settings.about_goals : settings.about_goals}</p>
      </div>
    </div>
  );
};

export default About;
