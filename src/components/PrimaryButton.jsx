import { Button } from "@mui/material";

export function PrimaryButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "12px",
        px: 2.8,
        py: 1.1,
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 10px 30px rgba(127,34,241,.32)",
        "&:hover": { boxShadow: "0 14px 32px rgba(127,34,241,.4)" },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, ...props }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: "12px",
        px: 2.8,
        py: 1.1,
        textTransform: "none",
        fontWeight: 600,
        borderWidth: "2px",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
