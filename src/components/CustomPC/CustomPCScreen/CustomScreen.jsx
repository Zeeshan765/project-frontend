import React from "react";
import "./CustomScreen.css";
import ProgressBar from "@ramonak/react-progress-bar";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import Processors from "./Processors";
import GPU from "./GPU";
import Motherboard from "./Motherboard";
import Ram from "./Ram";
import PSUScreen from "./PSUScreen";
import Cooling from "./Cooling";
import Casing from "./Casing";
import Storage from "./Storage";
import BuildCompleted from "./BuildCompleted";
import { useSelector } from "react-redux";
import {
  getpsucount,
  getgpuCount,
  getmoboCount,
  getproCount,
  getramCount,
  getcasingcount,
} from "../../../Redux/cartRedux";
import { Button } from "react-bootstrap";
import { Box, Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";

const steps = [
  "CPU",
  "GPU",
  "Motherboard",
  "RAM",
  "Storage",
  "PSU",
  "Casings",
  "Cooling",
];

const CustomScreen = (props) => {
  const [proc, setProc] = useState(true);
  const [gpu, setGpu] = useState(false);
  const [hdd, setHdd] = useState(false);
  const [mobo, setMobo] = useState(false);
  const [ram, setRam] = useState(false);
  const [psu, setPsu] = useState(false);
  const [cooling, setCooling] = useState(false);
  const [casing, setCasing] = useState(false);
  const [fin, setFin] = useState(false);
  const proCount = useSelector(getproCount);
  const gpuCount = useSelector(getgpuCount);
  const moboCount = useSelector(getmoboCount);
  const ramCount = useSelector(getramCount);
  const psuCount = useSelector(getpsucount);
  const casingCount = useSelector(getcasingcount);
  const [activeStep, setActiveStep] = React.useState(0);

  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "purple", fontSize: "2.2rem" },
      "& .MuiStepLabel-active": { color: "purple", fontSize: "2.2rem" },
      "& .MuiStepIcon-completed": { color: "purple", fontSize: "1.5rem" },
      "& .MuiStepLabel-completed": { color: "purple", fontSize: "1.5rem" },
      "& .Mui-disabled .MuiStepIcon-root": {
        color: "grey",
        fontSize: "1.5rem",
      },
    },
  }));

  const c = useStyles();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  function step1() {
    setProc(true);
    setGpu(false);
  }
  function handleback1() {
    handleBack();
    setProc(true);
    setGpu(false);
  }
  function step2() {
    if (proCount < 1) {
      return alert("Processor is required for the for the build");
    }

    setProc(false);
    setGpu(true);
    handleNext();
  }
  function handleback2() {
    handleBack();
    setMobo(false);
    setGpu(true);
  }
  function step3() {
    console.log("i am clicked");
    if (gpuCount < 1) {
      return alert("Gpu is required for the for the build");
    }

    setGpu(false);
    setMobo(true);
    handleNext();
  }
  function handleback3() {
    handleBack();
    setRam(false);
    setMobo(true);
  }
  function step4() {
    console.log("i am clicked");
    if (moboCount < 1) {
      return alert("Motherboard is required for the build");
    }

    setMobo(false);
    setRam(true);
    handleNext();
  }
  function handleback4() {
    handleBack();
    setHdd(false);
    setRam(true);
  }
  function step5() {
    console.log("i am clicked");
    if (ramCount < 1) {
      return alert("Rams(s) is required for the build");
    }

    setRam(false);
    setHdd(true);
    handleNext();
  }

  function handleback5() {
    handleBack();
    setPsu(false);
    setHdd(true);
  }
  function step6() {
    console.log("i am clicked");

    setHdd(false);
    setPsu(true);
    handleNext();
  }
  function handleback6() {
    handleBack();
    setCooling(false);
    setPsu(true);
  }
  function step7() {
    console.log("i am clicked");
    if (psuCount < 1) {
      return alert("PSU is required for the build");
    }

    setPsu(false);
    setCasing(true);
    handleNext();
  }
  function handleback7() {
    handleBack();
    setCooling(false);
    setCasing(true);
  }

  function step8() {
    console.log(casingCount);
    if (casingCount < 1) {
      return alert("Casing is required for the build");
    }
    setCasing(false);
    setCooling(true);
    handleNext();
  }
  function finish() {
    console.log(fin);
    setFin(true);
    setCooling(false);
  }

  if (proc === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your Processor</p>
        </div>
        <Box className="stepBox" sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper
            className={c.root}
            sx={{ color: "black" }}
            activeStep={activeStep}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </React.Fragment>
          )}
        </Box>

        <Processors />
        <Button className="next" onClick={() => step2()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (gpu === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your GPU</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <GPU />
        <Button className="back" onClick={() => handleback1()}>
        <i class="arrow left"></i>Back
        </Button>{" "}
        
        <Button className="next" onClick={() => step3()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (mobo === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your Motherboard</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <Motherboard />
        <Button className="back" onClick={() => handleback2()}>
        <i class="arrow left"></i>Back
        </Button>
        <Button className="next" onClick={() => step4()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (ram === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your RAM</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <Ram />
        <Button className="back" onClick={() => handleback3()}>
        <i class="arrow left"></i> Back
        </Button>
        <Button className="next" onClick={() => step5()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (hdd === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your HDD/SSD</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <Storage />
        <Button className="back" onClick={() => handleback4()}>
        <i class="arrow left"></i>  Back
        </Button>
        <Button className="next" onClick={() => step6()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (psu === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your Power Supply</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <PSUScreen />
        <Button className="back" onClick={() => handleback5()}>
        <i class="arrow left"></i>  Back
        </Button>
        <Button className="next" onClick={() => step7()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (casing === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your Casing</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <Casing />
        <Button className="back" onClick={() => handleback6()}>
        <i class="arrow left"></i>  Back
        </Button>
        <Button className="next" onClick={() => step8()}>
          Next <i class="arrow right"></i>
        </Button>
      </div>
    );
  else if (cooling === true)
    return (
      <div className="Maincontainer">
        <div className="HeadText">
          <p className="TextStyle"> Select your Cooler</p>
        </div>
        <Box sx={{ width: "50%", marginLeft: "500px" }}>
          <Stepper className={c.root} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Box>
        <Cooling />
        <Button className="back" onClick={() => handleback7()}>
        <i class="arrow left"></i> Back
        </Button>
        <Button className="btnFinishBuild" onClick={() => finish()}>
          Finish Building
        </Button>
      </div>
    );
  else if (fin === true)
    return (
      <div className="Maincontainer">
        <h1 style={{ color: "Purple" }}>Build Complete</h1>

        <BuildCompleted />
      </div>
    );
};

export default CustomScreen;
