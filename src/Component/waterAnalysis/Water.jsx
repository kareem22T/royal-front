import React, { useState } from 'react';
import Styles from './Water.module.css';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API } from '../../features/globals';

const showSuccessMsg = (msg) => {
  toast.success(msg, {
    position: 'top-right',
  });
};

const showErrorMessage = (msg) => {
  toast.error(msg, {
    position: 'top-right',
  });
};

const Water = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState('');
  const [loader, setLoader] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleOnsubmit = async () => {
    setLoader(true);
    if (!name) {
      showErrorMessage(t("pleaseEnterName"));
      setLoader(false);
    } else if (!email) {
      showErrorMessage(t("pleaseEnterEmail"));
      setLoader(false);
    } else if (!phone) {
      showErrorMessage(t("pleaseEnterPhone"));
      setLoader(false);
    } else if (!subject) {
      showErrorMessage(t("pleaseEnterSubject"));
      setLoader(false);
    } else {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('subject', subject);
        formData.append('notes', notes);
        formData.append('where', "Water Analysis");

        const res = await axios.post(API + '/api/company/placeMsg', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });

        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("requestReceived"));
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setNotes('');
        }
      } catch (err) {
        setLoader(false);
        console.error('Error submitting form:', err);
        showErrorMessage(t("submissionFailed"));
      }
    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('waterAnalysis')}</h1>
      <ToastContainer />
      <div className={`${Styles.upload}`}>
        <p>{t('waterFirstPara')}</p>
        <p>{t('waterSecondPara')}</p>
        <p>{t('waterThirdPara')}</p>
        <p>{t('waterForthPara')}</p>
        <ul className='px-1 mx-3'>
          <li>{t('waterForthParaFirstLi')}</li>
          <li>{t('waterForthParaSecondLi')}</li>
        </ul>
        <p>{t('waterSixPara')}</p>
        <p>{t('waterSevenPara')}</p>
        <p className='mt-5'>{t('waterCertificate')}</p>
        <p>{t('waterfirstCertificate')}</p>
        <p>{t('watersecondCertificate')}</p>

        <div className='d-flex flex-column w-100 mt-5'>
          <label htmlFor="nameWaterAnalysis" className={Styles.labelOpt}>
            {t('nameWater')}
          </label>
          <input
            type="text"
            id='nameWaterAnalysis'
            className={Styles.inputField}
            value={name}
            onChange={handleChangeName}
          />

          <label htmlFor="emailWaterAnalysis" className={Styles.labelOpt}>
            {t('email')}
          </label>
          <input
            type="email"
            id='emailWaterAnalysis'
            className={Styles.inputField}
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="phoneWaterAnalysis" className={Styles.labelOpt}>
            {t('phoneWater')}
          </label>
          <input
            type="tel"
            id='phoneWaterAnalysis'
            className={Styles.inputField}
            value={phone}
            onChange={handleChangePhone}
          />

          <label htmlFor="subjectWaterAnalysis" className={Styles.labelOpt}>
            {t('subjectWater')}
          </label>
          <input
            type="text"
            id='subjectWaterAnalysis'
            className={Styles.inputField}
            value={subject}
            onChange={handleChangeSubject}
          />

          <label htmlFor="notesWaterAnalysis" className={Styles.labelOpt}>
            {t('notesWater')}
          </label>
          <input
            type="text"
            id='notesWaterAnalysis'
            className={Styles.inputField}
            value={notes}
            onChange={handleChangeNotes}
          />
        </div>

        {loader ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <button onClick={handleOnsubmit} className={`${Styles.send} mb-5`}>
            {t('send')}
          </button>
        )}
      </div>
    </div>
  );
};

export default Water;
