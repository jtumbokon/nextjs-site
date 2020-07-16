import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import InfiniteScroll from 'react-infinite-scroll-component';

const apiURL = process.env.NEXT_PUBLIC_UNSPLASH_API_URL;
const proxyURL = process.env.NEXT_PUBLIC_PROXY_URL;

const randomNumber = Math.floor(Math.random() * 50);

const imageGallery = props => {
  const data = props.data;
  const [images, setImages] = useState(data);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const perPage = 15;

  // getPhotos() when page changes
  useEffect(() => {
    getPhotos();
  }, [page]);

  const getPhotos = async () => {
    let unsplashFetch = query
      ? `${proxyURL}${apiURL}/search?query=${query}&per_page=${perPage}&page=${page}`
      : `${proxyURL}${apiURL}/photos?page=${page}&per_page=${perPage}`;

    try {
      const response = await fetch(unsplashFetch);
      let photosArray = await response.json();

      if (page === 1 && query) {
        setImages(photosArray.photos.results);
      }
      if (query) {
        setImages(images => [...images, ...photosArray.photos.results]);
      } else {
        setImages(images => [...images, ...photosArray]);
      }
    } catch (error) {
      return error;
    }
  };

  const searchPhotos = event => {
    event.preventDefault();
    setPage(1);
    getPhotos();
  };

  return (
    <>
      <Head>
        <title>Image Gallery</title>
      </Head>
      <ImageGalleryStyle darkTheme={props.darkTheme}>
        <div className='app'>
          <h1>Unsplash Image Gallery!</h1>

          <form onSubmit={searchPhotos}>
            <input
              type='text'
              placeholder='Search Unsplash...'
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <button>Search</button>
          </form>

          <InfiniteScroll
            dataLength={images.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
            loader={<h1 style={{ padding: '3rem' }}>Loading...</h1>}
            className='infinite-scroll-overflow'>
            <div className='image-grid'>
              {images.map((image, index) => (
                <a
                  href={image.links.html}
                  className='image'
                  key={index}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={image.urls.small} alt={image.alt_description} />
                </a>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </ImageGalleryStyle>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      `${apiURL}/photos?page=${randomNumber}&per_page=10`
    );

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return error;
  }
};

export default imageGallery;

const ImageGalleryStyle = styled.div`
  .infinite-scroll-overflow {
    overflow: hidden !important;
  }

  .app {
    text-align: center;
    min-height: 100vh;
    background: ${props => (props.darkTheme ? 'rgba(0,0,0,.9)' : '#dcdcdc')};
    padding: 7rem;
    @media only screen and (max-width: 1050px) {
      padding: 7rem 3rem;
    }
  }

  .error {
    display: inline-block;
    text-align: center;
    margin: 30px;
    background: rgb(221, 85, 70);
    color: rgb(247, 232, 230);
    padding: 20px 30px;
    border-radius: 5px;
    text-decoration: none;
    transition: 0.3s ease all;
  }

  .error:hover {
    background: rgb(235, 95, 79);
    box-shadow: 3px 3px 0 rgb(141, 38, 26);
  }

  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #bbb;
  }

  form {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

  input[type='text'] {
    width: 70%;
    @media only screen and (max-width: 800px) {
      width: 60%;
    }
    @media only screen and (max-width: 700px) {
      width: 100%;
      margin: 0.5rem 0;
    }
    @media only screen and (max-width: 4500px) {
      padding: 0.5rem;
    }
    border-radius: 3rem;
    padding: 1rem;
    border: 1px solid #fff;
    margin-right: 1rem;
    font-size: 1.2rem;
    transition: 0.3s ease border-color;
  }

  input[type='text']:active,
  input[type='text']:focus {
    border-color: #999;
  }

  button {
    width: 20%;
    @media only screen and (max-width: 800px) {
      width: 25%;
    }
    @media only screen and (max-width: 700px) {
      width: 50%;
      font-size: 1rem;
    }
    @media only screen and (max-width: 450px) {
      padding: 0.5rem;
    }
    padding: 0.6rem;
    border-radius: 3rem;
    border: none;
    background: #fff;
    color: #000;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease all;
  }

  button:hover {
    background: #ff0000;
    color: #eee;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .image {
    height: 350px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 33.3333%;
    flex-basis: 350px;
    @media only screen and (max-width: 650px) {
      height: 200px;
      flex-basis: 200px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 3px;
    margin: 0.5rem;
    border-radius: 3px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) transform;
  }

  .image:hover {
    transform: translateY(-2px);
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
