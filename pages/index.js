import Link from 'next/link';
import { HomeIndexStyle, HomeIndexBodyStyle } from 'components/homeIndexStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faSass,
  faCss3Alt,
  faJsSquare,
  faNode,
} from '@fortawesome/free-brands-svg-icons';

export default function Home(props) {
  const Project = props => {
    const tech = {
      sass: faSass,
      css: faCss3Alt,
      js: faJsSquare,
      react: faReact,
      node: faNode,
    };

    const link = props.link || 'https://';
    const repo = props.repo || 'https://';

    return (
      <>
        <div className='project'>
          <Link href={link}>
            <a className='project-link' rel='noopener noreferrer'>
              <img
                className='project-image'
                src={props.img}
                alt={'Screenshot of ' + props.title}
              />
            </a>
          </Link>
          <div className='project-details'>
            <div className='project-title'>
              <p className='icons'>
                {props.tech.split(' ').map(t => (
                  <FontAwesomeIcon
                    icon={tech[t]}
                    key={t}
                    className='fontAwesome-icons'
                  />
                ))}
              </p>
              {props.title}
            </div>
            {props.children}
            <div className='buttons'>
              <a href={repo} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  color='red'
                  className='fontAwesomeBtns'
                />
                View source
              </a>

              <Link href={link}>
                <a rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    color='red'
                    className='fontAwesomeBtns'
                  />
                  Try it Live
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Head>
        <title>Jan Tumbokon</title>
      </Head>
      <HomeIndexBodyStyle darkTheme={props.darkTheme} />
      <HomeIndexStyle darkTheme={props.darkTheme}>
        <div className='content'>
          <section id='projects'>
            <h1 id='portfolio-projects'>Projects</h1>
            <div className='projects-container'>
              <div className='projects-wrapper'>
                <Project
                  title='Random Quote Generator'
                  img={'/images/Quote_Generator.jpg'}
                  tech='js css react'
                  link='/projects/quote-generator'
                  repo='https://github.com/jtumbokon/nextjs-site/blob/master/pages/projects/quote-generator.js'>
                  <small>
                    Built using React.js, CSS with Emotion, Axios for API
                    fetching, Next.js Routing and Server Side Rendering.
                  </small>
                  <p>
                    You can generate a random quote with a single mouse click
                    and share it directly to your Twitter feed.
                  </p>
                </Project>
                <Project
                  title='Infinite Image Gallery'
                  img={'/images/Image_Gallery.JPG'}
                  tech='js css react'
                  link='/projects/image-gallery'
                  repo='https://github.com/jtumbokon/nextjs-site/blob/master/pages/projects/image-gallery.js'>
                  <small>
                    Built using React with NextJS, CSS with Emotion, Axios for
                    fetching Unsplash API, Next.js Routing and Server Side
                    Rendering.
                  </small>
                  <p>
                    Load images on demand by simply scrolling down. You can also
                    choose to search for more specific photos to suit your
                    needs.
                  </p>
                </Project>
              </div>
            </div>
          </section>
          <div className='about-me' id='about'>
            <h1>About Me</h1>
            <small>
              I am passionate about using ReactJS, Native JavaScript, HTML5, and
              CSS3 with focus on user experiences.
            </small>
            <p>
              Software Engineer with strong collaboration skills - who loves to
              transform ideas into reality using code.
            </p>
          </div>
        </div>
      </HomeIndexStyle>
    </>
  );
}
