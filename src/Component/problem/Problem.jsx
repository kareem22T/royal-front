import React from 'react'
import Styles from './Problem.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Problem() {

  
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
  return (
    <div dir={i18n.dir(i18n.language)}>

    <div>

    {/* <h4 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('jobs')}</h4> */}

    <div className={`${Styles.first} mx-auto`}>
    <p className={Styles.firstPara}>{t('nameProblem')}</p>

    <input type="text" className={Styles.theInput} placeholder={t('commentProblem')}/>

<div className='my-4'>
<button className={Styles.problemBtn}>{t('sendproblem')}</button>

</div>



      </div>
      
    </div>

    </div>
  )
}
