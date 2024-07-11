import React, { useEffect, useState } from 'react';
import Styles from './Order.module.css';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
import { getOrderDetails } from '../../features/orderSlice';
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




const Order = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const {id} = useParams()
  const order = useSelector((state) => state.orders.selectedOrder);  

  useEffect(() => {
    dispatch(getOrderDetails(id));
    console.log(order);
  }, [dispatch])

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('orderDetails')} #{id.padStart(4, '0')}</h1>
      <div className={Styles.details_wrapper}>
        <div className={Styles.inputGroup}>
          <label htmlFor="name">{t('recipientName')}</label>
          <input type="text" name="name" id="name" disabled value={order?.recipient_name || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="phone">{t('recipientPhone')}</label>
          <input type="text" name="phone" id="phone" disabled value={order?.recipient_phone || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="address">{t('recipientAddress')}</label>
          <input type="text" name="address" id="address" disabled value={order?.recipient_address || "N/A"}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="orderDate">{t('orderDate')}</label>
          <input type="text" name="orderDate" id="orderDate" disabled 
          value={
              new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { month: 'long'}) + " " + 
              new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { day: 'numeric'}) + ", " +
              new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { year: "numeric"})
          }
      />
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="orderStatus">{t('orderStatus')}</label>
          <input type="text" name="orderStatus" style={{color: order?.status == 1 ? "#252525" : (order?.status == 2 ? t("confirmed") : order?.status == 3 ? "#099a3b" : order?.status == 0  ? "#da1313" : "gray"), fontWeight: 700}} id="orderStatus" disabled value={order?.status == 1 ? t('under_review') : (order?.status == 2 ? t("confirmed") : order?.status == 3 ? t('completed') : order?.status == 0  ? t("canceld") : t("undefiend"))}/>
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor="totla">{t('theAll')}</label>
          <input type="text" name="total" id="total" disabled value={order?.sub_total + " " + (currentLanguage == 'ar' ? "جنيه مصري" : "EGP")}/>
        </div>
      </div>
      <ToastContainer />
      <div className={`container ${Styles.first} mx-auto`}>
        <table>
          <thead>
            <tr>
              <th>
                {t('service')}
              </th>
              <th>
                {t('servicePrice')}
              </th>
            </tr>
          </thead>
          <tbody>
            {
              (order && order.products && order.products.length > 0) && (
                order.products.map((product, index) => (
                  <tr>
                    <td>{currentLanguage == 'ar' ? product.product.name_ar : product.product.name}</td>
                    <td>{product.product.price + ' '} {currentLanguage == 'ar' ? "جنيه مصري" : "EGP"}</td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>


      

    </div>
  );
};

export default Order;
