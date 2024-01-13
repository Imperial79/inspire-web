"use client";

import { createContext, useContext, useState } from "react";

type AlertContext = {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AlertContext | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <AppContext.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
