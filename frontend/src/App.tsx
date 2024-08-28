import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./screen/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import Meeting from "./screen/Reservations/Meeting";
import Classroom from "./screen/Reservations/Classroom";
import Document from "./screen/Document";
import Support from "./screen/Support";
import KnowledgeBase from "./screen/KnowledgeBase";
import Calendar from "./screen/Calendar";
import PageNotFound from "./screen/PageNotFound";


export default function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
      <Route index element={<Navigate replace to="dashboard"/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="calendar" element={<Calendar/>}/>
      <Route path="meeting" element={<Meeting/>}/>
      <Route path="classroom" element={<Classroom/>}/>
      <Route path="document" element={<Document/>}/>
      <Route path="knowledgebase" element={<KnowledgeBase/>}/>
      <Route path="support" element={<Support/>} />
      </Route>

      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

