import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  isSidebarOpen: true,
};

const uiPreferencesSlice = createSlice({
  name: 'uiPreferences',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setTheme, toggleSidebar, setSidebarOpen } = uiPreferencesSlice.actions;
export default uiPreferencesSlice.reducer;
