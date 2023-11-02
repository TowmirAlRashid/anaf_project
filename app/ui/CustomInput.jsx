import { TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ inputType, placeholderText }) => {
  return (
    <TextField
      type={inputType}
      variant="outlined"
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-input": {
          p: "10px 14px",
          borderColor: "rgba(10, 66, 39, 0.60)",
          color: "rgba(10, 66, 39, 0.70)",
        },
        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgba(10, 66, 39, 0.60)",
          color: "rgba(10, 66, 39, 0.70)",
        },
      }}
      placeholder={placeholderText}
    />
  );
};

export default CustomInput;
