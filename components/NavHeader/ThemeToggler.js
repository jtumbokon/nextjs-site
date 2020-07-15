import styled from "@emotion/styled";

const ThemeToggler = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <ThemeTogglerStyle>
        <div className="toggle">
          {darkTheme ? (
            <div className="mode-info light-mode">
              <span className="primaryColorText">Dark Mode </span>
              <img
                src="/images/night_mode.svg"
                alt="Moon Icon"
                className="toggler-image"
              />
            </div>
          ) : (
            <div className="mode-info dark-mode">
              <span className="primaryColorText">Light Mode </span>
              <img
                src="/images/light_mode.svg"
                alt="Sun Icon"
                className="toggler-image"
              />
            </div>
          )}

          <span className="toggle-control ">
            <input
              className="dmcheck"
              type="checkbox"
              checked={darkTheme}
              onChange={toggleTheme}
              id="dmcheck"
            />
            <label htmlFor="dmcheck" id="roundToggle" />
          </span>
        </div>
      </ThemeTogglerStyle>
    </>
  );
};

export const ThemeTogglerStyle = styled.div`
  .toggle {
    display: flex;
  }
  .toggler-image {
    width: 1.875rem;
    @media only screen and (max-width: 3840px) {
      width: 3.5rem;
    }
    @media only screen and (max-width: 2560px) {
      width: 2.5rem;
    }
    @media only screen and (max-width: 1920px) {
      width: 2rem;
    }
    @media only screen and (max-width: 1280px) {
      width: 1.5rem;
    }
    @media only screen and (max-width: 854px) {
      width: 1.6875rem;
    }
    @media only screen and (max-width: 426px) {
      width: 1.3125rem;
    }
  }
  .toggle-control {
    position: relative;
    padding: 0 0.25rem;
    display: flex;
    align-items: center;
  }
  #dmcheck {
    background: white;
    margin-right: 1.5rem;
    @media only screen and (max-width: 1280px) {
      margin-right: 1rem;
    }
    @media only screen and (max-width: 854px) {
      margin-right: 1rem;
    }
  }
  input[type="checkbox"].dmcheck {
    width: 3.75rem;
    height: 2.125rem;
    border-radius: 2rem;
    @media only screen and (max-width: 3840px) {
      width: 4.7rem;
      height: 2.9rem;
    }
    @media only screen and (max-width: 2560px) {
      width: 4.5rem;
      height: 2.5rem;
    }
    @media only screen and (max-width: 1920px) {
      width: 3.5rem;
      height: 2.1875rem;
    }
    @media only screen and (max-width: 1280px) {
      width: 3.375rem;
      height: 2.2625rem;
    }
    @media only screen and (max-width: 854px) {
      width: 2.2rem;
      height: 1.4125rem;
    }
    @media only screen and (max-width: 426px) {
      width: 1.625rem;
      height: 0.9875rem;
    }
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    vertical-align: 0.125rem;
    outline: none;
    &:checked + label {
      left: 2.125rem;
      @media only screen and (max-width: 3840px) {
        left: 2.3rem;
      }
      @media only screen and (max-width: 2560px) {
        left: 2.4rem;
      }
      @media only screen and (max-width: 1920px) {
        left: 1.7rem;
      }
      @media only screen and (max-width: 1280px) {
        left: 1.7625rem;
      }
      @media only screen and (max-width: 854px) {
        left: 1.325rem;
      }
      @media only screen and (max-width: 426px) {
        left: 1.1rem;
      }
    }
    & + label {
      display: inline-block;
      width: 1.625rem;
      height: 1.625rem;
      left: 0.5rem;
      @media only screen and (max-width: 3840px) {
        width: 2.4rem;
        height: 2.4rem;
      }
      @media only screen and (max-width: 2560px) {
        width: 2.1rem;
        height: 2.1rem;
      }
      @media only screen and (max-width: 1920px) {
        width: 1.9375rem;
        height: 1.9375rem;
      }
      @media only screen and (max-width: 1280px) {
        width: 1.6125rem;
        height: 1.6125rem;
      }
      @media only screen and (max-width: 854px) {
        width: 0.9625rem;
        height: 0.9625rem;
      }
      @media only screen and (max-width: 426px) {
        width: 0.6375rem;
        height: 0.6375rem;
      }
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
      position: absolute;
      opacity: 0.9;
    }
  }
  .mode-info {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    color: #fff;
    span {
      margin-right: 0.625rem;
      @media only screen and (max-width: 3840px) {
        font-size: 1.875rem;
      }
      @media only screen and (max-width: 2560px) {
        font-size: 1.375rem;
      }
      @media only screen and (max-width: 1920px) {
        font-size: 1.075rem;
      }
      @media only screen and (max-width: 1280px) {
        font-size: 0.975rem;
      }
      @media only screen and (max-width: 854px) {
        font-size: 0.7rem;
      }
      @media only screen and (max-width: 426px) {
        font-size: 0rem;
      }
    }
  }
`;

export default ThemeToggler;
