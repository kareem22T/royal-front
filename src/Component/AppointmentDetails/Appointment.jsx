import React, { useEffect, useState } from 'react';
import Styles from './Appointment.module.css';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
import { getAppointmentDetails } from '../../features/appointmentSlice';
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




const Appointment = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const {id} = useParams()
  const appointment = useSelector((state) => state.appointments.selectedAppointment);  

  useEffect(() => {
    dispatch(getAppointmentDetails(id));
    console.log(appointment);
  }, [dispatch])

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('appointmentDetails')} #{id.padStart(4, '0')}</h1>
      <div className={Styles.details_wrapper}>
        <div className={Styles.inputGroup}>
          <label htmlFor="name">{t('name')}</label>
          <input type="text" name="name" id="name" disabled value={appointment?.name || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="phone">{t('phone')}</label>
          <input type="text" name="phone" id="phone" disabled value={appointment?.phone || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="address">{t('age')}</label>
          <input type="text" name="address" id="address" disabled value={appointment?.age || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="appointmentDate">{t('appointmentDate')}</label>
          <input type="text" name="appointmentDate" id="appointmentDate" disabled 
          value={
              new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { month: 'long'}) + " " + 
              new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { day: 'numeric'}) + ", " +
              new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { year: "numeric"})
          }
      />
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="appointmentStatus">{t('appointmentStatus')}</label>
          <input type="text" name="appointmentStatus" style={{color: appointment?.status == 1 ? "#252525" : (appointment?.status == 2 ? t("confirmed") : appointment?.status == 3 ? "#099a3b" : appointment?.status == 0  ? "#da1313" : "gray"), fontWeight: 700}} id="appointmentStatus" disabled value={appointment?.status == 1 ? t('under_review') : (appointment?.status == 2 ? t("confirmed") : appointment?.status == 3 ? t('completed') : appointment?.status == 0  ? t("canceld") : t("undefiend"))}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="totla">{t('service')}</label>
          <input type="text" name="total" id="total" disabled value={ (currentLanguage == 'ar' ? appointment?.service.name_ar : appointment?.service.name)}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="totla">{t('branch')}</label>
          <input type="text" name="total" id="total" disabled value={ (currentLanguage == 'ar' ? appointment?.branch.address_ar : appointment?.branch.address)}/>
        </div>
      </div>
      <br />
      <ToastContainer />
    </div>
  );
};

export default Appointment;
