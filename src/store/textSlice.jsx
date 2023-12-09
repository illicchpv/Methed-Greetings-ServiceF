import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../const/const";

export const fetchText = createAsyncThunk(
  'text/fetchText', // имя акшена задаётся самому/ сам акшин формируется автоматически
  async (holiday) => {
    const res = await fetch(`${URL_API}text/${holiday}`)
    const data = await res.json()
    return data
  }
)
export const fetchTextId = createAsyncThunk(
  'text/fetchTextId', // имя акшена задаётся самому/ сам акшин формируется автоматически
  async (id) => {
    const res = await fetch(`${URL_API}text/${id}`)
    const data = await res.json()
    return data
  }
)

const textSlice = createSlice({
  name: 'text',
  initialState: {
    text: '' ,
    idText: '',
    loading: '',
  },
  reducers:{},
  extraReducers:{
    [fetchText.pending]: (state, action) => {
      state.loading = 'loading...'
      state.text = ''
      state.idText = ''
    },
    [fetchText.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.text = action.payload.text
      state.idText = action.payload.idText
    },
    [fetchText.rejected]: (state, action) => {
      state.loading = 'error'
      state.text = ''
      state.idText = ''
    },

    [fetchTextId.pending]: (state, action) => {
      state.loading = 'loading...'
      state.text = ''
      state.idText = ''
    },
    [fetchTextId.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.text = action.payload.text
      state.idText = action.payload.idText
    },
    [fetchTextId.rejected]: (state, action) => {
      state.loading = 'error'
      state.text = ''
      state.idText = ''
    },

  }
})

// экспортируем actions
// export const {setHoliday} = textSlice.actions

export default textSlice.reducer