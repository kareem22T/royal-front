import React, { useContext, useEffect, useState } from 'react';
import Styles from './Results.module.css'
import { useSSR, useTranslation } from 'react-i18next';
import { AppContext } from '../../Context/userContext';
import axios from 'axios';
import { API } from '../../features/globals';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { api } from '../../API';

const Results = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  
  const [results, setResults] = useState([])
  const [totalPages, setTotal] = useState(1);  
  const [currentPage, setPage] = useState(1);  
  const [loading, setLoading] = useState(true)

  const [msg ,setMsg] = useState('')

  useEffect(() => {
    const getUserData = async () => {
      setLoading(true)
      try {
        const res = await api.get('https://royal-lab.webbing-agency.com/api/user/user-results');
        if (res.data.status === true) {
          console.log(res.data.data);
          setResults(res.data.data.data)
          setTotal(res.data.data.last_page)
          setPage(res.data.data.current_page)

          if (res.data.data.data.length === 0) {
            const message = currentLanguage === "ar" ? 'لا يوجد نتايج حاليا !' : 'there is no results now !';
            setMsg(message); 
          }
          setLoading(false)
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    getUserData();
  }, []);

  const handleChange = async (value) => {
    setLoading(true)
    try {
      const res = await api.get(`https://royal-lab.webbing-agency.com/api/user/user-results?page=${value}`);
      if (res.data.status === true) {
        setResults(res.data.data.data)
        setTotal(res.data.data.last_page)
        setPage(res.data.data.current_page)
      }
      setLoading(false)

    } catch (err) {
      console.error('Error fetching user data:', err);

    }
  };


  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Results')}</h1>

      {msg ? <h1 className='text-center'>{msg}</h1> : ''}

      {
        ((results && results.length > 0) && !loading) && (
          results.map(res => (
            <div className={`${Styles.first} my-5 d-flex flex-row align-items-center justify-content-between`}>
            <div>
              <p>{t('servicesp1') + (currentLanguage == "ar" ? res.service_name_ar : res.service_name)}</p>
              <p>{t('servicesp2') + ( res.date)}</p>
              <p>{t('servicesp3') + (currentLanguage == "ar" ? (res.status == 2 ? "اكتملت" : "قيد الانتظار") : (res.status == 2 ? "Completed" : "Waiting"))}</p>
              {res.file && (
              <a href={API + '/public/' + res.file} download="download" target='_blank' className={Styles.uploadPdf + " d-block"}>{t('updloadPdf')}</a>
              )}
            </div>
                
              {
                res.status == 1 ? (
                  <svg width="70" height="100" viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0001 0C14.3349 0 4.00232 0 0.991257 6.49592C0.732457 7.05432 0.514106 7.63432 0.338256 8.23052C-1.70715 15.1665 5.59907 23.2056 20.2116 39.2838L30.0001 50.0001H40.0001L49.7886 39.2838C64.4012 23.2056 71.7072 15.1665 69.6617 8.23052C69.4862 7.63432 69.2677 7.05432 69.0087 6.49592C65.9977 0 55.6652 0 35.0001 0Z" fill="#B39330"/>
                  <path d="M0.991257 93.5042C4.00232 100 14.3349 100 35.0001 100C55.6652 100 65.9977 100 69.0087 93.5042C69.2677 92.9457 69.4862 92.3657 69.6617 91.7697C71.7072 84.8337 64.4012 76.7947 49.7886 60.7167L40.0001 50.0001H30.0001L20.2116 60.7167C5.59907 76.7947 -1.70715 84.8337 0.338256 91.7697C0.514106 92.3657 0.732457 92.9457 0.991257 93.5042Z" fill="#E3C361" fill-opacity="0.49"/>
                  </svg>
                ) : (
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_414_4086)">
                  <path d="M41.0832 75C40.5119 74.9982 39.947 74.8788 39.4238 74.6495C38.9005 74.4201 38.43 74.0856 38.0415 73.6667L17.7915 52.125C17.0346 51.3183 16.6291 50.2439 16.6642 49.1382C16.6994 48.0326 17.1723 46.9861 17.979 46.2292C18.7857 45.4722 19.8601 45.0667 20.9658 45.1018C22.0715 45.137 23.1179 45.61 23.8749 46.4167L41.0415 64.7083L76.0832 26.375C76.4388 25.9322 76.8812 25.5667 77.3832 25.3011C77.8852 25.0355 78.4362 24.8753 79.0023 24.8303C79.5685 24.7854 80.1378 24.8567 80.6754 25.0398C81.213 25.2229 81.7075 25.514 82.1285 25.8952C82.5496 26.2764 82.8882 26.7396 83.1237 27.2564C83.3591 27.7732 83.4865 28.3327 83.4978 28.9006C83.5092 29.4684 83.4043 30.0325 83.1897 30.5584C82.9751 31.0842 82.6553 31.5606 82.2499 31.9583L44.1665 73.625C43.7817 74.0515 43.3128 74.3938 42.7894 74.6304C42.266 74.867 41.6993 74.9929 41.1249 75H41.0832Z" fill="#B39330"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_414_4086">
                  <rect width="100" height="100" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                )
              }

            </div>
          ))
        )
      }
      {
        loading && (
          <h1 className='text-center'>جاري التحميل </h1>
        )
      }
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

export default Results;
