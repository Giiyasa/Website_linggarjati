import React from "react";
import { styled, keyframes } from "@mui/system";

// Keyframes untuk animations
const flyCycle = keyframes`
  100% { background-position: -900px 0; }
`;

const flyRightOne = keyframes`
  0% { transform: scale(0.3) translateX(-10vw); opacity: 1; }
  10% { transform: translateY(2vh) translateX(10vw) scale(0.4); opacity: 1; }
  20% { transform: translateY(0vh) translateX(30vw) scale(0.5); opacity: 1; }
  30% { transform: translateY(4vh) translateX(50vw) scale(0.6); opacity: 1; }
  40% { transform: translateY(2vh) translateX(70vw) scale(0.6); opacity: 0.8; }
  50% { transform: translateY(0vh) translateX(90vw) scale(0.6); opacity: 0.6; }
  60% { transform: translateY(0vh) translateX(110vw) scale(0.6); opacity: 0; }
  100% { transform: translateY(0vh) translateX(110vw) scale(0.6); opacity: 0; }
`;

// Styled components

const Bird = styled("div")(({ theme }) => ({
  backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg)`,
  backgroundSize: "auto 100%",
  width: "88px",
  height: "125px",
  willChange: "background-position",
  animationName: flyCycle,
  animationTimingFunction: "steps(10)",
  animationIterationCount: "infinite",
}));

const BirdContainer = styled("div")({
  position: "absolute",
  top: "20%",
  left: "-15%",
  transform: "scale(0) translateX(-10vw)",
  willChange: "transform, opacity",
  animationName: flyRightOne,
  animationTimingFunction: "linear",
  animationFillMode: "forwards",
  zIndex: 9999,
});

const BirdOne = styled(Bird)({
  animationDuration: "1s",
  animationDelay: "-0.5s",
});

const BirdTwo = styled(Bird)({
  animationDuration: "0.9s",
  animationDelay: "-0.75s",
});

const BirdThree = styled(Bird)({
  animationDuration: "1.25s",
  animationDelay: "-0.25s",
});

const BirdFour = styled(Bird)({
  animationDuration: "1.1s",
  animationDelay: "-0.5s",
});

const BirdContainerOne = styled(BirdContainer)({
  animationDuration: "15s",
  animationDelay: "0",
});

const BirdContainerTwo = styled(BirdContainer)({
  animationDuration: "15s",
  animationDelay: "1s",
});

const BirdContainerThree = styled(BirdContainer)({
  animationDuration: "14.6s",
  animationDelay: "1.3s",
});

const BirdContainerFour = styled(BirdContainer)({
  animationDuration: "15s",
  animationDelay: "1.4s",
});

const BirdAnimation = () => {
  return (
    <>
      <BirdContainerOne>
        <BirdOne />
      </BirdContainerOne>
      <BirdContainerTwo>
        <BirdTwo />
      </BirdContainerTwo>
      <BirdContainerThree>
        <BirdThree />
      </BirdContainerThree>
      <BirdContainerFour>
        <BirdFour />
      </BirdContainerFour>
    </>
  );
};

export default BirdAnimation;
