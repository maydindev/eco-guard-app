import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: "Bedroom", status: "Good", airTemperature: null, humidity: null, waterTemperature: null, ph: null},
    { id: 2, name: "Backyard", status: "Average", airTemperature: null, humidity: null, waterTemperature: null  },
    { id: 3, name: "Living Room", status: "Good", airTemperature: null, humidity: null, waterTemperature: null  },
  ]

/*
  const initialState = {
    rooms: {
      room1: { temperature: null, humidity: null },
      room2: { temperature: null, humidity: null },
      room3: { temperature: null, humidity: null },
    },
    water: { temperature: null, ph: null },
    status: 'idle',
    error: null,
  };
*/

export const fetchSensorData = createAsyncThunk('sensor/fetchSensorData', async () => {
  const response = await fetch('/api/sensorData');
  if (!response.ok) {
    throw new Error('Failed to fetch sensor data');
  }
  return await response.json();
});

const sensorSlice = createSlice({
  name: 'sensor',
  initialState,
  reducers: {
    updateSensorData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSensorData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSensorData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //return { ...state, ...action.payload }; // HATA: Immer draft'ı değiştirirken yeni bir state döndürüyorsunuz
        Object.assign(state, action.payload); // Immer ile doğrudan state’i güncelliyoruz.  Immer’ın hem state’i değiştirmesine hem de yeni bir state döndürmesine engel olmuş oluyorsunuz.

      })
      /*.addCase(fetchSensorData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });*/
  },
});

export const { updateSensorData } = sensorSlice.actions;
export default sensorSlice.reducer;
