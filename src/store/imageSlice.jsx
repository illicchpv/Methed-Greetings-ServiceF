import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../const/const";

export const fetchImage = createAsyncThunk(
  'image/fetchImage', // имя акшена задаётся самому/ сам акшин формируется автоматически
  async (holiday) => {
    const res = await fetch(`${URL_API}image/${holiday}`)
    const data = await res.json()
    return data
  }
)

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    urlImg: '' ,
    idImg: '',
    loading: '',
  },
  reducers:{},
  extraReducers:{
    [fetchImage.pending]: (state, action) => {
      state.loading = 'loading...'
      // чтоб не мерцала при загрузке state.urlImg = ''
      // state.idImg = ''
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.urlImg = action.payload.urlImg
      state.idImg = action.payload.idImg
    },
    [fetchImage.rejected]: (state, action) => {
      state.loading = 'error'
      state.urlImg = ''
      state.idImg = ''
    },
  }
})

// экспортируем actions
// export const {setHoliday} = imageSlice.actions

export default imageSlice.reducer