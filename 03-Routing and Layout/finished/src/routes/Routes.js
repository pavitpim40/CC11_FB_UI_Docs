import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import SidebarLayout from "../components/layout/SideBarLayout";

function Router() {
  const user = true;
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<h1>Home Page</h1>} />
          <Route path="profile/:id" element={<h1>Profile Page</h1>} />
        
          <Route path="friend" element={<SidebarLayout />}>
            <Route path="" element={<h1>AllFriend Page</h1>} />
            <Route path="request" element={<h1>RequestFriend Page</h1>} />
            <Route path="suggestion" element={<h1>Suggestion Page</h1>} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}
export default Router;
