interface SuccessProps {
  successMessage: string;
}

const Success = ({ successMessage }: SuccessProps) => {
  return (
    <div className="alert alert-success mt-5 text-center" role="alert">
      {successMessage}
    </div>
  );
};

export default Success;
