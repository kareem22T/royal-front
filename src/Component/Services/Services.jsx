import React, { useEffect, useState } from 'react';
import Styles from './Services.module.css'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackages, fetchServices, searchServices } from '../../features/servicesSlice';
import { API } from '../../features/globals';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { addProductToCart, setMsgs } from '../../features/cartSlice';
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



const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);  
  const cart = useSelector((state) => state.cart.cart);  
  const cartSuccessMsg = useSelector((state) => state.cart.message);  
  const cartErrorMsg = useSelector((state) => state.cart.errorMsg);  
  const totalPages = useSelector((state) => state.services.totalPages);  
  const currentPage = useSelector((state) => state.services.currentPage);  
  const search_results = useSelector((state) => state.services.search_results);  
  const search_totalPages = useSelector((state) => state.services.search_totalPages);  
  const search_currentPage = useSelector((state) => state.services.search_currentPage);  
  const packages = useSelector((state) => state.services.packages);  
  const packages_totalPages = useSelector((state) => state.services.packages_totalPages);  
  const packages_currentPage = useSelector((state) => state.services.packages_currentPage);  
  const [search_text, setSearch_text] = useState("")

  const handleChange = (value) => {
    dispatch(fetchServices({page: value, per_page: 20}));
  };

  const handleChangePackages = (value) => {
    dispatch(fetchPackages({packages_page: value, packages_per_page: 20}));
  };

  const handleChangeSearch = (value) => {
    dispatch(searchServices({ query: search_text, page: value, per_page: 20}));
  };
  const handleChangeSearchText = (e) => {
    setSearch_text(e.target.value)
    handleChangeSearch(1)
  };

  const handleAddProductToCart = (id) => {
    dispatch(addProductToCart(id));
  }

  useEffect(() => {
    dispatch(fetchServices({page: 1, per_page: 20}));
    dispatch(fetchPackages({packages_page: 1, packages_per_page: 20}));
    console.log(cart);
  }, [dispatch]);
  

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
    <ToastContainer />
    <div className=''>
     <h1 className={`${Styles.main} mt-4`}>{t('tahalilAndBaqat')}</h1>

    </div>

    <div className='row mt-5 mx-5'>

        <div className="col-md-8">


          <input type="text" placeholder={t('ElbahsAnTahalih')} value={search_text} onChange={handleChangeSearchText} className='w-100 form-control py-3 rounded rounded-4 my-2' />

      </div>

      <div className="col-md-4">


        <Link to={"/recipeMedical"} className='w-100 form-control py-3 rounded rounded-4 my-2 d-flex justify-content-between align-items-center' style={{textDecoration: 'none'}}>
          {t('UploadWasfa')}
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 21.25V31.25C6.25 31.913 6.51339 32.5489 6.98223 33.0178C7.45107 33.4866 8.08696 33.75 8.75 33.75H31.25C31.913 33.75 32.5489 33.4866 33.0178 33.0178C33.4866 32.5489 33.75 31.913 33.75 31.25V21.25M20 25V4.375M27.5 11.25L20 3.75L12.5 11.25" stroke="#B39330" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>

      </div>

    </div>

    <h1 className={Styles.Baqat}>{t('Baqat')}</h1>

    <div className="row mx-5 mt-5 mb-3 ">
    {
          packages && packages.length > 0 && (
            packages.map(service => (
              <div className="col-lg-3 col-md-6 pb-5">
                  <div className={`${Styles.servicesCards}`}>
                  <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                    <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                    <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                    <p>{service.price + " " + t("EGP")}</p>


                    <button className={`${Styles.buttonCart} my-3`} onClick={() => handleAddProductToCart(service.id)}>{t('addToCar')}</button>

                  </div>

              </div>
            ))
          )
        }

    </div>
    <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
          {packages_totalPages  && packages_totalPages > 1 ? (
            <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
              <Pagination count={packages_totalPages} page={packages_currentPage} onChange={(e, value) => handleChangePackages(value)}  variant="outlined" color='primary' shape="rounded" />
            </Stack>
          ) : (
            <></>
          )}
      </div>


    <h1 className="mx-5">{t('tahalilhLists')}</h1>

      {
        !search_text && (
          <div className="pb-5">
            <div className="row mx-5 my-5 pb-5">
              {
                services && services.length > 0 && (
                  services.map(service => (
                    <div className="col-lg-3 col-md-6 pb-5">
                        <div className={`${Styles.servicesCards}`}>
                        <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                          <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                          <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                          <p>{service.price + " " + t("EGP")}</p>


                          <button className={`${Styles.buttonCart} my-3`} onClick={() => handleAddProductToCart(service.id)}>{t('addToCar')}</button>

                        </div>

                    </div>
                  ))
                )
              }

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

          </div>
        )
      }

      {
        search_text && (
          <div className="pb-5">
            <div className="row mx-5 my-5 pb-5">
              {
                search_results && search_results.length > 0 && (
                  search_results.map(service => (
                    <div className="col-lg-3 col-md-6 pb-5">
                        <div className={`${Styles.servicesCards}`}>
                        <img height={200} className={Styles.blooadPhoto} src={API + service.main_image} alt="" />

                          <p>{ currentLanguage == "ar" ? service.name_ar : service.name }</p>
                          <p>{currentLanguage == "ar" ? (service.description_ar.length > 60 ? service.description_ar.substring(0, 60) + "..." : service.description_ar) : (service.description.length > 60 ? service.description.substring(0, 60) + "..." : service.description)}</p>
                          <p>{service.price + " " + t("EGP")}</p>


                          <button className={`${Styles.buttonCart} my-3`} onClick={() => handleAddProductToCart(service.id)}>{t('addToCar')}</button>

                        </div>

                    </div>
                  ))
                )
              }

            </div>

            <div style={{margin: "auto", display: "block", marginBottom: 16, width: "max-content"}}>
                {search_totalPages  && search_totalPages > 1 ? (
                  <Stack spacing={2} dir="ltr" style={{width: "max-content"}}>
                    <Pagination count={search_totalPages} page={search_currentPage} onChange={(e, value) => handleChangeSearch(value)}  variant="outlined" color='primary' shape="rounded" />
                  </Stack>
                ) : (
                  <></>
                )}
            </div>

          </div>
        )
      }



    
    </div>
  );
};

export default Services;
