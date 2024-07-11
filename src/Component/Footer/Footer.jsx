import React from 'react';
import { useTranslation } from 'react-i18next';
import footer from '../../imgs/hans-reniers-lQGJCMY5qcM-unsplash.jpg'
import Styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className={Styles.footer}>
      <div className={Styles.layer}>
        <div className="col-md-3">
          <img 
            src={logo}
            alt="Logo"
            className={Styles.logo}
          />
        </div>
        <div className="container ">
          <div className={`row  ${isArabic ? Styles.alignRight : ''}`}>
            <div className="col-md-3">
              <p>{t('TradeAssurance')}</p>
              <ul>
                <li>{t('TradeAssuranceli1')}</li>
                <li>
                  <Link to={'/getMoney'} className='text-decoration-none text-dark'>
                    {t('TradeAssuranceli2')}
                  </Link>
                  </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>{t('knowus')}</p>
              <ul>
                <li>
                <Link to={'/service'} className='text-decoration-none text-dark'>

                  {t('servicesYPackages')}
                  </Link>

                  </li>
                <li>
                <Link to={'/about-us'} className='text-decoration-none text-dark'>

                  {t('About')}
                  </Link>

                  </li>
                <li>
                <Link to={'/about-royal'} className='text-decoration-none text-dark'>

                  {t('AboutRoyal')}
                  </Link>

                  </li>
                <li>
                <Link to={'/jopOffer'} className='text-decoration-none text-dark'>

                  {t('knowusl4')}
                  </Link>

                  </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p>{t('Getsupport')}</p>
              <ul>
                <li>
                <Link to={'/problem'} className='text-decoration-none text-dark'>
                {t('Getsupport5')}
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-center py-4'>
        <p>{t('rightssave')}</p>
        <p>{t('rightssave1')}</p>
        

        <p>Powered by <a className={Styles.webbing} href="http://webbing-agency.com/">webbing agency</a></p>
        </div>
        
      </div>
      

      
    </footer>

    
    
  );
};

export default Footer;
