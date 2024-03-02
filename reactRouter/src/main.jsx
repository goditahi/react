import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "../Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Setting from "./Components/Setting";
import Post from "./Components/Post";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="profile" element={<Profile />}>
//         <Route path="setting" element={<Setting />} />
//       </Route>
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />  */}
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="account">
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
