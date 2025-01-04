import Freecurrencyapi from "@everapi/freecurrencyapi-js";

// freecurrency apikey
const apiKey = "fca_live_nM3nzlbZgCn8xgd1Lao4dHGx663kQKu5U3yURqmp";

// Freecurrencyapi constructor
const freecurrencyapi = new Freecurrencyapi(apiKey);

// function that converts *fromCurrency* to *toCurrency* following the currency unitss
export async function convertCurrency(fromCurrency, toCurrency, units) {
  const result = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = result.data[toCurrency];

  // multiplying units once the conversion is done
  const response = multiplier * units;

  return response;
}
