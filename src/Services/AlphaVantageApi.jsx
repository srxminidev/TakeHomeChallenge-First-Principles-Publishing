import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIKey = "993A7VIBDRTEJAZP";
const symbol = "IBM";

export const AlphaVantageApi = createApi({
  reducerPath: "AlphaVantageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.alphavantage.co" }),

  endpoints: (builder) => ({
    getBalanceSheet: builder.query({
      query: () =>
        `/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${APIKey}`,
    }),
    getIncomeStatement: builder.query({
      query: () =>
        `/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${APIKey}`,
    }),
  }),
});

export const { useGetBalanceSheetQuery, useGetIncomeStatementQuery } =
  AlphaVantageApi;
