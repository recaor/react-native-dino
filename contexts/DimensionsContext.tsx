import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

type DimensionsContextType = {
  width: number;
  height: number;
};

export const DimensionsContext = createContext<DimensionsContextType>({
  width: window.width,
  height: window.height,
});

export const useDimensions = () => React.useContext(DimensionsContext);

const DimensionsProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.width,
    height: window.height,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    return () => subscription?.remove();
  });

  return (
    <DimensionsContext.Provider value={dimensions}>
      {children}
    </DimensionsContext.Provider>
  );
};

export default DimensionsProvider;
