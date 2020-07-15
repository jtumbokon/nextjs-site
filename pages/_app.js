import GlobalStyles from 'components/globals/GlobalStyles';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return [theme, toggleTheme];
};

function App({ Component, pageProps }) {
  const [theme, toggleTheme] = useDarkMode();
  const darkTheme = theme === 'dark';
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/png'
          href='https://s2.googleusercontent.com/s2/favicons?domain=www.jacinto.design'
        />
      </Head>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <NavAndFooterFlex>
          <div className='navbar'>
            <Navigation darkTheme={darkTheme} toggleTheme={toggleTheme} />
          </div>
          <div className='content'>
            <Component {...pageProps} darkTheme={darkTheme} />
          </div>
          <Footer />
        </NavAndFooterFlex>
      </CacheProvider>
    </>
  );
}

export default App;

const NavAndFooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .navbar {
    position: sticky;
    z-index: 999;
  }
  .content {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
  }
`;
