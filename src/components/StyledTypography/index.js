import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(({}) => ({
  fontFamily: "Century Gothic, CenturyGothic",
  color: "#e0dfdc",
  textShadow: `
    0 -1px 0 #F1F1F1, 
    0 1px 0 #E0E0E0, 
    0 2px 0 #D0D0D0, 
    0 3px 0 #C0C0C0, 
    0 4px 0 #B0B0B0, 
    0 5px 0 #A0A0A0, 
    0 6px 0 #909090, 
    0 7px 0 #808080, 
    0 8px 0 #707070, 
    0 9px 5px rgba(0, 0, 0, 0.9);
    // 0 9px 0 #606060, 
    // 0 10px 0 #505050, 
    // 0 11px 0 #404040, 
    // 0 12px 0 #303030, 
    // 0 13px 0 #202020, 
    // 0 14px 0 #101010, 
    // 0 15px 0 #000000, 
    `,
  fontSize: "4rem",
  backgroundColor: "333",
  textAlign: "center",
  letterSpacing: "0.5rem",
  zIndex: 10,
}));

export default StyledTypography;
