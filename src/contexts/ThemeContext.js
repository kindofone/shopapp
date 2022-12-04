import React, { useContext, useReducer } from 'react';

const Context = React.createContext('light');

export const COLORS = ['black', 'red', 'rebeccapurple'];
export const FONTS = ['Arial', 'Times New Roman', 'Comic Sans MS'];

export const CHANGED_COLOR_ACTION = 'changed_color';
export const CHANGED_FONT_ACTION = 'changed_font';

function reducer(state, action) {
  switch (action.type) {
    case CHANGED_COLOR_ACTION:
      {
        return {
          ...state,
          color: action.payload,
        };
      }

    case CHANGED_FONT_ACTION:
      {
        return {
          ...state,
          font: action.payload,
        };
      }

      default:
        {
          return {
            ...state,
          };
        }
  }
}

function ThemeProvider(props) {
  const {children} = props;
  const [state, dispatch] = useReducer(reducer, {
    color: COLORS[0],
    font: FONTS[0],
  });

  return (
    <Context.Provider value={{
      state,
      setThemeColor: newColor => dispatch({type: CHANGED_COLOR_ACTION, payload: newColor}),
      setThemeFont: newFont => dispatch({type: CHANGED_FONT_ACTION, payload: newFont}),
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