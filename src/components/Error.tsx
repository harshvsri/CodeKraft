function Error() {
  return (
    <>
      <body>
        <div className="container__error">
          <div className="container__error--message">
            <h1>Error 404</h1>
            <p>Oops! The page you are looking for could not be found.</p>
            <a href="/" className="error-link">
              Go back to Home
            </a>
          </div>
        </div>
      </body>
    </>
  );
}

export default Error;
