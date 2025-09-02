
const JemcoLogo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 200 80" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Orange semi-circle arc */}
      <path
        d="M 10 50 A 90 90 0 0 1 190 50"
        stroke="#FF6600"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* JEMCO text */}
      <text
        x="10"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="#4338CA"
        letterSpacing="1px"
      >
        JEMCO
      </text>
      
      {/* Orange line under JEMCO */}
      <rect
        x="10"
        y="52"
        width="130"
        height="5"
        fill="#FF6600"
        rx="2"
      />
      
      {/* Blue line under orange line */}
      <rect
        x="10"
        y="60"
        width="100"
        height="5"
        fill="#4338CA"
        rx="2"
      />
    </svg>
  );
};

export default JemcoLogo;
