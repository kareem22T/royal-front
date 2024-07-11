import React from 'react';
import Styles from './Royal.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Royal = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('aboutUs')}</h1>

      <div className={`${Styles.first} mx-auto`}>
        <h1>{t('aboutUs')}</h1>
        <p className={Styles.firstPara}>{t('p1')}</p>
        <p className={Styles.firstPara}>{t('p2')}</p>
        <p className={Styles.firstPara}>{t('p3')}</p>
        <p className={Styles.firstPara}>{t('p4')}</p>
        <p className={Styles.firstPara}>{t('p5')}</p>
        <p className={Styles.firstPara}>{t('p6')}</p>
      </div>

      <Link to={'/about'} className={Styles.readeLessBtn}>{t('readLess')}</Link>
    </div>
  );
};

export default Royal;
