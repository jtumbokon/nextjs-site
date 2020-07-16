import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

export const HomeIndexStyle = styled.div`
  .content {
    background: ${props =>
      props.darkTheme ? 'rgba(0,0,0,0.0)' : 'rgba(255,255,255,0.6)'};
  }

  /*****************
 *****************
  PROJECTS STYLES
 *****************
 *****************/

  #projects {
    font-size: 1.5rem;
    position: relative;
    padding: 5rem;
  }

  #projects a,
  #projects a:visited {
    color: ${props => (props.darkTheme ? '#fafafa' : '#ff0000')};
  }

  /* Container */
  #projects .projects-container {
    width: 100%;
    display: flex;
  }

  .projects-wrapper {
    display: flex;
    @media only screen and (max-width: 1150px) {
      flex-direction: column;
    }
  }

  /* Single Project */
  #projects .project {
    margin: 1rem auto;
    width: 80%;
    padding: 2rem;
    display: flex;
    @media only screen and (max-width: 2250px) {
      flex-direction: column;
    }
    @media only screen and (max-width: 1150px) {
      width: 100%;
      padding: 0.5rem;
    }
    @media only screen and (max-width: 500px) {
      margin: 0.5rem auto;
    }
    @media only screen and (max-width: 500px) {
      align-items: center;
    }
  }

  /* Project Image */
  #projects .project .project-link {
    margin: auto;
    text-align: center;
    border: ${props => (props.darkTheme ? 'none' : '1px solid #fafafa')};
    transition: 300ms;

    @media only screen and (max-width: 2250px) {
      width: 90%;
    }
    @media only screen and (max-width: 1950px) {
      width: 85%;
    }
  }

  #projects .project .project-link:hover {
    box-shadow: 0 50px 15px -30px #25293450;
  }

  #projects .project .project-link:hover > img {
    filter: saturate(1);
    transform: scale(1);
  }

  #projects .project .project-image {
    width: 100%;
    padding: 0 1rem;
    transform: scale(0.95);
    filter: saturate(0);
    transition: all 300ms;
    @media only screen and (max-width: 1150px) {
      width: 90%;
    }
    @media only screen and (max-width: 450px) {
      display: none;
    }
  }

  /* Project Details */
  #projects .project .project-details {
    @media only screen and (max-width: 500px) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    @media only screen and (min-width: 1150px) {
      display: flex;
      flex-direction: column;
      flex: 0 auto;
    }
  }

  #projects .project-details .project-title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
    color: #ff0000;
    @media only screen and (max-width: 3840px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 3080px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 2500px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 640px) {
      font-size: 1rem;
    }
  }

  /* Icons */
  .fontAwesome-icons {
    margin: 0;
    margin-right: 0.4rem;
    font-weight: normal;
    font-size: 1.4rem;
    color: ${props => (props.darkTheme ? '#fafafa' : '#252934')};
    @media only screen and (max-width: 3840px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 3080px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 2500px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 1.1rem;
    }
    @media only screen and (max-width: 640px) {
      font-size: 1rem;
    }
  }

  .fontAwesomeBtns {
    margin-right: 1rem;
  }

  /* Text */
  #projects .project-details small {
    color: ${props => (props.darkTheme ? '#fafafa' : '#000')};
    font-style: italic;
    @media only screen and (max-width: 3840px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 2850px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 2500px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 1.1rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 0.9rem;
    }
    @media only screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
    @media only screen and (max-width: 450px) {
      font-size: 0.7rem;
    }
  }

  #projects .project-details p {
    color: ${props => (props.darkTheme ? '#fafafa' : '#000')};
    margin: 1rem 0;
    @media only screen and (max-width: 3840px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 3080px) {
      font-size: 1.8rem;
    }
    @media only screen and (max-width: 2850px) {
      font-size: 1.7rem;
    }
    @media only screen and (max-width: 2500px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1.1rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 640px) {
      font-size: 0.9rem;
    }
  }

  /* Buttons */
  #projects .project-details .buttons {
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }

  #projects .project-details .buttons a {
    display: flex;
    width: 49%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #ff0000;
    color: ${props => (props.darkTheme ? '#ff0000' : '#000')};
    background: ${props => (props.darkTheme ? '#252525' : '#fafafa')};
    font-size: 1.2rem;
    text-align: center;
    margin-right: 2rem;
    @media only screen and (max-width: 3840px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 3080px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 2450px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1.1rem;
    }
    @media only screen and (max-width: 640px) {
      font-size: 0.9rem;
    }
    @media only screen and (max-width: 500px) {
      margin: 0.5rem 0;
    }
    @media only screen and (max-width: 450px) {
      font-size: 0.8rem;
      margin: 0.5rem 0;
      text-align: center;
    }
  }

  #portfolio-projects {
    color: ${props => (props.darkTheme ? '#fff' : '#000')};
    text-align: center;
    @media only screen and (max-width: 3840px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 1600px) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 1100px) {
      font-size: 3rem;
    }
  }

  #projects .project-details .buttons a:hover {
    color: ${props => (props.darkTheme ? '#fff' : '#ff0000')};
  }

  .about-me {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding-bottom: 3rem;

    h1,
    small,
    p {
      color: ${props => (props.darkTheme ? '#fff' : '#000')};
      margin: 1rem 0;
      @media only screen and (max-width: 1100px) {
        margin: 0.5rem 0;
      }
    }
    h1 {
      @media only screen and (max-width: 3840px) {
        font-size: 3.5rem;
      }
      @media only screen and (max-width: 1600px) {
        font-size: 2.5rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 2rem;
      }
    }
    small {
      font-style: italic;
      @media only screen and (max-width: 3840px) {
        font-size: 1.5rem;
      }
      @media only screen and (max-width: 2250px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 1600px) {
        font-size: 1rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 0.9rem;
      }
      @media only screen and (max-width: 850px) {
        font-size: 0.8rem;
      }
    }
    p {
      @media only screen and (max-width: 3840px) {
        font-size: 2.5rem;
      }
      @media only screen and (max-width: 2250px) {
        font-size: 2rem;
      }
      @media only screen and (max-width: 1600px) {
        font-size: 1.5rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 850px) {
        font-size: 1rem;
      }
    }
  }
`;

export const HomeIndexBodyStyle = props => (
  <>
    <Global
      styles={css`
        body {
          ${props.darkTheme
            ? `background: url("/images/Stars.svg"), linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.8))`
            : `background-image: url("/images/Stars.svg")`};
        }
      `}
    />
  </>
);
