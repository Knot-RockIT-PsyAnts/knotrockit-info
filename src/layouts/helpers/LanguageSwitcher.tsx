import config from "@/config/config.json";
import languages from "@/config/language.json";
import React from "react";

const LanguageSwitcher = ({
  lang,
  pathname,
}: {
  lang: string;
  pathname: string;
}) => {
  const { default_language, default_language_in_subdir } = config.settings;

  // Function to remove trailing slash if necessary
  const removeTrailingSlash = (path: string) => {
    if (!config.site.trailing_slash) {
      return path.replace(/\/$/, "");
    }
    return path;
  };

  // Sort languages by weight and filter out disabled languages
  const sortedLanguages = languages
    .filter(
      (language) =>
        !(config.settings.disable_languages as string[]).includes(language.languageCode),
    )
    .sort((a, b) => a.weight - b.weight);

  const switchLanguage = (selectedLang: string) => {
    let newPath;
    const baseUrl = window.location.origin;

    if (selectedLang === default_language) {
      if (default_language_in_subdir) {
        newPath = `${baseUrl}/${default_language}${removeTrailingSlash(pathname.replace(`/${lang}`, ""))}`;
      } else {
        newPath = `${baseUrl}${removeTrailingSlash(pathname.replace(`/${lang}`, ""))}`;
      }
    } else {
      newPath = `/${selectedLang}${removeTrailingSlash(pathname.replace(`/${lang}`, ""))}`;
    }

    window.location.href = newPath;
  };

  if (sortedLanguages.length <= 1) {
    return null;
  }

  return (
    <div className="mr-5 flex items-center rounded-full border border-dark dark:border-darkmode-primary overflow-hidden">
      {sortedLanguages.map((language) => {
        const label =
          language.languageCode.charAt(0).toUpperCase() +
          language.languageCode.slice(1);
        const isActive = lang === language.languageCode;

        return (
          <button
            key={language.languageCode}
            type="button"
            aria-pressed={isActive}
            onClick={() => {
              if (!isActive) {
                switchLanguage(language.languageCode);
              }
            }}
            className={`px-2 py-1 text-sm font-semibold cursor-pointer transition-colors ${
              isActive
                ? "bg-dark text-white dark:bg-darkmode-primary dark:text-white"
                : "bg-transparent text-text-dark dark:text-white hover:bg-dark/10 dark:hover:bg-darkmode-primary/10"
            }`}
          >
            {label.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
