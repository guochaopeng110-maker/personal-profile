import { useLocale } from "../context/I18nContext";

export function Header() {
  const { locale, setLocale } = useLocale();

  return (
    <header className="site-header">
      <div className="header-container">
        <button
          className="lang-switch-btn"
          onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
          aria-label={locale === "zh" ? "English" : "中文"}
        >
          {locale === "zh" ? "English" : "中文"}
        </button>
      </div>
    </header>
  );
}
