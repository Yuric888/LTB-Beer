const ButtonPause = ({ click, width = 24, height = 24, color = "black" }) => {
  return (
    <svg
      onClick={click}
      width={width}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 14V0H12V14H8ZM0 14V0H4V14H0Z" fill={color} />
    </svg>
  );
};

export default ButtonPause;
