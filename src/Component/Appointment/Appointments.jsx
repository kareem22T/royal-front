import React, { useEffect, useState } from 'react';
import Styles from './Appointment.module.css';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
import { fetchAllAppointments, getAppointmentDetails } from '../../features/appointmentSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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




const Appointments = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);  
  const totalPages = useSelector((state) => state.appointments.totalPages);  
  const currentPage = useSelector((state) => state.appointments.currentPage);  
  const handleChange = async (value) => {
    dispatch(fetchAllAppointments({page: value, per_page: 20}));
  };

  useEffect(() => {
    dispatch(fetchAllAppointments({page: 1, per_page: 20}));
    console.log(appointments);
  }, [dispatch])

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Appointments')}</h1>
      <ToastContainer />
      <div className={`container ${Styles.first} mx-auto`}>
        <div className={Styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>{t('name')}</th>
                <th>{t('phone')}</th>
                <th>{t('age')}</th>
                <th>{t('appointmentDate')}</th>
                <th>{t('appointmentStatus')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                (appointments && appointments.length > 0) && (
                  appointments.map((appointment, index) => (
                    <tr>
                      <td>
                        #{appointment?.id}
                      </td>
                      <td>
                        {appointment?.name}
                      </td>
                      <td>
                        {appointment?.phone}
                      </td>
                      <td>
                        {appointment?.age}
                      </td>
                      <td>
                        {
                            new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { month: 'long'}) + " " + 
                            new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { day: 'numeric'}) + ", " +
                            new Date(appointment?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { year: "numeric"})
                        }
                      </td>
                      <td style={{color: appointment?.status == 1 ? "#252525" : (appointment?.status == 2 ? t("confirmed") : appointment?.status == 3 ? "#099a3b" : appointment?.status == 0  ? "#da1313" : "gray"), fontWeight: 700}}>
                        {appointment?.status == 1 ? t('under_review') : (appointment?.status == 2 ? t("confirmed") : appointment?.status == 3 ? t('completed') : appointment?.status == 0  ? t("canceld") : t("undefiend"))}
                      </td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <Link className={Styles.payBtn}  style={{ textDecoration: "none", margin: 0, paddingTop: 4, paddingBottom: 4 }} to={"/appointment/" + appointment?.id}>
                          {t("appointmentDetails")}
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )
              }
              {
                (!appointments || appointments.length == 0) && (
                  <tr>
                      <td colSpan={7}>{t("noAppointments")}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
          {totalPages  && totalPages > 1 ? (
            <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
              <Pagination count={totalPages} page={currentPage} onChange={(e, value) => handleChange(value)}  variant="outlined" color='primary' shape="rounded" />
            </Stack>
          ) : (
            <></>
          )}
      </div>


      

    </div>
  );
};

export default Appointments;
