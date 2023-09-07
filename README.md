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
  userUid: '211546862121',
};
```

## Praktika

## CreateAdd

1. reikia sukurti forma
2. valdyti su Formik
3. validuoti laukus
4. sekmes atveju sukurti nauja irasa db

## homePage

1. su tik susikurus komponentui atvaizduoti visus skelbimus
2. useEffect, https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=1#read_data
3. parsisiusti duomenis irasyti i state ir pramapinti ir atvaizuoti jsx

## LoginPage

- LoginComponent - leistu prisiloginti

1. prisideti autentifikacija per konsole, password and email, google
2. su getAuth() autentifikuoti vartotojus

## AuthContext

1. jame paleisti observeri onAuthStateChanged() kuris parodys ar esam prisijune ar ne
