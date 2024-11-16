const Button = ({ label }: { label: string }) => {
  return (
    <button className="bg-peerHubOrange text-white rounded-3xl px-8 py-2">
      {label}
    </button>
  );
};

export default Button;
