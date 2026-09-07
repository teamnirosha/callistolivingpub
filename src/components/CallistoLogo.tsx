import React from "react";
import logoImg from "@/assets/callisto_final_Logo.png";
import markImg from "@/assets/favicon.png";

interface CallistoLogoProps {
  className?: string;
  variant?: "light" | "dark" | "full-color";
  markOnly?: boolean;
  height?: number | string;
}

export const CallistoLogo: React.FC<CallistoLogoProps> = ({
  className = "",
  variant = "full-color",
  markOnly = false,
  height = 42,
}) => {
  if (markOnly) {
    return (
      <img
        src={markImg}
        alt="Callisto Living Mark"
        style={{ height, width: "auto" }}
        className={`inline-block shrink-0 object-contain ${className}`}
      />
    );
  }

  return (
    <div
      className={`inline-flex items-center select-none leading-none shrink-0 ${className}`}
      style={{ height }}
    >
      <img
        src={logoImg}
        alt="Callisto Living"
        style={{ height: "100%", width: "auto" }}
        className={`object-contain transition-all duration-300 ${
          variant === "light" ? "brightness-0 invert drop-shadow-xs" : ""
        }`}
      />
    </div>
  );
};
