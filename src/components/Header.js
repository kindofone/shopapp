import { COLORS, FONTS, useTheme } from "../contexts/ThemeContext";

function Header() {
  const {setThemeColor, setThemeFont} = useTheme();

  return (
    <div>
      <h1 className='header'>
        Welcome!
      </h1>
      <select onChange={e => setThemeColor(e.target.value)}>
        {COLORS.map(color => <option value={color}>{color}</option>)}
      </select>
      <select onChange={e => setThemeFont(e.target.value)}>
        {FONTS.map(font => <option value={font}>{font}</option>)}
      </select>
    </div>
  );
}

export default Header;