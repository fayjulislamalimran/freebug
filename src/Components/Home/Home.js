import React from "react";
import Card from "../Card/Card.js";
import Download from "../Download/Download.js";
import QuestionStore from "../QuestionStore/QuestionStore.js";
import Use from "../Use/Use.js";
const Home = () => {
  return (
    <div>
      <Download></Download>
      <Card></Card>
      <Use></Use>
      <QuestionStore></QuestionStore>
    </div>
  );
};

export default Home;
