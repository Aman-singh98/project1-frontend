import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import bn from "./locales/bn.json";

const LANGUAGE_STORAGE_KEY = "vitalaid_language";

// Resolve initial language
function detectInitialLanguage() {
	const stored = typeof window !== "undefined" ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY) : null;
	if (stored && ["en", "hi", "bn"].includes(stored)) {
		return stored;
	}

	if (typeof navigator !== "undefined") {
		const browserLang = navigator.language || navigator.userLanguage || "";
		if (browserLang.startsWith("hi")) return "hi";
		if (browserLang.startsWith("bn")) return "bn";
	}

	return "en";
}

const initialLanguage = detectInitialLanguage();

i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			hi: { translation: hi },
			bn: { translation: bn },
		},
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});

i18n.changeLanguage(initialLanguage);

// Persist language on change
i18n.on("languageChanged", (languageCode) => {
	if (typeof window !== "undefined") {
		window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
	}
});

export default i18n;

