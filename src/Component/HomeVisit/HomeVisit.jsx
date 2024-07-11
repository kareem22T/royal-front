import React, { useEffect } from 'react';
import Styles from './HomeVisit.module.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
import { fetchAllVisits, getVisitDetails } from '../../features/visitSlice';
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



const HomeVisit = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir(i18n.language) === 'rtl';
    const currentLanguage = i18n.language;
    const dispatch = useDispatch();
    const visits = useSelector((state) => state.visits.visits);  
    const totalPages = useSelector((state) => state.visits.totalPages);  
    const currentPage = useSelector((state) => state.visits.currentPage);  
    const handleChange = async (value) => {
      dispatch(fetchAllVisits({page: value, per_page: 20}));
    };

    useEffect(() => {
      dispatch(fetchAllVisits({page: 1, per_page: 20}));
      console.log(visits);
    }, [dispatch])

    return (
      <div dir={i18n.dir(i18n.language)}>
        <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('homeVisit')}</h1>
  
        <div className={Styles.upload}>
          {/* <input type="text" id="imageUpload" name="imageUpload"  
          placeholder={t('visitNumber')} 
          className={`${Styles.fileInput} mb-5 form-control`} /> */}

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
                <th>{t('address')}</th>
                <th>{t('visitDate')}</th>
                <th>{t('visitStatus')}</th>
              </tr>
            </thead>
            <tbody>
              {
                (visits && visits.length > 0) && (
                  visits.map((visit, index) => (
                    <tr>
                      <td>
                        #{visit?.id}
                      </td>
                      <td>
                        {visit?.name}
                      </td>
                      <td>
                        {visit?.phone}
                      </td>
                      <td>
                        {visit?.address}
                      </td>
                      <td>
                        {
                            new Date(visit?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { month: 'long'}) + " " + 
                            new Date(visit?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { day: 'numeric'}) + ", " +
                            new Date(visit?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { year: "numeric"})
                        }
                      </td>
                      <td style={{color: visit?.status == 1 ? "#252525" : (visit?.status == 2 ? t("confirmed") : visit?.status == 3 ? "#099a3b" : visit?.status == 0  ? "#da1313" : "gray"), fontWeight: 700}}>
                        {visit?.status == 1 ? t('under_review') : (visit?.status == 2 ? t("confirmed") : visit?.status == 3 ? t('completed') : visit?.status == 0  ? t("canceld") : t("undefiend"))}
                      </td>
                    </tr>
                  ))
                )
              }
              {
                (!visits || visits.length == 0) && (
                  <tr>
                      <td colSpan={7}>
                        <h4 className={`${Styles.notFound} my-5`}>{t('notFoundVisit')}</h4>
                      </td>
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

  

          <Link to={"/reserve-home-visit"} className={`${Styles.reserveBtn}`}>{t('reserverNow')}</Link>
        </div>
      </div>
    );
  };
  
  export default HomeVisit;