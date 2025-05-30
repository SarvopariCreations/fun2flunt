import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QuestionPage from "./pages/question.tsx";
import Header from "./component/header.tsx";
import Home from "./pages/home.tsx";
import SignUp from "./pages/signup.tsx";
import Explore from "./pages/explore.tsx";
import ExploreDetails from "./pages/explore-details.tsx";
import ProgramDetails from "./pages/program-details.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <QuestionPage /> */}
    {/* <Home /> */}
    {/* <SignUp /> */}
    {/* <Explore /> */}
    {/* <ExploreDetails /> */}
    <ProgramDetails />
  </StrictMode>
);
