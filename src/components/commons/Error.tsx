interface ErrorProps {
  errorMessage: string;
}

const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div className="alert alert-danger mt-5 text-center" role="alert">
      {errorMessage}
    </div>
  );
};

export default Error;
