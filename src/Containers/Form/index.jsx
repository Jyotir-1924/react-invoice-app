import { keyframes } from "@mui/system";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import Navbar from "@/Components/Navbar";
import LabeledInput from "@/Components/LabeledInput";
import invoiceLogo from "@/images/start-invoice.png";

const CustomButton = styled(Button)(({ theme }) => ({
  width: "40%",
  padding: "0.25em 1em",
  whiteSpace: "nowrap",
  fontFamily: theme.typography.fontFamily.Manrope,
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#fff",
  borderRadius: "18px",
  background: "linear-gradient(to top,rgb(136, 0, 160) 0%,rgb(49, 0, 58) 100%)",
  transition: "transform 0.4s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const floatVariant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      opacity: { duration: 2, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: "easeInOut",
      },
    },
  },
};

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be 10 digits")
    .required("Please enter your mobile number"),
  company: yup.string().required("Please enter your company name"),
  address: yup.string().required("Please enter your address"),
});

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

function UserDetailsForm({ onSubmitHandler }) {
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (onSubmitHandler) onSubmitHandler(data);
  };

  return (
    <>
      <Navbar />
      <Stack
        mt={10}
        py={5}
        spacing={5}
        sx={{
          minHeight: "100vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(to right,rgb(236, 253, 255),rgb(255, 244, 235))",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                width: "40%",
                alignItems: "center",
              }}
            >
              <motion.div
                variants={floatVariant}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={invoiceLogo}
                  alt="Invoice Logo"
                  style={{
                    width: "80%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </Stack>

            {/* Styled Heading and Subheading */}
            <Stack spacing={2}>
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  color: "rgb(75, 0, 96)",
                  letterSpacing: "0.05em",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  fontFamily: theme.typography.fontFamily.Montserrat,
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    textShadow: "2px 3px 10px rgb(250, 178, 255)",
                    cursor: "pointer",
                  },
                }}
              >
                Ready to create
                <br />
                your{" "}
                <span
                  style={{
                    color: "rgb(120, 0, 153)",
                    textShadow: "1px 1px 4px rgba(0, 151, 232, 0.5)",
                  }}
                >
                  Invoice
                </span>{" "}
                ?
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#555",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    color: "#222",
                    cursor: "pointer",
                  },
                  fontFamily: theme.typography.fontFamily.Montserrat,
                }}
              >
                Simply fill in the basic details to get started.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "40%",
          }}
        >
          <Stack
            spacing={3}
            p={2}
            sx={{
              background: "transparent",
              borderRadius: "1rem",
              border: "1px solid #CBD5E1",
              alignItems: "center",
            }}
          >
            <LabeledInput control={control} name="name" label="Your Name" />
            <LabeledInput
              control={control}
              name="mobile"
              label="Mobile Number"
            />
            <LabeledInput
              control={control}
              name="company"
              label="Company Name"
            />
            <LabeledInput
              control={control}
              name="address"
              label="Address"
              isMultiline="true"
              rows={3}
            />

            <CustomButton
              onClick={handleSubmit(onSubmit)}
              sx={{ alignSelf: "center", marginTop: 2 }}
            >
              Continue
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default UserDetailsForm;
