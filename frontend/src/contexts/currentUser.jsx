import { createContext, useMemo, useState } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

// eslint-disable-next-line react/prop-types
export function CurrentUserContextProvider({ children }) {
  const [userProfil, setUserProfil] = useState([]);

  // const value = useMemo(
  //   () => ({
  //     userProfil,
  //     setUserProfil,
  //   }),
  //   [userProfil]
  // );

  return (
    <CurrentUserContext.Provider value={{ userProfil, setUserProfil }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
