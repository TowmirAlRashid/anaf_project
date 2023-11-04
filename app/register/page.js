"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";

const Register = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    fiverrLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(99, 178, 116, 0.16)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            lg: "40%",
            md: "60%",
            sm: "80%",
            xs: "90%",
          },
          maxWidth: {
            lg: "650px",
            md: "600px",
            xs: "95%",
          },
          backgroundColor: "white",
          borderRadius: "5px",
          p: "32px 24px 24px 24px",
          m: "0 1.2rem",
        }}
      >
        {/* website logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "1.5rem",
          }}
        >
          <Image
            src="/anaf-logo.png"
            alt="website logo"
            width={160}
            height={100}
          />
        </Box>

        {/* the form */}
        <Box
          sx={{ width: "100%", height: "100%" }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#0A4227",
              mb: "0.4rem",
            }}
          >
            Register
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "400",
              color: "#0A4227",
              mb: "2rem",
            }}
          >
            Sign Up to create your account
          </Typography>

          <CustomInput
            inputType="text"
            placeholderText="First Name"
            setInputData={setInputData}
            stateProp="firstName"
          />
          <CustomInput
            inputType="text"
            placeholderText="Last Name"
            setInputData={setInputData}
            stateProp="lastName"
          />
          <CustomInput
            inputType="text"
            placeholderText="Email"
            setInputData={setInputData}
            stateProp="email"
          />
          <CustomInput
            inputType="password"
            placeholderText="Password"
            setInputData={setInputData}
            stateProp="password"
          />
          <CustomInput
            inputType="text"
            placeholderText="Fiverr Website"
            setInputData={setInputData}
            stateProp="fiverrLink"
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "100%",
              height: "2.6rem",
              backgroundColor: "#0A4227",
              "&:hover": {
                backgroundColor: "#0A4227",
              },
            }}
          >
            submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
