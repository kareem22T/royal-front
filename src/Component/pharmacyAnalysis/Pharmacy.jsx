import React, { useEffect, useState } from 'react';
import Styles from './Pharmacy.module.css';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API } from '../../features/globals';
import { useSelector } from 'react-redux';

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

const Pharmacy = () => {
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
        formData.append('where', "Pharmacy Analysis");

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

  const settings = useSelector((state) => state.settings.settings);
  const currentLanguage = i18n.language;

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('pharmaceuticalAnalyses')}</h1>
      <ToastContainer />
      <div className={`${Styles.upload}`}>
        <p>{currentLanguage == "ar" ? settings.pharmaceutical_analyses_ar : settings.pharmaceutical_analyses}</p>

        <div className='d-flex flex-column w-100 mt-5'>
          <label htmlFor="namePharmacyAnalysis" className={Styles.labelOpt}>
            {t('namePharmacy')}
          </label>
          <input
            type="text"
            id='namePharmacyAnalysis'
            className={Styles.inputField}
            value={name}
            onChange={handleChangeName}
          />

          <label htmlFor="emailPharmacyAnalysis" className={Styles.labelOpt}>
            {t('email')}
          </label>
          <input
            type="email"
            id='emailPharmacyAnalysis'
            className={Styles.inputField}
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="phonePharmacyAnalysis" className={Styles.labelOpt}>
            {t('phonePharmacy')}
          </label>
          <input
            type="tel"
            id='phonePharmacyAnalysis'
            className={Styles.inputField}
            value={phone}
            onChange={handleChangePhone}
          />

          <label htmlFor="subjectPharmacyAnalysis" className={Styles.labelOpt}>
            {t('subjectPharmacy')}
          </label>
          <input
            type="text"
            id='subjectPharmacyAnalysis'
            className={Styles.inputField}
            value={subject}
            onChange={handleChangeSubject}
          />

          <label htmlFor="notesPharmacyAnalysis" className={Styles.labelOpt}>
            {t('notesPharmacy')}
          </label>
          <input
            type="text"
            id='notesPharmacyAnalysis'
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
            {t('sendPharmacy')}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
