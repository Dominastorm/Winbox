const DelIcon = (props) => {
  return (
    <svg
      width="auto"
      height="2.12vh"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      value={props.value}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#109CF1" stroke-width="2" />
      <path d="M9 14.9996L15 8.99963" stroke="#109CF1" stroke-width="2" />
      <path d="M15 15L9 9" stroke="#109CF1" stroke-width="2" />
    </svg>
  );
};

export default DelIcon;
