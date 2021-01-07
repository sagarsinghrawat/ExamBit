import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Register from "./screen/Register";
import Login from "./screen/Login";
import QuestionList from "./screen/QuestionList";
import QuestionCreate from "./screen/QuestionCreate";
import TestList from "./screen/TestList";
import TestCreate from "./screen/TestCreate";
import StudentRegistered from "./screen/StudentRegistered";
import TestPaper from "./screen/TestPaper";
import Instruction from "./component/Instruction";
import SupervisorList from "./screen/SupervisorList";
import SupervisorReqList from "./screen/SupervisorList";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
        <ToastContainer autoClose={1500} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/questions" component={QuestionList} exact />
        <Route path="/questions/create" component={QuestionCreate} />
        <Route path="/tests" component={TestList} exact />
        <Route path="/tests/create" component={TestCreate} />
        <Route
          path="/student/registration/test/:id"
          component={StudentRegistered}
        />
        <Route path="/student/test" component={Instruction} exact />
        <Route path="/student/test/start" component={TestPaper} />
        <Route path="/supervisor/request" component={SupervisorReqList} />
        <Route path="/supervisor" component={SupervisorList} />
      </header>
    </BrowserRouter>
  );
};

export default App;
