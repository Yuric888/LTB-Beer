const ButtonPlay = ({ click, width = 24, height = 24, color = "black" }) => {
  return (
    <svg
      onClick={click}
      width={width}
      height={height}
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 14V0L11 7L0 14ZM2 10.35L7.25 7L2 3.65V10.35Z" fill={color} />
    </svg>
  );
};

export default ButtonPlay;
