---
sidebar_position: 2
---

# Traduisez votre site

Traduisons `docs/intro.md` en français.

## Configurez i18n

Modifiez `docusaurus.config.js` pour ajouter la prise en charge de la locale `fr` :

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traduisez une documentation

Copiez le fichier `docs/intro.md` dans le dossier `i18n/fr` :

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduisez `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en français.

## Démarrez votre site localisé

Démarrez votre site en utilisant la locale française :

```bash
npm run start -- --locale fr
```

Votre site localisé est accessible à l'adresse `http://localhost:3000/fr/` et la page `Getting Started` est traduite.

:::caution

En développement, vous ne pouvez utiliser qu'une seule locale à la fois.

:::

## Ajoutez un menu déroulant de locale

Pour naviguer facilement entre les langues, ajoutez un menu déroulant de locale.

Modifiez le fichier `docusaurus.config.js` :

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Le menu déroulant de locale apparaît maintenant dans votre barre de navigation :

![Menu déroulant de locale](/img/tutorial/localeDropdown.png)

## Générez votre site localisé

Générez votre site pour une locale spécifique :

```bash
npm run build -- --locale fr
```

Ou générez votre site en incluant toutes les locales en une seule fois :

```bash
npm run build
```