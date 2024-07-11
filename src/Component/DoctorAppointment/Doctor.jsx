import React, { useContext, useEffect, useState } from 'react';
import Styles from './Doctor.module.css';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDoctors } from '../../features/doctorSlice';
import { fetchAllConsultations } from '../../features/consultationSlice';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { API } from '../../features/globals';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/userContext';
import { api } from '../../API';

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

const Doctor = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date/time
  const currentLanguage = i18n.language;
  const [loader, setLoader] = useState(false);

  const [doctor, setDoctor] = useState(null);
  const [consultation, setConsultation] = useState(null);
  const [specialization, setSpecialization] = useState(null);
  const [doctorSpeci, setDoctorSpeci] = useState([]);

  const handleChangeDoctor = (e) => {
    const selectedDoctorId = e.target.value;
    setDoctor(selectedDoctorId);
    const selectedDoctor = doctors.find(doc => doc.id === parseInt(selectedDoctorId));
    setDoctorSpeci(selectedDoctor ? selectedDoctor.specializations : []);
  };

  const handleChangeSpecialization = (e) => {
    setSpecialization(e.target.value);
  };

  const handleChangeConsultation = (e) => {
    setConsultation(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors.doctors);
  const consultations = useSelector((state) => state.consultations.consultations);

  useEffect(() => {
    dispatch(fetchAllDoctors());
    dispatch(fetchAllConsultations());
  }, [dispatch]);

  const handleOnSubmit = async () => {
    setLoader(true)
    if (!doctor) {
      showErrorMessage(t("pleaseSelectDoctor"));
      setLoader(false)
    } else if (!specialization) {
      showErrorMessage(t("pleaseSelectSpecialization"));
      setLoader(false)
    } else if (!selectedDate) {
      showErrorMessage(t("pleaseSelectDate"));
      setLoader(false)
    } else if (!consultation) {
      showErrorMessage(t("pleaseSelectConsultation"));
      setLoader(false)
    } else {
      try {
        const res = await api.post(API + "/api/medical_consultations/place", {
          doctor_id: doctor,
          specialization_id: specialization,
          date: selectedDate,
          consultation_id: consultation,
        });
        
        setLoader(false)
        if (res.data.status === true) {
          showSuccessMsg(t("appointmentSentSuccessfully"));
          setTimeout(() => {
            window.location.href = ("/appointment/" + res.data.data[0].id)
          }, 2000);
        }
      } catch (err) {
        setLoader(false)
        showErrorMessage(t("errorSubmittingAppointment"));
        console.error('Error submitting appointment:', err);
      }
    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <ToastContainer />
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('doctorConsultation')}</h1>

      <div className={`${Styles.upload} my-5`}>
      {
          loader ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <>
<div className={Styles.inputgroup}>
  <label htmlFor="inputGroupSelect01" className={Styles.lableOpt}>
    {t('doctorName')}
  </label>
  <select className={Styles.select} value={doctor} onChange={handleChangeDoctor} id="inputGroupSelect01">
    <option className={Styles.opt} value="">{currentLanguage === "ar" ? "اختر ---" : "Choose ---"}</option>
    {doctors && doctors.map(doctor => (
      <option className={Styles.opt} key={doctor.id} value={doctor.id}>
        {currentLanguage === "ar" ? doctor.name_ar : doctor.name}
      </option>
    ))}
  </select>
</div>



        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('specialization')}
          </label>
          <select className={Styles.select} id="inputGroupSelect02" value={specialization} onChange={handleChangeSpecialization}>
            <option className={Styles.opt} value="">{currentLanguage === "ar" ? "اختر ---" : "choose"}</option>
            {doctorSpeci && doctorSpeci.map(specialization => (
              <option className={Styles.opt} key={specialization.id} value={specialization.id}>
                {currentLanguage === "ar" ? specialization.name_ar : specialization.name}
              </option>
            ))}
          </select>
        </div>

        <div className={Styles.inputgroup}>
          <label className={Styles.lableOpt}>
            {t('Date')}
          </label>
          <div className={Styles.datePickerWrapper}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholderText={t('Date')}
            />
          </div>
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect04" className={Styles.lableOpt}>
            {t('consultationType')}
          </label>
          <select className={Styles.select} id="inputGroupSelect04" value={consultation} onChange={handleChangeConsultation}>
            <option className={Styles.opt} value="">{currentLanguage === "ar" ? "اختر ---" : "choose"}</option>
            {consultations && consultations.map(consultation => (
              <option className={Styles.opt} key={consultation.id} value={consultation.id}>
                {currentLanguage === "ar" ? consultation.name_ar : consultation.name}
              </option>
            ))}
          </select>
        </div>

        <button className={`${Styles.requestBtnNow}`} onClick={handleOnSubmit}>{t('requestBtnNow')}</button>
        </>
          )
        }
      </div>
    </div>
  );
};

export default Doctor;
