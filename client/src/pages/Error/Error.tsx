import error from '../../assets/error.webp'

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <figure className="max-w-lg text-center">
          <img src={error} alt="Markly-Error" />
          <p className="text-sm text-error tracking-wide">
            Look like a bug has came to greet me! So, i will fix them early.
          </p>
        </figure>
        <a href="/" className="link text-success no-underline mt-5">
          Go to Home
        </a>
      </div>
    </>
  )
}

export default ErrorPage
