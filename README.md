# About Currency Converter
This lightweight and efficient currency converter package simplifies the process of converting currencies in JavaScript applications. It offers real-time exchange rate fetching, offline support for predefined rates, and easy integration with any JavaScript or TypeScript project. Designed with developers in mind, this package is perfect for e-commerce platforms, financial applications, or any project requiring accurate currency conversion.

:seedling: Installation
```
npm install tk-currency-converter
```

### Import directly into your application
```
import { convertCurrency } from "tk-currency-converter";
```

### That's it. now you have to call the imported function with three arguments **fromCurrency**, **toCurrency** and third is the **units** you want to convert

```
convertCurrency("USD", "INR", 1).then((res) => console.log(res));
```

#### This will return a response as a promise object so to consume the promise data either you can use the async/await or then() and catch() methods and you can store the returned response on the variable and that's it you are able to convert the currency from one to another in just few steps.
