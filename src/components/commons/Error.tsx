interface ErrorProps {
  errorMessage: string;
}

const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div
      className="alert alert-danger text-center"
      role="alert"
      style={{ fontSize: "14px" }}
    >
      {errorMessage}
    </div>
  );
};

export default Error;
