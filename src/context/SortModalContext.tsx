import { createContext, ReactNode, useState } from "react";

type SortModalContextType = {
  isOpen: boolean;
  onToggle?: () => void;
};
export const SortModalContext = createContext<SortModalContextType>({
  isOpen: false,
});

const SortModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<SortModalContextType>({ isOpen: false });
  const onToggle = () => {
    setIsOpen((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
    console.log("Is open", isOpen);
  };
  return (
    <SortModalContext.Provider value={{ isOpen: isOpen.isOpen, onToggle }}>
      {children}
    </SortModalContext.Provider>
  );
};

export default SortModalProvider;
