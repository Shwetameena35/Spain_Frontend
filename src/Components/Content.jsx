import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form } from 'formik';
import { TextField } from "@mui/material";
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
  defensivePositioning: Yup.number().required('Required'),
  readingDefensiveGameSituations: Yup.number().required('Required'),
  managingSpaceTimeInDefense: Yup.number().required('Required'),
  combiningWithTeammates: Yup.number().required('Required'),
  readingOffensiveGameSituations: Yup.number().required('Required'),
  managingSpaceTimeInAttack: Yup.number().required('Required'),
  switchingToOffensiveRole: Yup.number().required('Required'),
  gettingTheBallOutOfPressure: Yup.number().required('Required'),
  switchingToDefensiveRole: Yup.number().required('Required'),
  pressureAfterLoss: Yup.number().required('Required'),
  positionAdjustment: Yup.number().required('Required'),
  ballControl: Yup.number().required('Required'),
  playingTheBall: Yup.number().required('Required'),
  solvingSituation: Yup.number().required('Required'),
  shootingAndScoring: Yup.number().required('Required'),
  nonDominateLeg: Yup.number().required('Required'),
  clearences: Yup.number().required('Required'),
  marking: Yup.number().required('Required'),
  timing: Yup.number().required('Required'),
  anticaption: Yup.number().required('Required'),
  recovery: Yup.number().required('Required'),
  endurance: Yup.number().required('Required'),
  strength: Yup.number().required('Required'),
  speed: Yup.number().required('Required'),
  flexibility: Yup.number().required('Required'),
  coordination: Yup.number().required('Required'),
  functionalTraining: Yup.number().required('Required'),
  postRecovery: Yup.number().required('Required'),
  goalOriented: Yup.number().required('Required'),
  frustation: Yup.number().required('Required'),
  personal: Yup.number().required('Required'),
  selfMotivation: Yup.number().required('Required'),
  coorperation: Yup.number().required('Required'),
  fair: Yup.number().required('Required'),
});

const initialValues = {
  combiningWithTeammates: '',
  readingOffensiveGameSituations: '',
  managingSpaceTimeInAttack: '',
  defensivePositioning: '',
  readingDefensiveGameSituations: '',
  managingSpaceTimeInDefense: '',
  switchingToOffensiveRole: '',
  gettingTheBallOutOfPressure: '',
  switchingToDefensiveRole: '',
  pressureAfterLoss: '',
  positionAdjustment: '',
  ballControl: '',
  playingTheBall: '',
  solvingSituation: '',
  shootingAndScoring: '',
  nonDominateLeg: '',
  clearences: '',
  marking: '',
  timing: '',
  anticaption: '',
  recovery: '',
  endurance: '',
  strength: '',
  speed: '',
  flexibility: '',
  coordination: '',
  functionalTraining: '',
  postRecovery: '',
  goalOriented: '',
  frustation:'',
  personal:'',
  selfMotivation:'',
  coorperation:'',
  fair:'',
};

const renderTextField = (id, name, label, formik) => (
  <Box className="mt-3 w-96 flex items-center justify-center ml-16" display="flex" alignItems="center" mb={4}>
    <TextField
      id={id}
      name={name}
      label={label}
      type="number"
      value={formik.values[name]}
      onChange={formik.handleChange}
      variant="outlined"
      size="small"
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      fullWidth
      InputLabelProps={{
        shrink: true,
        style: { color: "#8697B4", fontSize: "16px" },
      }}
    />
  </Box>
);

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageValidationSchemas = [
    Yup.object({
      combiningWithTeammates: Yup.number().required('Required'),
      readingOffensiveGameSituations: Yup.number().required('Required'),
      managingSpaceTimeInAttack: Yup.number().required('Required'),
      defensivePositioning: Yup.number().required('Required'),
      readingDefensiveGameSituations: Yup.number().required('Required'),
      managingSpaceTimeInDefense: Yup.number().required('Required'),
      switchingToOffensiveRole: Yup.number().required('Required'),
      gettingTheBallOutOfPressure: Yup.number().required('Required'),
      switchingToDefensiveRole: Yup.number().required('Required'),
      pressureAfterLoss: Yup.number().required('Required'),
      positionAdjustment: Yup.number().required('Required'),
    }),
    Yup.object({
      ballControl: Yup.number().required('Required'),
      playingTheBall: Yup.number().required('Required'),
      solvingSituation: Yup.number().required('Required'),
      shootingAndScoring: Yup.number().required('Required'),
      nonDominateLeg: Yup.number().required('Required'),
      clearences: Yup.number().required('Required'),
      marking: Yup.number().required('Required'),
      timing: Yup.number().required('Required'),
      anticaption: Yup.number().required('Required'),
      recovery: Yup.number().required('Required'),
    }),
    Yup.object({
      endurance: Yup.number().required('Required'),
      strength: Yup.number().required('Required'),
      speed: Yup.number().required('Required'),
      flexibility: Yup.number().required('Required'),
      coordination: Yup.number().required('Required'),
      functionalTraining: Yup.number().required('Required'),
      postRecovery: Yup.number().required('Required'),
    }),
    Yup.object({
      goalOriented: Yup.number().required('Required'),
      frustation: Yup.number().required('Required'),
      personal: Yup.number().required('Required'),
      selfMotivation: Yup.number().required('Required'),
      coorperation: Yup.number().required('Required'),
      fair: Yup.number().required('Required'),
    }),
  ];

  const handleNext = (formik) => {
    formik.validateForm().then(errors => {
      if (Object.keys(errors).length === 0) {
        setCurrentPage(currentPage + 1);
      } else {
        formik.setTouched(Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}));
      }
    });
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const renderPage = (formik) => {
    switch (currentPage) {
      case 1:
        return (
          <div className="bg-white w-full m-10 rounded-3xl shadow-white  ">
            <div className="text-end p-6 flex justify-between">
              <h6 className="font-semibold text-2xl">Tactical Aspects</h6>
              <p>Shweta Meena</p>
            </div>
            <hr />
            <Container>
              <Row className="flex gap-3 p-3">
                <Col style={{ height: "32rem" }}>
                  <div className="first h-1/2">
                    <h1 className="font-semibold text-center text-lg">Attack</h1>
                    {renderTextField("combiningWithTeammates", "combiningWithTeammates", "Combining with Teammates", formik)}
                    {renderTextField("readingOffensiveGameSituations", "readingOffensiveGameSituations", "Reading Offensive Game Situations", formik)}
                    {renderTextField("managingSpaceTimeInAttack", "managingSpaceTimeInAttack", "Managing Space-Time in Attack", formik)}
                  </div>
                  <div className="second">
                    <h1 className="font-semibold text-center text-lg">Defence</h1>
                    {renderTextField("defensivePositioning", "defensivePositioning", "Defensive Positioning", formik)}
                    {renderTextField("readingDefensiveGameSituations", "readingDefensiveGameSituations", "Reading Defensive Game Situations", formik)}
                    {renderTextField("managingSpaceTimeInDefense", "managingSpaceTimeInDefense", "Managing Space-Time in Defense", formik)}
                  </div>
                </Col>
                <Col style={{ height: "32rem" }}>
                  <div className="first h-1/2">
                    <h1 className="font-semibold text-center text-lg">Offensive Transition</h1>
                    {renderTextField("switchingToOffensiveRole", "switchingToOffensiveRole", "Switching to Offensive Role", formik)}
                    {renderTextField("gettingTheBallOutOfPressure", "gettingTheBallOutOfPressure", "Getting the Ball Out of Pressure", formik)}
                  </div>
                  <div className="second">
                    <h1 className="font-semibold text-center text-lg">Defensive Transition</h1>
                    {renderTextField("switchingToDefensiveRole", "switchingToDefensiveRole", "Switching to Defensive Role", formik)}
                    {renderTextField("pressureAfterLoss", "pressureAfterLoss", "Pressure After Loss", formik)}
                    {renderTextField("positionAdjustment", "positionAdjustment", "Position Adjustment", formik)}
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="flex justify-end p-6">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
              <Button variant="primary" onClick={() => handleNext(formik)} className="ml-2">Next</Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white w-full m-10 rounded-3xl shadow-white ">
            <div className="text-end p-6 flex justify-between">
              <h6 className="font-semibold text-2xl">Technical Aspects</h6>
              <p>Shweta Meena</p>
            </div>
            <hr />
            <Container>
              <Row className="flex gap-3 p-3">
                <Col style={{ height: "32rem" }}>
                  <div className="first ">
                    <h1 className="font-semibold text-center text-lg">With Ball</h1>
                    {renderTextField("ballControl", "ballControl", "Ball Control", formik)}
                    {renderTextField("playingTheBall", "playingTheBall", "Playing the Ball", formik)}
                    {renderTextField("solvingSituation", "solvingSituation", "Solving Situation", formik)}
                    {renderTextField("shootingAndScoring", "shootingAndScoring", "Shooting and Scoring", formik)}
                    {renderTextField("nonDominateLeg", "nonDominateLeg", "Non-dominate leg", formik)}
                  </div>
                </Col>
                <Col style={{ height: "32rem" }}>
                  <div className="second">
                    <h1 className="font-semibold text-center text-lg">Without Ball</h1>
                    {renderTextField("clearences", "clearences", "Clearances", formik)}
                    {renderTextField("marking", "marking", "Marking", formik)}
                    {renderTextField("timing", "timing", "Timing", formik)}
                    {renderTextField("anticaption", "anticaption", "Anticipation", formik)}
                    {renderTextField("recovery", "recovery", "Recovery", formik)}
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="flex justify-end p-6">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
              <Button variant="primary" onClick={() => handleNext(formik)} className="ml-2">Next</Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white w-full m-10 rounded-3xl shadow-white ">
            <div className="text-end p-6 flex justify-between">
              <h6 className="font-semibold text-2xl">Physical Aspects</h6>
              <p>Shweta Meena</p>
            </div>
            <hr />
            <Container>
              <Row className="flex gap-3 p-3">
                <Col style={{ height: "32rem" }}>
                  <div className="first ">
                    <h1 className="font-semibold text-center text-lg">Condition</h1>
                    {renderTextField("endurance", "endurance", "Endurance", formik)}
                    {renderTextField("strength", "strength", "Strength", formik)}
                    {renderTextField("speed", "speed", "Speed", formik)}
                    {renderTextField("flexibility", "flexibility", "Flexibility", formik)}
                    {renderTextField("coordination", "coordination", "Coordination", formik)}
                  </div>
                </Col>
                <Col style={{ height: "32rem" }}>
                  <div className="second">
                    <h1 className="font-semibold text-center text-lg">Injury Prevention</h1>
                    {renderTextField("functionalTraining", "functionalTraining", "Functional training", formik)}
                    {renderTextField("postRecovery", "postRecovery", "Post recovery training", formik)}
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="flex justify-end p-6">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
              <Button variant="primary" onClick={() => handleNext(formik)} className="ml-2">Next</Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white w-full m-10 rounded-3xl shadow-white ">
            <div className="text-end p-6 flex justify-between">
              <h6 className="font-semibold text-2xl">Psychological Aspects</h6>
              <p>Shweta Meena</p>
            </div>
            <hr />
            <Container>
              <Row className="flex gap-3 p-3">
                <Col style={{ height: "32rem" }}>
                  <div className="first ">
                    <h1 className="font-semibold text-center text-lg">Mental</h1>
                    {renderTextField("goalOriented", "goalOriented", "Goal oriented", formik)}
                    {renderTextField("frustation", "frustation", "Frustration tolerance", formik)}
                    {renderTextField("personal", "personal", "Personal responsibility", formik)}
                    {renderTextField("selfMotivation", "selfMotivation", "Self motivation", formik)}
                  </div>
                </Col>
                <Col style={{ height: "32rem" }}>
                  <div className="second">
                    <h1 className="font-semibold text-center text-lg">Social</h1>
                    {renderTextField("coorperation", "coorperation", "Cooperation and teamwork", formik)}
                    {renderTextField("fair", "fair", "Fairness and respect", formik)}
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="flex justify-end p-6">
              <Button variant="secondary" onClick={handlePrevious} disabled={currentPage === 1}>Previous</Button>
              <Button variant="primary" type="submit" className="ml-2">Submit</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={pageValidationSchemas[currentPage - 1]}
      onSubmit={(values) => {
        console.log('Form Values', values);
      }}
    >
      {(formik) => (
        <Form>
          {renderPage(formik)}
        </Form>
      )}
    </Formik>
  );
}

export default Content;
