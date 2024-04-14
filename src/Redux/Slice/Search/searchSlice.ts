import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
  id: number;
  name: string;
}

const initialState: ISearch = {
  id: 0,
  name: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    removeSearch: (state) => {
      (state.id = 0), (state.name = "");
    },
  },
});

export const { setSearch, removeSearch } = searchSlice.actions;

export default searchSlice.reducer;
