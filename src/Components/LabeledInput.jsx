import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import CustomTextField from "@/Components/CustomTextField";

function LabeledInput({ control, name, label, isMultiline = false, rows = 1 }) {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Stack
        pl={1}
        sx={{
          width: "30%",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography fontWeight={600} fontSize="1rem">
          {label}
        </Typography>
      </Stack>
      <Stack sx={{ width: "80%" }}>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomTextField
              {...field}
              error={!!error}
              helperText={error?.message}
              multiline={isMultiline}
              rows={rows}
            />
          )}
        />
      </Stack>
    </Stack>
  );
}

export default LabeledInput;
