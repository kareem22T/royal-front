import React, { useContext, useEffect, useState } from 'react';
import Styles from './Profile.module.css'
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../Context/userContext'; // Adjust the path as per your context setup
import axios from 'axios';
import { API } from '../../features/globals';
import { useSelector } from 'react-redux';
import profile from '../../imgs/profile.png'

const Profile = () => {
  const { t, i18n } = useTranslation();  
  const isRTL = i18n.dir(i18n.language) === 'rtl';

  const name = useSelector((state) => state.auth.name);
  const phone = useSelector((state) => state.auth.phone);
  const email = useSelector((state) => state.auth.email);
  const picture = useSelector((state) => state.auth.picture);


  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main}  ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Profile')}</h1>
    <div className={`${Styles.profile}`}>

      <div className="container">
        <div className="row">
        <div className="col-md-6">
          <h3 className='text-center d-flex flex-column myb-4'>{t('personalInfo')}</h3>
          
          <div className="d-flex align-items-center justify-content-center my-5">
                <div className={Styles.theImage}>
                <img 
                  className={`${Styles.img} me-3`} 
                  src={picture ? (API + picture) : profile} 
                  alt="Profile" 
                />
                </div>
                <div>
                  <p>{t('Name')} : {name}</p>
                  <p>{t('Phone')} : {phone}</p>
                 
                </div>
              </div>
            </div>

{/* 
          <div className="col-md-4">

          <h3 className='text-center'>{t('Address')}</h3>

            
          </div> */}

          <div className="col-md-6">

          <h3 className='text-center'>{t('file')}</h3>

          <div className='my-5 d-flex justify-content-center align-items-center'>

            <p className='mt-5 pt-3'>{t('email1')} : {email}</p>

          </div>

            
          </div>
        </div>
      </div>



      </div>

    </div>
  );
};

export default Profile;
