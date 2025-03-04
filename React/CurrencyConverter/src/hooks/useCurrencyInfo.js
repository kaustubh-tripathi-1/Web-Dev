import { useState, useEffect } from "react";

const cache = {};

export function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState(null);
    const [error, setError] = useState(null);

    const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

    useEffect(() => {
        if (!currency) {
            setError(`Currency not provided. Please try again...`);
            return [currencyData, error];
        }

        if (cache[currency]) {
            setCurrencyData(cache[currency]);
            return;
        }

        async function fetchCurrencyData() {
            //$ API call of Base URL
            try {
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error(
                        `${response.status}, ${response.statusText}`
                    );
                }

                const currencyJSON = await response.json();
                cache[currency] = currencyJSON[currency];

                if (!currencyJSON[currency]) {
                    throw new Error("Base API returned invalid data");
                }

                setCurrencyData(currencyJSON[currency]);
            } catch (primaryError) {
                //$ API call of Fallback URL
                try {
                    const fallbackResponse = await fetch(fallbackUrl);

                    if (!fallbackResponse.ok) {
                        setError(
                            `Failed to fetch data: ${primaryError.message}`
                        );
                        setCurrencyData(null);
                        throw new Error(
                            `${fallbackResponse.status}, ${fallbackResponse.statusText}`
                        );
                    }

                    const fallbackData = await fallbackResponse.json();
                    if (!fallbackData[currency]) {
                        setCurrencyData(null);
                        throw new Error("Fallback API returned invalid data");
                    }
                    cache[currency] = fallbackData[currency];
                    setCurrencyData(fallbackData[currency]);
                } catch (fallbackError) {
                    console.error(
                        `Both APIs failed:\nPrimary API Error: ${primaryError}\nFallback API Error: ${fallbackError}`
                    );
                }
            }
        }
        fetchCurrencyData();
    }, [currency]);

    return [currencyData, error];
}
