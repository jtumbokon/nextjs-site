import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <footer className='footer'>
          <div className='footer_container'>
            <div className='logo'>
              <p>LET'S CONNECT</p>
            </div>
            <div className='social_media'>
              <a
                href='https://twitter.com/JanTumbokon'
                target='_blank'
                rel='noopener noreferrer'
                title="Link to Jan's Twitter profile">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                id='profile-link'
                href='https://github.com/jtumbokon/'
                target='_blank'
                rel='noopener noreferrer'
                title="Link to Jan's GitHub Profile">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href='https://www.linkedin.com/in/jan-tumbokon-08a7691a8/'
                target='_blank'
                rel='noopener noreferrer'
                title="Link to Jan's LinkedIn Profile">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <p className='logo'>© {new Date().getUTCFullYear()} Jan Tumbokon</p>
          </div>
        </footer>
      </FooterStyle>
    </>
  );
};

export default Footer;

const FooterStyle = styled.div`
  .footer {
    padding: 1rem 0;
    background: #252525;
    color: #fff;
    font-weight: 600;
  }
  .footer_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .social_media {
    @media only screen and (max-width: 900px) {
      margin: 1rem 0;
    }
    @media only screen and (max-width: 426px) {
      margin: 1rem 0;
    }
  }
  .logo,
  .social_media a {
    @media only screen and (max-width: 3840px) {
      font-size: 2.3rem;
    }
    @media only screen and (max-width: 2560px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1rem;
    }
  }

  .social_media a {
    transition: 0.5s;
    margin: 0 1rem;
    color: #ff0000;
  }

  .social_media a:hover,
  .social_media a:focus,
  .social_media a:visited:hover,
  .social_media a:visited {
    color: #ff0000;
  }
`;
