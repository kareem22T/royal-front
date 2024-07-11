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

const showErrorMessaddress = (msg) => {
  toast.error(msg, {
    position: 'top-right',
  });
};

const ReserveVisit = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.languaddress) === 'rtl';
  const [userData, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);
  const currentLanguaddress = i18n.languaddress;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await api.get('https://royal-lab.webbing-addressncy.com/api/user/get');
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
  const [address, setAddress] = useState('');
  const [branch_id, setBranchId] = useState('');
  const [service, setService] = useState('');
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
    setService(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOnsubmit = async () => {
    setLoader(true);
     if (!address) {
      showErrorMessaddress(t("pleaseEnterAddress"));
      setLoader(false);
    } else if (!phone) {
      showErrorMessaddress(t("pleaseEnterPhone"));
      setLoader(false);
    } else if (!selectedDate) {
      showErrorMessaddress(t("pleaseEnterDate"));
      setLoader(false);
    }  else if (!selectedDate) {
      showErrorMessaddress(t("pleaseSelectService"));
      setLoader(false);
    } else {
      try {
        const res = await api.post(API + "/api/visits/place", {
          address: address,
          phone: phone,
          date: selectedDate,
          service: service,
        }, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("appointmentSentSuccussfuly"));
          setTimeout(() => [
            window.location.href = "/HomeVisit"
          ], 1500);
        }
      } catch (err) {
        setLoader(false);
        console.error('Error fetching user data:', err);
      }
    }
  };

  return (
    <div dir={i18n.dir(i18n.languaddress)}>
      <ToastContainer />
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('bookVisit')}</h1>

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
            {t('address')}
          </label>
          <div className={Styles.personalInfoWrapper}>
            <input
              value={address}
              onChange={handleChangeAddress}
              className={`form-control ${isRTL ? Styles.alignRight : Styles.alignLeft}`}
              placeholder={`${t('address')}`}
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
          <label htmlFor="inputGroupSelect03" className={Styles.theServe}>
            {t('lableOptServe')}
          </label>
          <div className={Styles.selectWrapper}>
            <input className={Styles.select} value={service} onChange={handleChangeService} id="inputGroupSelect03" placeholder={t('service')}/>
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

export default ReserveVisit;
