import React, { useState } from 'react';
import Styles from './Food.module.css';
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

const Food = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState('');
  const [loader, setLoader] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
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
    } else if (!subject) {
      showErrorMessage(t("pleaseEnterSubject"));
      setLoader(false);
    } else {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('notes', notes);
        formData.append('where', "Food Analysis");

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
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('foodAnalysis')}</h1>
      <ToastContainer />
      <div className={`${Styles.upload}`}>
        <p>{t('foodFisrtPara')}</p>
        <p>{t('foodSecondPara')}</p>
        <p>{t('foodThirdPara')}</p>
        <ul className='px-1 mx-3'>
          <li>{t('foodThirdParaLione')}</li>
          <li>{t('foodThirdParaLiTwo')}</li>
          <li>{t('foodThirdParaLiThree')}</li>
          <li>{t('foodThirdParaLiFour')}</li>
        </ul>
        <p className='mt-5'>{t('Certificates')}</p>
        <p>{t('firstCertificate')}</p>
        <p>{t('secondCertificate')}</p>
        <p className='mt-2'>{t('foodForthPara')}</p>

        <div className='d-flex flex-column w-100 mt-5'>
          <label htmlFor="nameFoodAnalysis" className={Styles.labelOpt}>
            {t('name')}
          </label>
          <input
            type="text"
            id='nameFoodAnalysis'
            className={Styles.inputField}
            value={name}
            onChange={handleChangeName}
          />

          <label htmlFor="emailFoodAnalysis" className={Styles.labelOpt}>
            {t('email')}
          </label>
          <input
            type="text"
            id='emailFoodAnalysis'
            className={Styles.inputField}
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="subjectFoodAnalysis" className={Styles.labelOpt}>
            {t('subject')}
          </label>
          <input
            type="text"
            id='subjectFoodAnalysis'
            className={Styles.inputField}
            value={subject}
            onChange={handleChangeSubject}
          />

          <label htmlFor="notesFoodAnalysis" className={Styles.labelOpt}>
            {t('notes')}
          </label>
          <input
            type="text"
            id='notesFoodAnalysis'
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

export default Food;
