import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg bg-zinc-800 text-white"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}