import axios from "axios";

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL:
    "https://v6.exchangerate-api.com/v6/35dc9cc9cd83a0b2d6cf5b55/latest/USD",
});

// Function to fetch conversion rate and calculate converted amount
export const currencyConverter = async (fromCurrency, toCurrency, amount) => {
  try {
    const res = await api.get();
    const conversionRate = res.data.conversion_rates[toCurrency]; // Get the conversion rate
    return conversionRate * amount; // Calculate the converted amount
  } catch (error) {
    throw new Error("Error fetching conversion rate");
  }
};
