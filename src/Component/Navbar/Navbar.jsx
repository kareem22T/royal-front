import React, { useContext, useEffect, useState } from 'react';
import Styles from './Navbar.module.css'
import { useTranslation } from 'react-i18next';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link , useLocation, useNavigate} from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import useAuth from '../../hooks/useAuth';
import { clearCredentials } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../imgs/Royal-logo.png'
import profile from '../../imgs/profile.png'
import { getSettings } from '../../features/settingsSlice';
const Navbar = () => {

  const navigate = useNavigate(); // Ensure useNavigate is called
  const dispatch = useDispatch();
  const { isAuthentication } = useAuth();

  const [showPopUp, setShowPopUp] = useState(false)
  const dropdownToggleStyle = {
    textAlign : 'start',
    margin : '15px',
    backgroundColor: 'transparent',
    width : '100%' , 
    color: 'black', 
    border : 'none',
    
    // Add any other styles as needed
  };

  const DropdownItem = {
    // padding : '0px',
    
    // margin : ' 0px'
  }
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  const isENng = i18n.language === 'en';

  const cart = useSelector((state) => state.cart.cart);  

  // const doSomething = () => {
  // }
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const logOut = () => {
    dispatch(clearCredentials());
    navigate('/login');
  };

  
  useEffect(() => {
      dispatch(getSettings());
  }, [dispatch]);

  return (
    
    <BootstrapNavbar expand="lg" className={i18n.language === 'ar' ? 'text-right' : 'text-left' } style={{width: "100%", padding: "12px 24px"}}>

      <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars"></i>
                      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    {!isAuthentication ? (
            <div className={`${Styles.buttonsContainer}`}>
              <Link className={`${Styles.button2}`} to="/register">
                {t('Create Account')}
              </Link>
              <Link className={`${Styles.button1}`} to="/login">
                {t('Login')}
              </Link>
            </div>
          ) : (
            <div className={`${Styles.buttonsContainer}`} style={{width: "max-content"}}>
                  <div className={Styles.profileWrapper}>
                      <img className='w-100' src={profile} alt="logoProfile" style={{cursor: 'pointer'}} onClick={() => setShowPopUp(!showPopUp)}/>
                      <Link class="fa-solid fa-cart-shopping d-flex justify-content-center align-items-center text-black text-decoration-none" to={'/cart'} style={{ fontSize: "20px", position: 'relative'}} >
                        {
                          (cart && cart.products && cart.products.length > 0) && (
                            <span className={Styles.cartDot}>
                              {cart.products.length > 99 ? "+99" : cart.products.length}
                            </span>
                          )
                        }
                      </Link>
                      {
                        showPopUp && (
                        <div className={Styles.profilePopUp} onClick={() => setShowPopUp(!showPopUp)}>
                          <Link to={'/profile'}>
                            {t('Profile')}
                          </Link>
                          <Link to={'/my-orders'}>
                            {t('Orders')}
                          </Link>
                          <Link to={'/my-appointments'}>
                            {t('Appointments')}
                          </Link>
                          <Link to={'/HomeVisit'}>
                            {t('Visits')}
                          </Link>
                          <button onClick={logOut}>
                            {t('logOut')}
                          </button>
                        </div>
                        )
                      }
                  </div>
            </div>

          )} 
      
      
      
      <Nav className={`${Styles.linksContainer} mx-3 w-100 px-3 d-flex`}>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/">{t('Home')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/service">{t('servicesYPackages')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/about-us">{t('About')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/about">{t('AboutRoyal')}</Nav.Link>

      <Dropdown style={dropdownToggleStyle}
      position={isArabic ?  'left' : 'right'}
      title={<>{t('Services')} <i class="fa-sharp fa-solid fa-arrow-down pe-1"></i></>}
      className={isArabic ?  'left' : 'right'}
  >
    <Dropdown.Item >    
    {t('elafrad')} <i className={`px-2 fa-solid ${isArabic ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
    <Dropdown.Submenu  
      openOnHover = 'true'
      position={isArabic ?  'left' : 'right'}>
 <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/recipeMedical'}>{t('recipeMedical')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={"/medicalTests"}>{t('bloodAnalysis')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/homeVisit'}>{t('homeVisit')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={"/branches"}>{t('Branches')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to="/Insurances">{t('Insurances')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/doctor'}>{t('consultation')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={"/Vaccinations"}>{t('Vaccinations')}</Link>
        </Dropdown.Item>


        
      </Dropdown.Submenu>
    </Dropdown.Item>


    <Dropdown.Item>
      {t('companies')}<i className={`px-2 fa-solid ${isArabic ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
        <Dropdown.Submenu 
          openOnHover = 'true'
      
      position={isArabic ?  'left' : 'right'}>

<Dropdown.Item >
          <Link className="col-md-2 text-decoration-none text-black" to={'/foodAnalysis'}>{t('tahalilElgezaa')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/waterAnalysis'}>{t('waterAnalysis')}</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="col-md-2 text-decoration-none text-black" to={'/pharmaAnalysis'}>{t('pharmaAnalysis')}</Link>
        </Dropdown.Item>




       
      </Dropdown.Submenu>
    </Dropdown.Item>
  </Dropdown>

      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/results">{t('Results')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/reserve">{t('Reserve')}</Nav.Link>
      <Nav.Link className={`${Styles.navLink}  px-3 my-2`} as={Link} to="/apply-for-job">{t('ApplyJob')}</Nav.Link>

      <Nav.Link className={`${Styles.navLink} px-3 my-2`} onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
        {t('Switch Language')}

      </Nav.Link>

    </Nav> 
      </div>
      <div className='d-flex justify-content-center'> 
        <img className={`${Styles.imgLogo}`} src={logo} alt="logo" style={{maxWidth: "200px"}}/>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
