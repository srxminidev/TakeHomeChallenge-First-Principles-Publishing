
// import { configureStore }from '@reduxjs/toolkit/query/react'
import { configureStore }from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { AlphaVantageApi } from './Services/AlphaVantageApi'


export const store = configureStore({
  reducer: {

    [AlphaVantageApi.reducerPath]: AlphaVantageApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AlphaVantageApi.middleware),
})

setupListeners(store.dispatch)