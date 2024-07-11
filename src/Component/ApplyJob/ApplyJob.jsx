import React, { useContext, useState } from 'react';
import Styles from './ApplyJob.module.css';
import { useTranslation } from 'react-i18next';
import { API } from '../../features/globals';
import axios from 'axios';
import { AppContext } from '../../Context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
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

const ApplyJob = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // New state for preview URL
  const [notes, setNotes] = useState("");
  const [loader, setLoader] = useState(false);
  const authName = useSelector((state) => state.auth.name);
  const authPhone = useSelector((state) => state.auth.phone);
  const [name, setName] = useState(authName);
  const [phone, setPhone] = useState(authPhone);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeNotes = (e) => {
    setNotes(e.target.value);
  };

  const handleOnsubmit = async () => {
    setLoader(true);
    if (!file) {
      showErrorMessage(t("uploadYourCv"));
      setLoader(false);
    } else if (!name) {
      showErrorMessage(t("pleaseEnterName"));
      setLoader(false);
    } else if (!phone) {
      showErrorMessage(t("pleaseEnterPhone"));
      setLoader(false);
    }  else {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('notes', notes);
        formData.append('phone', phone);
        const res = await api.post(API + "/api/job/apply", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("recevidYourRequest"));
          setNotes("");
          setPhone("");
          setName("");
          setFile(null);
          setPreviewUrl(null); // Clear the preview URL
        }
      } catch (err) {
        setLoader(false);
        console.error('Error uploading file:', err);
      }
    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{ t('applyForJob')}</h1>
      <ToastContainer />
      <div className={Styles.upload}>
        {
          loader ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <label htmlFor="imageUpload" className={Styles.fileLabel}>{file ? t("uploaded") :t('chooseCv')}</label>
              <input
                type="file"
                id="imageUpload"
                name="imageUpload"
                onChange={handleChangeFile}
                className={Styles.fileInput}
              />
                      <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('name')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            <input
              value={name}
              onChange={handleChangeName}
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholder={`${t('name')}`}
            />
          </div>
        </div>
        <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('Phone')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            <input
              value={phone}
              onChange={handleChangePhone}
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholder={`${t('Phone')}`}
            />
          </div>
        </div>

              <label htmlFor="notes" className={`${Styles.label} my-2`}>{t('notesLabel')}</label>
              <textarea
                id="notes"
                name="notes"
                value={notes}
                onChange={handleChangeNotes}
              ></textarea>

              <button onClick={handleOnsubmit} className={`${Styles.uploadBtn} mx-auto`}>{t('Apply')}</button>
            </>
          )
        }
      </div>
    </div>
  );
};

export default ApplyJob;
