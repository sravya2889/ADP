import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../App.css";

const AdpUsersAccordion = ({ userList }) => {
  return (
    <div className="accordion-section">
      {userList.map((v, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography component="span">{v.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="span">
                <div>
                  <Typography component="p">street : {v.street}</Typography>
                  <Typography component="p">suite : {v.suite}</Typography>
                  <Typography component="p">city : {v.city}</Typography>
                  <Typography component="p">zipcode : {v.zipcode}</Typography>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AdpUsersAccordion;
