import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { colors } from "../utils/constants";

const Button = ({
  label,
  background = "white",
  onClick,
  width = "100%",
  color = "black",
  showArrow = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <button
        style={{
          background: isHovered ? color : background,
          // width: width,
          color: isHovered ? background : color,
          transition: `background 0.5s ease, color 0.5s ease`,
          borderColor:background,
          border:`1px solid ${color === 'white' ? colors.mainColor : color}`,
          padding:'15px 40px',
          borderRadius:'8px',
          fontWeight:'900'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="custom-btn-component"
        onClick={onClick}
        {...props}
      >
        {label} 
        {showArrow && <FaArrowRight style={{ marginLeft: "20px" }} />}
      </button>
    </div>
  );
};

export default Button;
