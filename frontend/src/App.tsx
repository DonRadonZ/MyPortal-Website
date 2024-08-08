import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./screen/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";


export default function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="dashboard"/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

