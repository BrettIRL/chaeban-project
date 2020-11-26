import { createContext, ReactNode, useContext, useState } from "react";
import { Colorway, Layout } from "types/ThemeOptions";

interface FormDataProviderProps {
  children: ReactNode;
}

type FormData = {
  date: Date | null;
  message: string;
  theme: {
    layout: Layout | null;
    colorway: Colorway | "image" | null;
  };
};
type State = {
  data: FormData;
  setData: (data: FormData) => void;
};

const FormDataContext = createContext<State | undefined>(undefined);

function FormDataProvider({ children }: FormDataProviderProps) {
  const setData = (data: FormData) => {
    setState({ ...state, data });
  };

  const [state, setState] = useState<State>({
    data: {
      date: null,
      message: "",
      theme: {
        layout: null,
        colorway: null,
      },
    },
    setData,
  });

  return (
    <FormDataContext.Provider value={state}>
      {children}
    </FormDataContext.Provider>
  );
}

function useFormData() {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within FormDataProvider");
  }
  return context;
}

export { FormDataProvider, useFormData };
