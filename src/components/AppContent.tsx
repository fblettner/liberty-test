import {
  AppsContent,
  EApplications,
  useAppContext,
}
  from "liberty-core";
import { useEffect } from "react";
import { currentApplication } from "../data/applications";
import { currentUser } from "../data/user";

const App = () => {

  const { appsProperties, connect, login } = useAppContext();
  useEffect(() => {
    // Define new application properties
    // Update state only if appsProperties are not already set
    if (!appsProperties || appsProperties[EApplications.id] !== currentApplication[EApplications.id]) {
      connect(currentApplication);
      login(currentUser)
    }
  }, [appsProperties, connect, login]);

  return (
    <AppsContent />
  )
};

export default App;