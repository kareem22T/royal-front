import React, { useContext, useEffect, useState } from 'react';
import Styles from './Reserve.module.css';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import { AppContext } from '../../Context/userContext';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../features/servicesSlice';
import { fetchAllBranches } from '../../features/branchesSlice';
import { ToastContainer, toast } from 'react-toastify';
import { API } from '../../features/globals';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
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

const Reserve = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);
  const currentLanguage = i18n.language;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await api.get('https://royal-lab.webbing-agency.com/api/user/get');
        if (res.data.status === true) {
          setUserData(res.data.data.user); 
          console.log(res.data.data.user);
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    getUserData();
  }, []);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [branch_id, setBranchId] = useState('');
  const [service_id, setServiceId] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date/time

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.all_services);  
  const branches = useSelector((state) => state.branches.branches);  
  useEffect(() => {
    dispatch(getAllServices());
    dispatch(fetchAllBranches());
  }, [dispatch]);

  useEffect(() => {
    if (userData && userData.name)
      setName(userData.name)

    if (userData && userData.phone)
      setPhone(userData.phone)
  }, [userData])
  
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeBranch = (e) => {
    setBranchId(e.target.value);
  };

  const handleChangeService = (e) => {
    setServiceId(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOnsubmit = async () => {
    setLoader(true);
    if (!name) {
      showErrorMessage(t("pleaseEnterName"));
      setLoader(false);
    } else if (!age) {
      showErrorMessage(t("pleaseEnterAge"));
      setLoader(false);
    } else if (!phone) {
      showErrorMessage(t("pleaseEnterPhone"));
      setLoader(false);
    } else if (!selectedDate) {
      showErrorMessage(t("pleaseEnterDate"));
      setLoader(false);
    } else if (!branch_id) {
      showErrorMessage(t("pleaseSelectBranch"));
      setLoader(false);
    } else if (!service_id) {
      showErrorMessage(t("pleaseSelectService"));
      setLoader(false);
    } else {
      try {
        const res = await api.post(API + "/api/appointments/place", {
          name: name,
          age: age,
          phone: phone,
          date: selectedDate,
          branch_id: branch_id,
          service_id: service_id,
        }, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("appointmentSentSuccussfuly"));
          setTimeout(() => [
            window.location.reload()
          ], 1500);
        }
      } catch (err) {
        setLoader(false);
        console.error('Error fetching user data:', err);
      }
    }
  };

  return (
    <div dir={i18n.dir(i18n.language)}>
      <ToastContainer />
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('bookAppointment')}</h1>

      <div className={`${Styles.upload} my-5`}>
        {
          loader ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <>

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
            {t('age')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            <input
              value={age}
              onChange={handleChangeAge}
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholder={`${t('age')}`}
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
          <label htmlFor="inputGroupSelect02" className={Styles.lableOpt}>
            {t('lableOptPlace')}
          </label>
          <div className={Styles.selectWrapper}>
            <select className={Styles.select} value={branch_id} onChange={handleChangeBranch} id="inputGroupSelect02">
              <option className={Styles.opt} value={""}>{currentLanguage == "ar" ? "اختر ---" : "choose"}</option>
              {
                branches && (
                  branches.map(branch => (
                    <option className={Styles.opt} value={branch.id}>{currentLanguage == "ar" ? branch.address_ar : branch.address}</option>
                  ))
                )
              }
            </select>
          </div>
        </div>

        <div className={Styles.inputgroup}>
          <label htmlFor="inputGroupSelect03" className={Styles.theServe}>
            {t('lableOptServe')}
          </label>
          <div className={Styles.selectWrapper}>
            <select className={Styles.select} value={service_id} onChange={handleChangeService} id="inputGroupSelect03">
              <option className={Styles.opt} value={""}>{currentLanguage == "ar" ? "اختر ---" : "choose"}</option>
              {
                services && (
                  services.map(service => (
                    <option className={Styles.opt} value={service.id}>{currentLanguage == "ar" ? service.name_ar : service.name}</option>
                  ))
                )
              }
            </select>
          </div>
        </div>

        <button className={`${Styles.serveBtnNow}`} onClick={handleOnsubmit}>{t('serveBtnNow')}</button>
        </>
          )
        }
      </div>
    </div>
  );
};

export default Reserve;
