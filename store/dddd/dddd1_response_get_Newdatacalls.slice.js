import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const dddd1_get__read = createAsyncThunk(
  "dddd1_response_get_Newdatacalls/dddd1_get__read",
  async payload => {
    const response = await apiService.dddd1_get__read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dddd1_response_get_NewdatacallsSlice = createSlice({
  name: "dddd1_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [dddd1_get__read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [dddd1_get__read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [dddd1_get__read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { dddd1_get__read, slice: dddd1_response_get_NewdatacallsSlice }
