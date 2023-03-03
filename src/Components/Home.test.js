import { screen, render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("<Home/>", () => {
test("checking if button is present",()=>{
  render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
  const btnJobs =screen.getByRole('button',{name:"Jobs"});
  expect(btnJobs).toBeInTheDocument();
  expect(btnJobs.textContent).toEqual("Jobs");
});
test("checking if ContactUs button is present",()=>{
    render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    );
    const btnContacts =screen.getByRole('button',{name:"ContactUs"});
    expect(btnContacts).toBeInTheDocument();
    expect(btnContacts.textContent).toEqual("ContactUs");
  });
});
