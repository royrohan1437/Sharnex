import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Fab
        color="primary"
        size="medium"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="scroll to top"
        sx={{ boxShadow: "0 12px 24px rgba(127,34,241,.35)" }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </div>
  );
}
