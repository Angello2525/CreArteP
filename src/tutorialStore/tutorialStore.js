// Se importa funciones para configurar el store de Redux
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

export const tutorialStore = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});