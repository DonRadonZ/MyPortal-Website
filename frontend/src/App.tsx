import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./screen/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import Meeting from "./screen/Reservations/Meeting";
import Classroom from "./screen/Reservations/Classroom";


export default function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="dashboard"/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="meeting" element={<Meeting/>}/>
      <Route path="classroom" element={<Classroom/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

