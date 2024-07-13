import React, { useEffect } from 'react';
import Styles from './Cart.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, setMsgs } from '../../features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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




const Cart = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === 'rtl';
  const currentLanguage = i18n.language;
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart.cart);  
  const cartSuccessMsg = useSelector((state) => state.cart.message);  
  const cartErrorMsg = useSelector((state) => state.cart.errorMsg);  

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  }

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
  

  return (
    <div dir={i18n.dir(i18n.language)}>
      <h1 className={`${Styles.main} ${isRTL ? Styles.rtl : Styles.ltr}`}>{t('shoppingCart')}</h1>

      <div className={`container ${Styles.first} mx-auto`}>
      <ToastContainer />

          <div className='row'>
              <div className='col-lg-4 col-md-5'>
                <img className='w-100' src="https://almokhtabar.com/wp-content/themes/hello-elementor/assets/images/cart-side-banner.jpg" alt="withUs" />
              </div>

              <div className={`${Styles.all} col-lg-8 col-md-7 d-flex align-items-start justify-content-center flex-direction-column`} style={{flexDirection: "column"}}>
                {
                  (cart && cart.products && cart.products.length > 0) ? (
                    cart.products.map(prod => (
                      <div className={Styles.product_wrapper}>
                        <div className={Styles.text}>
                          <h2 >
                            {currentLanguage == "ar" ? prod.product.name_ar : prod.product.name}</h2>
                          <p className='d-flex gap-2 align-items-center'>{prod.product.price} {currentLanguage == 'ar' ? "ريال سعودي" : "SAR"}
                            <svg onClick={() => handleRemoveProduct(prod.product.id)} style={{color: "#4e4e4e", cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4e4e4e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="currentColor" />
                              <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="currentColor" />
                            </svg>
                          </p>
                        </div>
                        <div className={Styles.desc}>
                          <p>{currentLanguage == "ar" ? prod.product.description_ar : prod.product.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={Styles.product_wrapper}>
                    <div className={Styles.text}>
                      <h2 className='text-center w-100'>{currentLanguage == "ar" ? "لاتوجد خدمات مضافة" : "No added services"}</h2>
                    </div>
                    </div>
                  )
                }
                <div className="d-flex justify-content-between w-100">
                <Link to={'/service'} className={Styles.addBtn}>{t('addMoreBaqat')}</Link>
                <p className={`${Styles.cartPara} d-flex align-items-center justify-content-center py-2 px-2`}>{t('theAll') + cart.sub_total + " " } {currentLanguage == 'ar' ? "ريال سعودي" : "SAR"}</p>
                </div>

                <Link to="/checkout" className={` ${Styles.payBtn}`} style={{minWidth: 180, display: "block", textDecoration: "none", textAlign: 'center' }}>{t('payBtn')}</Link>



              </div>



          </div>

      </div>


      

    </div>
  );
};

export default Cart;
