import React, { useEffect, useState } from 'react';
import Styles from './Checkout.module.css';
import { useTranslation } from 'react-i18next';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, setMsgs } from '../../features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
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




const Checkout = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  
  const cart = useSelector((state) => state.cart.cart);  
  const cartSuccessMsg = useSelector((state) => state.cart.message);  
  const authName = useSelector((state) => state.auth.name);  
  const authPhone = useSelector((state) => state.auth.phone);  
  const cartErrorMsg = useSelector((state) => state.cart.errorMsg);  

  const [name, setName] = useState(authName);
  const [phone, setPhone] = useState(authPhone);
  const [address, setAddress] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleCHangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    if (cartSuccessMsg) {
      showSuccessMsg(cartSuccessMsg)
      dispatch(setMsgs())
    }
    if (cartErrorMsg) {
      showErrorMessage(cartErrorMsg)
      dispatch(setMsgs())
    }
  }, [cartErrorMsg, cartSuccessMsg]);
  
  useEffect(() => {
    if (!cart || !cart.products || !cart.products.length) {
      window.location.href = ("/service")
    }

  }, [])

  const handleOnsubmit = async () => {
    setLoader(true);
    if (!name) {
      showErrorMessage(t("pleaseEnterName"));
      setLoader(false);
    } else if (!address) {
      showErrorMessage(t("pleaseEnterAddress"));
      setLoader(false);
    } else if (!phone) {
      showErrorMessage(t("pleaseEnterPhone"));
      setLoader(false);
    } else {
      try {
        const res = await api.post(API + "/api/orders/place", {
          recipient_name: name,
          recipient_address: address,
          recipient_phone: phone,
        }, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
        setLoader(false);
        if (res.data.status === true) {
          showSuccessMsg(t("orderSuccess"));
          setTimeout(() => [
            window.location.href = ("/order/" + res.data.data[0].id)
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
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('checkout')}</h1>

      <div className={`container ${Styles.first} mx-auto`}>
      <ToastContainer />

          <div className='row'>
              <div className='col-lg-4 col-md-5' style={{padding: 12, borderRadius: 8, background: "rgba(223, 223, 223, 0.22)"}}>
                <h2 className='mb-4'>{t("services") }: </h2>
              {
                  (cart && cart.products && cart.products.length > 0) && (
                    cart.products.map(prod => (
                      <div className={Styles.product_wrapper}>
                        <div className={Styles.text} style={{margin: 0}}>
                          <h4 >
                            {currentLanguage == "ar" ? prod.product.name_ar : prod.product.name}</h4>
                          <p className='d-flex gap-2 align-items-center'>{prod.product.price} {currentLanguage == 'ar' ? "جنيه مصري" : "EGP"}
                          </p>
                        </div>
                      </div>
                    ))
                  ) 
                }
              </div>

              <div className={`${Styles.all} col-lg-8 col-md-7 d-flex align-items-start justify-content-center flex-direction-column`} style={{flexDirection: "column"}}>
                {
                  loader ? (
                    <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>    
                  ) : 
                  (
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
                        {t('address')}
                      </label>
                      <div className={Styles.personalInfoWrapper}>
                        <input
                          value={address}
                          onChange={handleCHangeAddress}
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
                    <div className="d-flex justify-content-between w-100">
                    <Link to={'/service'} className={Styles.addBtn}>{t('addMoreBaqat')}</Link>
                    <p className={`${Styles.cartPara} d-flex align-items-center justify-content-center py-2 px-2`}>{t('theAll') + cart.sub_total + " " } {currentLanguage == 'ar' ? "جنيه مصري" : "EGP"}</p>
                    </div>
    
                    <button className={` ${Styles.payBtn}`} style={{minWidth: 180}} onClick={handleOnsubmit}>{t('finish')}</button>
                    </>

                  )    
                }


              </div>



          </div>

      </div>


      

    </div>
  );
};

export default Checkout;
