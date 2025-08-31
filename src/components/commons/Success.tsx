interface SuccessProps {
  successMessage: string;
}

const Success = ({ successMessage }: SuccessProps) => {
  return (
    <div
      className="alert alert-success text-center"
      role="alert"
      style={{ fontSize: "14px" }}
    >
      {successMessage}
    </div>
  );
};

export default Success;
