import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  'holidays/fetchHolidays', // имя акшена задаётся самому/ сам акшин формируется автоматически
  async () => {
    const res = await fetch(`${URL_API}`)
    const data = await res.json()
    return data
  }
)

// could not find react-redux context value; please 
// !!! ensure the component is wrapped in a <Provider>
const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: {}, // список праздников (приходит с сервера)
    holiday: '',
    loading: '',
  },
  reducers:{
    setHoliday(state, action){ // акшен для изменения состояния его имя holidays/setHoliday
      state.holiday = action.payload
    }
  },
  extraReducers:{
    [fetchHolidays.pending]: (state, action) => {
      state.loading = 'loading...'
      state.holidays = {}
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.loading = 'success'
      state.holidays = action.payload
    },
    [fetchHolidays.rejected]: (state, action) => {
      state.loading = 'error'
      state.holidays = {}
    },
  }
})

// экспортируем actions
export const {setHoliday} = holidaysSlice.actions

export default holidaysSlice.reducer