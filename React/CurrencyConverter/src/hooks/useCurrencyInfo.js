import { useState, useEffect } from "react";

export function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState(null);
    const [error, setError] = useState(null);

    if (!currency) {
        return [currencyData, error];
    }

    const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

    useEffect(() => {
        async function fetchCurrencyData(currency) {
            //$ API call of Base URL
            try {
                const response = await fetch(baseUrl);

                // console.log(response);
                if (!response.ok) {
                    throw new Error(
                        `${response.status}, ${response.statusText}`
                    );
                }

                const currencyJSON = await response.json();

                if (!currencyJSON[currency]) {
                    throw new Error("Base API returned invalid data");
                }

                // console.log(currencyJSON[currency]);

                setCurrencyData(currencyJSON[currency]);
            } catch (error) {
                //$ API call of Fallback URL
                try {
                    const response = await fetch(fallbackUrl);

                    if (!response.ok) {
                        setError(true);
                        throw new Error(
                            `${response.status}, ${response.statusText}`
                        );
                    }

                    const currencyJSON = await response.json();
                    if (!currencyJSON[currency]) {
                        throw new Error("Fallback API returned invalid data");
                    }

                    console.log(fallbackUrl);

                    console.log(currencyJSON[currency]);

                    setCurrencyData(currencyJSON[currency]);
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchCurrencyData(currency);
    }, [currency]);

    return [currencyData, error];
}
