import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const BubbleStyle = styled(Typography)(({}) => ({
  fontFamily: "'Bubblegum Sans', sans-serif",
  color: "#e0dfdc",
  fontSize: "4rem",
  //   backgroundColor: "#333",
  textAlign: "center",
  letterSpacing: "0.5rem",
  borderRadius: "20px", // Membuat sudut melengkung seperti bubble
  padding: "10px 20px", // Menambah padding untuk memberi ruang di dalam bubble
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Menambahkan bayangan untuk efek 3D
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Bayangan pada teks untuk efek bubble
}));
export default BubbleStyle;
