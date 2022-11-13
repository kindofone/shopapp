import React, { useContext, useState } from 'react';

const Context = React.createContext('light');

export const COLORS = ['black', 'red', 'rebeccapurple'];
export const FONTS = ['Arial', 'Times New Roman', 'Comic Sans MS'];

function ThemeProvider(props) {
  const {children} = props;
  const [color, setColor] = useState(COLORS[0]);
  const [font, setFont] = useState(FONTS[0]);

  return (
    <Context.Provider value={{
      color,
      font,
      setThemeColor: setColor,
      setThemeFont: setFont,
    }}>
      {children}
    </Context.Provider>
  );
}

const useTheme = () => {
  return useContext(Context);
};

export {
  ThemeProvider,
  useTheme,
};