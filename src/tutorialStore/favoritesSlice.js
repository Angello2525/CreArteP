import { createSlice } from '@reduxjs/toolkit';

// Crea un slice de Redux para manejar videos favoritos
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    savedVideos: [] // Estado inicial
  },
  reducers: {
     // Reducer para togglear (guardar/quitar) un video
    toggleSaveVideo: (state, action) => {
       // Busca si el video ya existe en la lista
      const videoExists = state.savedVideos.find(
        video => video.videoUrl === action.payload.videoUrl
      );
      
      if (videoExists) {
        state.savedVideos = state.savedVideos.filter(
          video => video.videoUrl !== action.payload.videoUrl
        );
      } else {
        state.savedVideos.push(action.payload);
      }
    }
  }
});

export const { toggleSaveVideo } = favoritesSlice.actions;
export default favoritesSlice.reducer;