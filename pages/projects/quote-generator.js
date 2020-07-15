import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';
import Loader from 'components/globals/Loader';
import ContactInfo from 'components/globals/ContactInfo';
import {
  QuoteGeneratorBodyStyle,
  QuoteGeneratorStyle,
} from 'components/quoteGeneratorStyles';
const proxyURL = process.env.NEXT_PUBLIC_PROXY_URL;

const quoteGenerator = props => {
  const data = props.data;
  const [quoteGenerator, setQuoteGenerator] = useState(data);
  const [loading, setLoading] = useState(false);
  const { quoteText, quoteAuthor } = quoteGenerator;

  // For client-side rendering
  const newQuote = async () => {
    let response;
    try {
      setLoading(true);

      response = await fetch(
        `${proxyURL}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`
      );

      const data = await response.json();
      if (quoteText === data.quoteText) {
        newQuote();
        setLoading(true);
      } else {
        setQuoteGenerator(data);
        setLoading(false);
      }

      return response;
    } catch (error) {
      if (response.status !== 404) {
        newQuote();
      }
      if (response.status === 404) {
        {
          setQuoteGenerator({
            quoteText: '404 Error | Cannot resolve API connection',
            quoteAuthor: `Please contact ${ContactInfo().twitter}`,
          }),
            setLoading(false);
        }
      }
    }
  };

  // Share Quote on Twitter
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text='${quoteText}' - ${quoteAuthor}`;
    window.open(twitterUrl, '_blank');
  };

  // ------ Start Filter Quote ------ //
  let quote;

  if (quoteText && quoteText.length > 120) {
    quote = <p className='quote long-quote'>{quoteText}</p>;
  } else if (!quoteText) {
    quote = <p className='quote'>{`Start Generating a New Quote`}</p>;
  } else {
    quote = <p className='quote'>{quoteText}</p>;
  }
  let author;
  quoteAuthor === '' ? (author = 'Unknown') : (author = quoteAuthor);

  // ------ End Filter Quote ------ //
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <>
          <QuoteGeneratorBodyStyle darkTheme={props.darkTheme} />
          <QuoteGeneratorStyle darkTheme={props.darkTheme}>
            <div className='quote-container' classID='quote-container'>
              <div className='quote-text'>
                {quote}
                <span classID='quote'></span>
              </div>
              <div className='quote-author'>
                <span classID='author'>{author}</span>
              </div>

              <div className='button-container'>
                <button
                  className='twitter-button'
                  classID='twitter'
                  title='Tweet This!'
                  onClick={tweetQuote}>
                  <i className='fab fa-twitter'></i>
                </button>
                <button className='new-quote' onClick={newQuote}>
                  New Quote
                </button>
              </div>
            </div>
          </QuoteGeneratorStyle>
        </>
      )}
    </>
  );
};

// For Server-Side Rendering
export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`
    );
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default quoteGenerator;
