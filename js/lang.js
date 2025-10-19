// === UNIVERSAL TRANSLATION FILE ===
// Just change the text values below — the app will update automatically.

export const TEXTS = {
  base: {
    appTitle: "Adivinhe os nomes com base nos emojis",
    openHint: "Dica",
    win1Title: "Passo 1: Insira os nomes e escolha os emojis",
    win1Note: "Insira nomes (você pode inserir menos de 10). Cada emoji é associado a um nome..",
    chooseEmoji: "Escolha um emoji",
    hintTitle: "Dica",
    hintText: "Digite os nomes e escolha emojis para eles. Em seguida, tente lembrar os nomes a partir dos emojis.",
    accept: "Próximo",
    win2Title: "Passo 2: Combine os nomes com os emojis",
    check: "Verificar",
    back: "Voltar",
    close: "Fechar",
    dropHint: "Arraste o cartão de volta aqui",
    allCorrectTitle: "Legal!",
    allCorrectText: "Todas as respostas estão corretas 🎉",
    needOnePair: "Por favor, insira pelo menos um nome com emoji!!!",
    duplicateNames: "Cada nome deve ser de apenas uma pessoa 😊 Verifique se há cópias. Se tiver nomes iguais, coloque a primeira letra do sobrenome pra diferenciar!",
    someWrongTitle: "Existem erros",
    someWrongText: "Verifique as linhas destacadas. Os nomes corretos são mostrados ao lado delas..",
    modalHintBodySetup: `
      Digite os nomes e escolha emojis para eles.<br>
      Em seguida, na segunda janela, arraste os cartões dos nome para as imagens do emoji.
    `,
    modalHintBodyQuizIntro: `
      <p><b>Dica:</b> aqui está o que você escreveu no início:</p>
    `,
    modalHintBodyQuizOutro: `
      <p style="font-size:14px;opacity:.7;">Arraste o cartão do nome para o emoji correspondente.</p>
    `,
  },
};




// === UNIVERSAL LANGUAGE ENGINE ===
// It doesn't care what the key name is — ru/pl/en/base all work.
let currentLang = Object.keys(TEXTS)[0]; // auto-pick first key

export const t = (key) => TEXTS[currentLang]?.[key] ?? key;

export function applyTranslations() {
  // Set HTML lang attr
  document.documentElement.setAttribute("lang", currentLang);

  // Apply texts to all elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = TEXTS[currentLang][key];
    if (text === undefined) return;

    if (el.tagName.toLowerCase() === "input" && el.placeholder) {
      el.placeholder = text;
    } else {
      el.innerHTML = text; // allow <br> and HTML
    }
  });

  document.title = t("appTitle");
}

export function getTranslations() {
  return TEXTS[currentLang];
}
