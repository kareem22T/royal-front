import React, { useState } from 'react';
import Styles from './Register.module.css'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useFormik } from 'formik/dist';
import axios from 'axios';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import logo from '../../imgs/logo.png'

const Register = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();

  const [errMsg , setErrorMsg] = useState('')
  const [loading , setLoading] = useState(true)

  async function sendDataToApi (values){
    setLoading(false) 
   axios.post('https://royal-lab.webbing-agency.com/api/user/register',values) 
   .then(  (res) =>{
    console.log(res);
    if (res.data.status == true) {
      dispatch(setCredentials(res.data));

      navigate('/'); // Navigate to login page upon successful registration
    }
    setErrorMsg(res.data.message); // Set the error message state based on API response

   }).catch( (err)=> {

    setErrorMsg(err.data)
    setLoading(true)
    
   } )

    
  }
  const { t, i18n } = useTranslation();


  
  function validate(values) {
    let errors = {};

    if (!values.name) {
      errors.name = t('errorNameRequired');
    } else if (values.name.split(' ').length < 3) {
      errors.name = t('errorMessageNamemin');
    }

    if (!values.phone) {
      errors.phone = t('errorPhoneRequired');
    }

    if (!values.password) {
      errors.password = t('errorPasswordRequired');
    } 
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(values.password)) {
      errors.password = t('errorPasswordComplexity');
    }  
    
    if(values.password_confirmation !== values.password){
      errors.password_confirmation = t('errorPasswordMismatch')
    }

    return errors;
  }
  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      joined_with: '1',
      password: '',
      password_confirmation: ''
    },
    validate,
    onSubmit: (values) =>{
      sendDataToApi(values)
    }
    }
  )





  return (
    <div dir={i18n.dir(i18n.language)}>
      

      <div className="row">
        <div className="col-md-8">
        <div className={`${Styles.right} m-2 rounded rounded-2`}> 
            <div className={`d-flex container pt-4`}>

                <Link className={`${Styles.registerLink} px-2 text-decoration-none`} to={''}>{t('help')}</Link>
                <Link className={`${Styles.registerLink} px-2 text-decoration-none`}  to={'/contact'}>{t('Contact Us')}</Link>

             </div>
 
             <div className='d-flex flex-column h-75 justify-content-center mx-5 px-5'>

              <h1 className=''>{t('createNewAccount')}</h1>
              <p className=' fw-bold my-4' >{t('loginPara')}</p>

               <Link className={`${Styles.buttonRegister} `} to="/" >{t('tasaphah') }</Link>
              
             </div>


        </div>


        </div>

       

        <div className='col-md-4'>

            <div className='d-flex justify-content-end pt-3'>
              <img className={`${Styles.registerImage} mx-3`} src={logo} alt="LoginLogo" />
            </div>

           <div className=' h-75 d-flex flex-column py-2'>
            <h4 className='mb-3 mx-5' >{t('createAccount')}</h4>

            <form onSubmit={formik.handleSubmit}>
            {errMsg ? <div className="alert alert-danger w-75 m-auto my-3">{t('errorMsg')}</div>:''}

              <div className="d-flex flex-column px-5 mb-2">
                <label htmlFor="name" className="mb-2">
                  {t('name')}
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="name"
                  value={formik.values.name}
                  type="text"
                  className={`${Styles.inputRegister} form-control py-3 ${
                    formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="alert mt-2 p-2 alert-danger">{formik.errors.name}</div>
                )}
              </div>

              <div className="d-flex flex-column px-5 mb-2">
                <label htmlFor="phone" className="mb-2">
                  {t('phone')}
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="phone"
                  value={formik.values.phone}
                  type="tel"
                  className={`${Styles.inputRegister} form-control py-3 ${
                    formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''
                  }`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="alert mt-2 p-2 alert-danger">{formik.errors.phone}</div>
                )}
              </div>

              <div className="d-flex flex-column px-5 mb-2">
                <label htmlFor="email" className="mb-2">
                  {t('Emailregister')}
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  type="email"
                  className={`${Styles.inputRegister} form-control py-3`}
                />
              </div>

              <div className="d-flex flex-column px-5 pb-4 mb-2">
                <label htmlFor="password" className="mb-2">
                  {t('passwordRegister')}
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password"
                  value={formik.values.password}
                  type="password"
                  className={`${Styles.inputRegister} form-control py-3 ${
                    formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                  }`}
                />
                {formik.touched.password && formik.errors.password? (
                  <div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div>
                ):''}
              </div>

              <div className="d-flex flex-column px-5 pb-4 mb-2">
                <label htmlFor="password_confirmation" className="mb-2">
                  {t('rePassword')}
                </label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="password_confirmation"
                  value={formik.values.rePassword}
                  type="password"
                  className={`${Styles.inputRegister} form-control py-3 ${
                    formik.touched.password_confirmation && formik.errors.password_confirmation ? 'is-invalid' : ''
                  }`}
                />
                {formik.touched.password_confirmation && formik.errors.password_confirmation? (
                  <div className="alert mt-2 p-2 alert-danger">{formik.errors.password_confirmation}</div>
                ):''}
              </div>

              <p className={`${Styles.forget} mx-5`}>{t('forgetPassword')}</p>

              <div className="d-flex flex-column align-items-center py-3">
                <button type="submit" className={`${Styles.buttonLogin2} w-75 mb-3 border-0`}>
                  { loading ? t('createAccount') : t('loading') }
                </button>
              </div> 
            </form>
          


           </div>






        </div>

      </div>







    </div>
  );
};

export default Register;
