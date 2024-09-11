import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-[#FFC107] text-amber-950 text text-center">
      <div className="container mx-auto p-4">
        <Link to="/" className="text-4xl font-bold">
          Astrology Insights
        </Link>
        <p className="text-xl">Your gateway to the stars</p>
      </div>
      <nav className="bg-[#676045] text-white">
        <ul className="flex justify-center space-x-8 p-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400  font-bold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/horoscopes"
              className={({ isActive }) =>
                isActive ? "text-yellow-400  font-bold" : "hover:underline"
              }
            >
              Horoscopes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zodiac-signs"
              className={({ isActive }) =>
                isActive ? "text-yellow-400   font-bold" : "hover:underline"
              }
            >
              Zodiac Signs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compatibility"
              className={({ isActive }) =>
                isActive ? "text-yellow-400   font-bold" : "hover:underline"
              }
            >
              Compatibility
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                isActive ? "text-yellow-400   font-bold" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("hi")}>Hindi</button>
      <h1>{t("welcome")}</h1>
      <p>{t("hello")}</p>
    </header>
  );
};

export default Header;
