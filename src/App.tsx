import { useState } from "react";
import SearchFrom from "./components/form/SearchFrom";
import UserProfile from "./components/user/UserProfile";
const App = () => {
  const [userName, setUserName] = useState("quincylarson");
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchFrom userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};
export default App;
