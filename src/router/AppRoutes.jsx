import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRoutes = () => {

  return(
    <Routes>
        {/* login y register */}
      <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Journal */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )

}