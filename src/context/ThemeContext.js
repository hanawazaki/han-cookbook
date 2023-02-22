import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

// 4. ketika dispatch dilakukan maka akan mentrigger reducer di step 1 dan memiliki 2 param. 
//state = default state yg mana adalah { color: 'blue' } dan action
//untuk memenuhi syarat apakah dispatch mentrigger state yg tepat maka digunakan switch case
const themeReducer = (state, action) => {
  switch (action.type) { // 5. jika action.type nya sesuai dengan yang diminta
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload } // maka state (color) akan diganti value nya menjadi nilai yang dikirim melalui payload L:22
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }

    default:
      return state //6. jika type tidak sesuai maka nilai dikembalikan menjadi default state (color:blue)
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: '#58249c', mode: 'dark' })
  //1. buat reducer state dengan parameter(namaReducer, default state), state akan berganti jika dispact dilakukan

  const changeColor = (color) => { //2. buat method untuk melakukan dispatch 
    dispatch({ type: 'CHANGE_COLOR', payload: color })
    //3. inisiasi dispatch dengan type dan payload yang akan diisi oleh value dari
    // param function (value yang akan diganti u/ state)
  }

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    // 7. set value di provider state baru dan method nya -> ke navbar.js
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>

  )
}