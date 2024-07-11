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

const Team = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const [teams, setTeams] = useState([])

  useEffect(() => {
    // Define the URL of the API endpoint
    const url = API + "/api/teams/get";

    // Use the fetch function to make a request to the API
    fetch(url)
      .then(response => {
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON from the response
        return response.json()
      })
      .then(data => {
        // Log the data to the console
        setTeams(data.data[0]);
        // You can also manipulate the data here
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There has been a problem with your fetch operation:', error);
      });

  }, [])

  return (
    <div dir={i18n.dir(i18n.language)}>
    <h1 className={Styles.Baqat}>{t('ourTeam')}</h1>

    <div className="row mx-5 mt-5 mb-3 ">
      {
          teams && teams.length > 0 && (
            teams.map(service => (
              <div className="col-lg-3 col-md-6 pb-5">
                  <div className={`${Styles.servicesCards}`}>
                  <img height={200} className={Styles.blooadPhoto} src={API + service.photo_path} alt="" />

                    <h2>{ currentLanguage == "ar" ? service.name_ar : service.name }</h2>
                    {
                      (service.position_ar && service.position ) && (
                        <p>{currentLanguage == "ar" ? (service.position_ar.length > 60 ? service.position_ar?.substring(0, 60) + "..." : service.position_ar) : (service.position.length > 60 ? service.position?.substring(0, 60) + "..." : service.position)}</p>
                      )
                    }
                  </div>

              </div>
            ))
          )
        }


    </div>
    </div>
  );
};

export default Team;
