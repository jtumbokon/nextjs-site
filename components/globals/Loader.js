import { rem } from 'polished';
function ShowSpinner() {
  return (
    <>
      <div className='loader' classID='loader'></div>

      <style jsx>{`
        /* Loader */
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: ${rem(-60)} 0 0 ${rem(-60)};
          border: ${rem(16)} solid #f3f3f3;
          border-top: ${rem(16)} solid #333;
          border-radius: 50%;
          width: ${rem(120)};
          height: ${rem(120)};
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default ShowSpinner;
