
  import React, { createContext, useContext, useState } from 'react';

  const initialProp = [
    {
        event: "Creative Writing Class",
        date: "2025-04-16T16:30:00Z",
        location: "Writing Room",
        organizer: "Literature Club",
        description: "Explore storytelling techniques and improve your writing skills.",
        status: "Scheduled",
        participants: ["Quincy Harris", "Rachel Scott", "Sam Adams"]
      }
  ];
  
  const PropsContext = createContext();
  
  export function ProposeProvider({ children }) {
    const [proposal, setProposal] = useState(initialProp);
  
    const addProps = (newProps) => {
      setProposal(prev => [newProps,...prev]);
    };
  
    const deleteProps = (index) => {
      setProposal(prev => prev.filter((_, i) => i !== index));
    };
  
    return (
      <PropsContext.Provider value={{ proposal, addProps, deleteProps}}>
        {children}
      </PropsContext.Provider>
    );
  }
  
  export const useProposal = () => useContext(PropsContext);
  