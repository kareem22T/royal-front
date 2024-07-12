  import React, { useContext, useState } from 'react';
  import Styles from './Login.module.css'
  import { useTranslation } from 'react-i18next';
  import { Link , useLocation, useNavigate} from 'react-router-dom';
  import logo from '../../imgs/Royal-logo.png'
  import axios from 'axios';
  import { AppContext } from '../../Context/userContext';
  import { setCredentials } from '../../features/auth/authSlice';
  import { useDispatch } from 'react-redux';
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


const Forget = () => {

  let navigate = useNavigate();

  let location = useLocation();
  const dispatch = useDispatch();

  const [step , setStep] = useState(1)
  const [loading , setLoading] = useState(true)
  const [email , setEmail] = useState("")
  const [code , setCode] = useState("")
  const [password , setPassword] = useState("")
  const [passwordConfirmation , setPasswordConfirmation] = useState("")

  async function getCode (e){
    e.preventDefault()
    setLoading(false) 
    if (!email) {
      showErrorMessage(t('pleaseEnterEmail'))
    } else {

      axios.post(`https://royal-lab.webbing-agency.com/api/user/ask-for-forgot-password-email-code?email=${email}`) 
      .then(  (res) =>{
        console.log(res);
        if (res.data.status == true) {
          showSuccessMsg(t('weveSendYOu'));
          setStep(2) // Set the error message state based on API response
       } else {
        showErrorMessage("حدث خطاء");
       }
   
      }).catch( (err)=> {
   
        showErrorMessage("حدث خطاء");
        setLoading(true)
       
      } )
    }


    
  }
  async function setPass (e){
    e.preventDefault()
    setLoading(false) 
    if (!code) {
      showErrorMessage(t('enterCode'))
    } else if (!email) {
      showErrorMessage(t('pleaseEnterEmail'))
    } else if (!password) {
      showErrorMessage(t('errorPasswordRequired'))
    }else if (password !== passwordConfirmation) {
      showErrorMessage(t('errorPasswordMismatch'))
    } else {

      axios.post(`https://royal-lab.webbing-agency.com/api/user/forgot-password`, {
        email: email,
        code: code,
        password: password,
        password_confirmation: passwordConfirmation
      }) 
      .then(  (res) =>{
        console.log(res);
        if (res.data.status == true) {
          showSuccessMsg(t('weveSendYOu'));
          setTimeout(() => {
            navigate("/login")
          }, 1000);
        } else { 
          showErrorMessage("حدث خطاء");
        }
   
      }).catch( (err)=> {
   
       showErrorMessage("حدث خطاء");
       setLoading(true)
       
      } )
    }


    
  }


  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.dir(i18n.language)}>
      <ToastContainer />
      {
        step == 1 && (
        <div className="row">
          <div className="col-md-8">
          <div className={`${Styles.right} m-2 rounded rounded-2`}> 
              <div className={`d-flex container pt-4`}>

                  <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`} to={''}>{t('help')}</Link>
                  <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`}  to={'/contact'}>{t('Contact Us')}</Link>

              </div>
  
              <div className='d-flex flex-column h-75 justify-content-center mx-5 px-5'>

                <h1 className=''>{t('Forget')}</h1>
                <p className=' fw-bold  my-4' >{t('loginPara')}</p>
                
                <Link className={`${Styles.buttonlogin} `} to="/" >{t('tasaphah') }</Link>
                
              </div>


          </div>


          </div>

        

          <div className='col-md-4'>

              <div className='d-flex justify-content-end p-3'>
                <img className={`${Styles.loginImage}`} src={logo} alt="LoginLogo" />
              </div>

            <div className=' h-75 d-flex flex-column py-5'>
              <h4 className='mb-5 text-center' >{t('hello')}</h4>

            <form onSubmit={getCode}>


            <div className='d-flex flex-column px-5'>
                      <label htmlFor="Email" className='mb-3'>{t('EmailLogin')}</label>
                      <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                    name="email"
                    value={email} type="Email" to="Email" className={`${Styles.emailLogin} form-control py-3`} />
                  </div>

                  <Link to={"/login"} className={`${Styles.forget} mx-5`}>{t('Login')}؟</Link>

                <div className='d-flex flex-column align-items-center py-3'>
                  <button type='submit' className={` ${Styles.buttonLogin2} w-75 mb-3` } >
                    {t('getCode')}
                  </button>
                  <Link className={`${Styles.newAccount} mx-5`} to="/register">{t('createNewAccount')}</Link>
                </div>

            </form>

            </div>






          </div>

        </div>
        )
      }

      {
        step == 2 && (
        <div className="row">
          <div className="col-md-8">
          <div className={`${Styles.right} m-2 rounded rounded-2`}> 
              <div className={`d-flex container pt-4`}>

                  <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`} to={''}>{t('help')}</Link>
                  <Link className={`${Styles.loginLink} px-2 text-decoration-none text-black`}  to={'/contact'}>{t('Contact Us')}</Link>

              </div>
  
              <div className='d-flex flex-column h-75 justify-content-center mx-5 px-5'>

                <h1 className=''>{t('Forget')}</h1>
                <p className=' fw-bold  my-4' >{t('loginPara')}</p>
                
                <Link className={`${Styles.buttonlogin} `} to="/" >{t('tasaphah') }</Link>
                
              </div>


          </div>


          </div>

        

          <div className='col-md-4'>

              <div className='d-flex justify-content-end p-3'>
                <img className={`${Styles.loginImage}`} src={logo} alt="LoginLogo" />
              </div>

            <div className=' h-75 d-flex flex-column py-5'>
              <h4 className='mb-5 text-center' >{t('hello')}</h4>

            <form onSubmit={setPass}>


            <div className='d-flex flex-column px-5'>
                      <label htmlFor="Email" className='mb-3'>{t('Code')}</label>
                      <input  
                    onChange={(e) => {setCode(e.target.value)}}
                    name="email"
                    value={code} type="Text"className={`${Styles.emailLogin} form-control py-3`} />
                  </div>
                  <div className='d-flex flex-column px-5 py-4'>
                    <label htmlFor="Email" className='mb-3'>{t('passwordNew')}</label>
                    <input  
                  onChange={(e) => {setPassword(e.target.value)}}
                  name="password"
                  value={password}
                  type="password"  to="password" className={`${Styles.emailLogin} form-control py-3`}
                />
                </div>
                  <div className='d-flex flex-column px-5 py-4'>
                    <label htmlFor="Email" className='mb-3'>{t('passwordNewConfir')}</label>
                    <input 
                  onChange={(e) => {setPasswordConfirmation(e.target.value)}}
                  name="password"
                  value={passwordConfirmation}
                  type="password"  to="password" className={`${Styles.emailLogin} form-control py-3`}
                />
                </div>


                  <Link to={"/login"} className={`${Styles.forget} mx-5`}>{t('Login')}؟</Link>

                <div className='d-flex flex-column align-items-center py-3'>
                  <button type='submit' onClick={setPass} className={` ${Styles.buttonLogin2} w-75 mb-3` } >
                    { t('set') }
                  </button>
                  <Link className={`${Styles.newAccount} mx-5`} to="/register">{t('createNewAccount')}</Link>
                </div>

            </form>

            </div>






          </div>

        </div>
        )
      }

    </div>
  );
};

export default Forget;
