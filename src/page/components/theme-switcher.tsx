import { useTheme } from "../contexts/theme-context";


const themes = ['light', 'dark', 'neon', 'pastel', 'retro', 'cyberpunk'];

const ThemeSwitcher = () => {
  const { theme, setTheme, toggleDarkMode } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-2 rounded-lg text-sm capitalize transition-all duration-300 ${
            theme === t
              ? 'bg-pink-500 text-white shadow-lg scale-110'
              : 'bg-gray-200 text-gray-800 hover:bg-pink-300'
          }`}
        >
          {t}
        </button>
      ))}
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-600 transition"
      >
        Auto Light/Dark
      </button>
    </div>
  );
};

export default ThemeSwitcher;
