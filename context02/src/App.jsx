import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Hello Context </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
