
const JemcoLogo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 200 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Orange semi-circle at top */}
      <path
        d="M 20 80 A 80 80 0 0 1 180 80"
        stroke="#FF6B35"
        strokeWidth="8"
        fill="none"
      />
      
      {/* JEMCO text */}
      <text
        x="20"
        y="65"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#4F46E5"
      >
        JEMCO
      </text>
      
      {/* Orange line under JEMCO */}
      <rect
        x="20"
        y="75"
        width="120"
        height="4"
        fill="#FF6B35"
      />
      
      {/* Blue line under orange line */}
      <rect
        x="20"
        y="82"
        width="80"
        height="4"
        fill="#4F46E5"
      />
    </svg>
  );
};

export default JemcoLogo;
