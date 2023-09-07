# Our Adds

figma failas https://www.figma.com/community/file/1250348068101895773

# Skelbimu portalas

Skelbimų portalas

## Funkcionalumas:

1. Vartotojo registracija,
2. Prisijungimas
3. Skelbimu įkėlimas,
4. Galimybė prisidėt skelbimą į favorites
5. MyAccount puslapis kuriame matome tik savo skelbimus ir galime sukurti nauja
6. HomePage, prisijunge ir neprisijunge matome visus skelbimus

## Techonolgija

1. Front end React.js
2. Back end firebase

<!-- ## Eiga (nebutinai tokia tvarka) -->

## Front end struktura

- HomePage

  - navbar - home, login, register
  - content - ateje matom visus skelbimus
  - footer

- HomePage (prisiloginus)

  - navbar - home, logout, MyAccount
  - content - ateje matom visus skelbimus
  - footer

- MyAccount - (matomas tik prisijungus)

  - content
    - createAdd - sukurti skelbima
    - listOfMyAdds - mano skelbimai

- RegisterPage

  - Register component

- LoginPage

  - LoginComponent

```js
const singeItem = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  mainImgUrl: '...',
  tags: ['tech', 'phones', '...'],
};
```

## Praktika
