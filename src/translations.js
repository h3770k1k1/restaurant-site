import i18n from "i18next";

export const translationEn = {
	welcome: "Welcome to our restaurant!",
	orderOnline: "ORDER ON-LINE",
	callAndOrder: "CALL AND ORDER",
	contact: "CONTACT",
	menu: "MENU",
	gallery: "GALLERY",
	signIn: "SIGN IN",
	visitProfile: "Visit our profile",
	contactHeading: "Contact",
	aboutHeading: "About us",
	ourCompanyParagraph: "OUR COMPANY",
	menuParagraph: "MENU",
	deliveryAreaParagraph: "DELIVERY AREA",
	informationHeading: "Information",
	howToOrderParagraph: "HOW TO ORDER",
	privacyPolicyParagraph: "PRIVACY POLICY",
	orderRegulationsParagraph: "ORDER REGULATIONS",
};
export const translationDe = {
	welcome: "Willkommen in unserem Restaurant!",
	orderOnline: "ONLINE BESTELLEN",
	callAndOrder: "ANRUFEN UND BESTELLEN",
	contact: "KONTAKT",
	menu: "MENU",
	gallery: "GALLERY",
	signIn: "EINLOGGEN",
	visitProfile: "Besuchen Sie unser Profil",
	contactHeading: "KONTAKT",
	aboutHeading: "ÜBER UNS",
	ourCompanyParagraph: "UNSER UNTERNEHMEN",
	menuParagraph: "MENU",
	deliveryAreaParagraph: "LIEFERGEBIET",
	informationHeading: "Information",
	howToOrderParagraph: "WIE BESTELLE ICH",
	privacyPolicyParagraph: "DATENSCHUTZERKLÄRUNG",
	orderRegulationsParagraph: "BESTELLVORSCHRIFTEN",
};
export const translationPl = {
	welcome: "Witamy w naszej restauracji!",
	orderOnline: "ZAMÓW ONLINE",
	callAndOrder: "ZADZWOŃ I ZAMÓW",
	contact: "KONTAKT",
	menu: "MENU",
	gallery: "GALERIA",
	signIn: "ZALOGUJ SIĘ",
	visitProfile: "Odwiedź nasz profil",
	contactHeading: "Kontakt",
	aboutHeading: "O nas",
	ourCompanyParagraph: "NASZA FIRMA",
	menuParagraph: "MENU",
	deliveryAreaParagraph: "OBSZAR DOSTAWY",
	informationHeading: "Informacje",
	howToOrderParagraph: "JAK ZAMAWIAĆ",
	privacyPolicyParagraph: "POLITYKA I PRYWATNOŚĆ",
	orderRegulationsParagraph: "REGULAMIN ZAMÓWIEŃ",
};
i18n.init({
	resources: {
		en: { translation: translationEn },
		de: { translation: translationDe },
		pl: { translation: translationPl },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});
