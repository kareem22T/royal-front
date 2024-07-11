import React, { useEffect, useState } from 'react';
import Styles from './Order.module.css';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../API';
import { API } from '../../features/globals';
import { fetchAllOrders, getOrderDetails } from '../../features/orderSlice';
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




const Orders = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);  
  const totalPages = useSelector((state) => state.orders.totalPages);  
  const currentPage = useSelector((state) => state.orders.currentPage);  

  useEffect(() => {
    dispatch(fetchAllOrders({page: 1, per_page: 20}));
    console.log(orders);
  }, [dispatch])

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('Orders')}</h1>
      <ToastContainer />
      <div className={`container ${Styles.first} mx-auto`}>
        <div className={Styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>{t('recipientName')}</th>
                <th>{t('recipientPhone')}</th>
                <th>{t('recipientAddress')}</th>
                <th>{t('orderDate')}</th>
                <th>{t('orderStatus')}</th>
                <th>{t('theAll')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                (orders && orders.length > 0) && (
                  orders.map((order, index) => (
                    <tr>
                      <td>
                        #{order?.id}
                      </td>
                      <td>
                        {order?.recipient_name}
                      </td>
                      <td>
                        {order?.recipient_phone}
                      </td>
                      <td>
                        {order?.recipient_address}
                      </td>
                      <td>
                        {
                            new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { month: 'long'}) + " " + 
                            new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { day: 'numeric'}) + ", " +
                            new Date(order?.created_at).toLocaleDateString(currentLanguage == "ar" ? "ar-EG-u-nu-latn" : "en-US", { year: "numeric"})
                        }
                      </td>
                      <td style={{color: order?.status == 1 ? "#252525" : (order?.status == 2 ? t("confirmed") : order?.status == 3 ? "#099a3b" : order?.status == 0  ? "#da1313" : "gray"), fontWeight: 700}}>
                        {order?.status == 1 ? t('under_review') : (order?.status == 2 ? t("confirmed") : order?.status == 3 ? t('completed') : order?.status == 0  ? t("canceld") : t("undefiend"))}
                      </td>
                      <td>
                        {order?.sub_total}
                      </td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <Link className={Styles.payBtn}  style={{ textDecoration: "none", margin: 0, paddingTop: 4, paddingBottom: 4 }} to={"/order/" + order?.id}>
                          {t("orderDetails")}
                        </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )
              }
              {
                (!orders || orders.length == 0) && (
                  <tr>
                      <td colSpan={7}>{t("noOrders")}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>


      

    </div>
  );
};

export default Orders;
