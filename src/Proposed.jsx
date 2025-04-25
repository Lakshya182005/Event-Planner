import React, { createContext, useContext, useEffect, useState } from "react";

const initialProp = [];

const PropsContext = createContext();

export function ProposeProvider({ children }) {
  const [proposal, setProposal] = useState(() => {
    const stored = localStorage.getItem("proposalData");
    return stored ? JSON.parse(stored) : initialProp;
  });

  const addProps = (newProps) => {
    setProposal((prev) => [newProps, ...prev]);
  };

  const deleteProps = (index) => {
    setProposal((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("proposalData", JSON.stringify(proposal));
  }, [proposal]);

  return (
    <PropsContext.Provider value={{ proposal, addProps, deleteProps }}>
      {children}
    </PropsContext.Provider>
  );
}

export const useProposal = () => useContext(PropsContext);
