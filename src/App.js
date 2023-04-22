import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [country,setCountry]=useState("in");


  const apiKey = process.env.REACT_APP_NEWSAPP_API_KEY;
  // const apiKey="2b21f840ae484ddbaf065ee469d944f7";

  const pageSize = 6;

  return (
    <>
      <BrowserRouter basename={"/NewsApp"}>
        <Navbar setCountry={setCountry} />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general" || country}
                pageSize={pageSize}
                country={country}
                category={"general"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                key={"business" || country}
                pageSize={pageSize}
                country={country}
                category={"business"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"|| country}
                pageSize={pageSize}
                country={country}
                category={"entertainment"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
              key={"health"|| country}
                pageSize={pageSize}
                country={country}
                category={"health"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key={"science"|| country}
                pageSize={pageSize}
                country={country}
                category={"science"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"|| country}
                pageSize={pageSize}
                country={country}
                category={"sports"}
                apiKey={apiKey}
              />
            }
          />
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key={"technology"|| country}
                pageSize={pageSize}
                country={country}
                category={"technology"}
                apiKey={apiKey}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
