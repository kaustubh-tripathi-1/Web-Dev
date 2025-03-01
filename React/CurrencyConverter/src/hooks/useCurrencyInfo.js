import { useState, useEffect } from "react";

export function useCurrencyInfo(currency) {
    const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/usd.json`;

    console.log(baseUrl);

    useEffect(() => {
        async function fetchCurrencyData(currency) {
            // Base URL
            try {
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }

                const currencyJSON = await response.json();
            } catch (error) {
                try {
                    const response = await fetch(fallbackUrl);

                    if (!response.ok) {
                        throw new Error(`${response.status}`);
                    }

                    const currencyJSON = await response.json();
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }, []);
}
