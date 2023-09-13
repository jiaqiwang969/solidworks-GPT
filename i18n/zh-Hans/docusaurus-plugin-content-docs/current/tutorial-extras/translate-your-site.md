---
sidebar_position: 2
---

# Traduisez votre site

Traduisons `docs/intro.md` en français.

## Configurez i18n

Modifiez `docusaurus.config.js` pour ajouter la prise en charge de la langue `fr` :

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Traduisez un document

Copiez le fichier `docs/intro.md` dans le dossier `i18n/fr` :

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Traduisez `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` en français.

## Démarrez votre site localisé

Démarrez votre site en utilisant la langue française :

```bash
npm run start -- --locale fr
```

Votre site localisé est accessible à l'adresse `http://localhost:3000/fr/` et la page `Getting Started` est traduite.

:::caution

En développement, vous ne pouvez utiliser qu'une seule langue à la fois.

:::

## Ajoutez un menu déroulant de langue

Pour naviguer facilement entre les langues, ajoutez un menu déroulant de langue.

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

Le menu déroulant de langue apparaît maintenant dans votre barre de navigation :

![Menu déroulant de langue](/img/tutorial/localeDropdown.png)

## Générez votre site localisé

Générez votre site pour une langue spécifique :

```bash
npm run build -- --locale fr
```

Ou générez votre site en incluant toutes les langues en une seule fois :

```bash
npm run build
```