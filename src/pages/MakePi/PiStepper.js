import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MakiPi from "./MakePi";
import InvoiceInfo from "./InvoiceInfo";
import Table from "../../Components/Table/Table";
import FinalPi from "./FinalPi";
import Invoice from "../../Components/Invoice/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import invoiceData from "../../data/invoice-data";
import ProformaInvoice from "../../Components/PoformaInvoice/ProformaInvoice";
import { useDispatch, useSelector } from "react-redux";
import { createProformaInvoice } from "../../actions/proformaInvoice";
import { clearPi, setIsPI } from "../../store/piSlice";
import SuccessPage from "../SuccessPage/SuccessPage";
import { emptyCart } from "../../store/cartSlice";
import { clearFilters } from "../../store/filtersSlice";
import { useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const steps = ["Select Products", "Select PI Information", "Make and Download PI"];

export default function PiStepper() {
  const piInfo = useSelector((state) => state.pi.piInfo);
  const piProducts = useSelector((state) => state.pi.piProducts);
  const isLoading = useSelector((state) => state.show.isLoading);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const dispatch = useDispatch();
  const pi = useSelector((state) => state.pi);

  let canNext = false;
  if (
    piInfo.exporter &&
    piInfo.buyerAdress &&
    piInfo.consignee &&
    piInfo.finalDistination &&
    piInfo.partyOfDischarge &&
    piInfo.notifyParty &&
    piInfo.terms &&
    piInfo.bankDetails
  ) {
    canNext = true;
  }

  piProducts.map((product) => {
    if (product.qty <= 0) canNext = false;
  });

  const handleNext = () => {
    let newSkipped = skipped;
    if (activeStep === 2) {
      dispatch(createProformaInvoice(pi));
      dispatch(clearPi());
      dispatch(emptyCart());
      dispatch(clearFilters());
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(clearPi());
    dispatch(emptyCart());
    dispatch(clearFilters());
    setActiveStep(0);
  };
  useEffect(() => {
    dispatch(setIsPI(true));
  }, []);
  return (
    <Box sx={{ width: "100%", paddingLeft: "20px", paddingRight: "20px", marginTop: "25px" }}>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>

          <div className="success_container" style={{ display: "flex", justifyContent: "center" }}>
            {!isLoading ? (
              <div className="success_card">
                <div className="success_div">
                  <i className="success_i">✓</i>
                </div>
                <h1 className="success_h1">Success</h1>
                <p className="success_p">
                  Your Proforma Invoice will be sent to the manager waiting for approval
                  <br />
                  Press <b style={{ color: "blue" }}>FINISH</b> to send
                </p>
                <p className="success_p" style={{ textAlign: "center", paddingTop: "40px" }}>
                  Keep refreshing your orders page{" "}
                </p>
              </div>
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2, paddingBottom: "20px", alignItems: "flex-end" }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {activeStep === steps.length - 1 ? (
                  <Button disabled={!canNext} variant="contained" onClick={handleNext}>
                    {" "}
                    Send
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleNext}>
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
              <MakiPi />
            </>
          )}
          {activeStep === 1 && (
            <>
              <InvoiceInfo />
              <Table />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  paddingBottom: "150px",
                  alignItems: "flex-end",
                  position: "absolute",
                  right: "136px",
                }}
              >
                <Button variant="contained" size="large" color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button disabled={!canNext} variant="contained" onClick={handleNext}>
                    {" "}
                    Send
                  </Button>
                ) : (
                  <Button size="large" variant="contained" onClick={handleNext}>
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
            </>
          )}
          {activeStep === 2 && (
            <>
              <SuccessPage />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  paddingBottom: "150px",
                  alignItems: "flex-end",
                  position: "absolute",
                  right: "136px",
                }}
              >
                <Button variant="contained" size="large" color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button size="large" disabled={!canNext} variant="contained" onClick={handleNext}>
                    {" "}
                    Send
                  </Button>
                ) : (
                  <Button size="large" variant="contained" onClick={handleNext}>
                    {" "}
                    Next
                  </Button>
                )}
              </Box>
            </>
          )}
        </React.Fragment>
      )}
    </Box>
  );
}
