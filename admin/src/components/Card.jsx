import React from "react";

const Card = ({ title, value, Icon, bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "28px",
          boxShadow: `0 0 15px 3px ${bgColor}80`,
        }}
      >
        <Icon />
      </div>
      <h3
        style={{
          margin: "0",
          fontWeight: "700",
          fontSize: "1.4rem",
          color: "#2D3748",
        }}
      >
        {value}
      </h3>
      <p
        style={{
          margin: "0",
          fontWeight: "600",
          fontSize: "1.1rem",
          color: "#4A5568",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Card;
