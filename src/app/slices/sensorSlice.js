import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//PM2.5, gerçek zamanlı hava kalitesini ölçen bir ölçektir. Değerleri 0 - 500 arasında değişir. PM2.5 göstergesi, ortamdaki havanın kalitesine ilişkin sizi gerçek zamanlı olarak bilgilendirmek için Philips Hava Temizleme Cihazınızın hava kalitesi ışık halkasına/çubuğuna bağlıdır.



const initialState = [
  {
    id: 1,
    name: "Bedroom",
    image: "/icondashboardbed.png",
    status: "Good",
    pm25: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 40 },
        ],
        "1D": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 20 },
          { name: "50", value: 30 },
        ],
        "1W": [
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 20 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      } 
    },
    airTemperature: {
      unit: "°C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 25 }, 
        "1D": 
          { condition: "Good", value: 23 }, 
        "1W": 
          { condition: "Bad", value: 40 }, 
        "1M": 
          { condition: "Average", value: 27 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 62 }, 
        "1D": 
          { condition: "Average", value: 55 }, 
        "1W": 
          { condition: "Good", value: 35 }, 
        "1M": 
          { condition: "Bad", value: 80 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 20 },
          { name: "20", value: 40 },
          { name: "30", value: 20 },
          { name: "40", value: 10 },
          { name: "50", value: 30 },
        ],
        "1D": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ],
        "1W": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 40 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 10 },
          { name: "20", value: 10 },
          { name: "30", value: 10 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      }
    },
    voc: [
      {
        compound: "Benzene",
        amount : 50,
        condition: "Bad"
      },
      {
        compound: "Toluene",
        amount : 30,
        condition: "Average"
      },
      {
        compound: "Gas3",
        amount : 20,
        condition: "Good"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 43 }, 
        "1D": 
          { condition: "Good", value: 22 }, 
        "1W": 
          { condition: "Bad", value: 60 }, 
        "1M": 
          { condition: "Average", value: 30 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.2 }, 
        "1D": 
          { condition: "Average", value: 8.6 }, 
        "1W": 
          { condition: "Good", value: 7.5 }, 
        "1M": 
          { condition: "Good", value: 7.7 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 570 }, 
        "1D": 
          { condition: "Good", value: 115 }, 
        "1W": 
          { condition: "Good", value: 270 }, 
        "1M": 
          { condition: "Average", value: 436 }, 
      }
    },
  },
  {
    id: 2,
    name: "Backyard",
    image: "/icondashboardbackyard.png",
    status: "Average",
    pm25: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 40 },
        ],
        "1D": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 20 },
          { name: "50", value: 30 },
        ],
        "1W": [
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 20 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      } 
    },
    airTemperature: {
      unit: "°C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 25 }, 
        "1D": 
          { condition: "Good", value: 23 }, 
        "1W": 
          { condition: "Bad", value: 40 }, 
        "1M": 
          { condition: "Average", value: 27 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 62 }, 
        "1D": 
          { condition: "Average", value: 55 }, 
        "1W": 
          { condition: "Good", value: 35 }, 
        "1M": 
          { condition: "Bad", value: 80 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart: {
        "1H": [
          { name: "10", value: 20 },
          { name: "20", value: 40 },
          { name: "30", value: 20 },
          { name: "40", value: 10 },
          { name: "50", value: 30 },
        ],
        "1D": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ],
        "1W": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 40 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 10 },
          { name: "20", value: 10 },
          { name: "30", value: 10 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      }
    },
    voc: [
      {
        compound: "Benzene",
        amount : 50,
        condition: "Bad"
      },
      {
        compound: "Toluene",
        amount : 30,
        condition: "Average"
      },
      {
        compound: "Gas3",
        amount : 20,
        condition: "Good"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 43 }, 
        "1D": 
          { condition: "Good", value: 22 }, 
        "1W": 
          { condition: "Bad", value: 60 }, 
        "1M": 
          { condition: "Average", value: 30 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.2 }, 
        "1D": 
          { condition: "Average", value: 8.6 }, 
        "1W": 
          { condition: "Good", value: 7.5 }, 
        "1M": 
          { condition: "Good", value: 7.7 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 570 }, 
        "1D": 
          { condition: "Good", value: 115 }, 
        "1W": 
          { condition: "Good", value: 270 }, 
        "1M": 
          { condition: "Average", value: 436 }, 
      }
    },
  },
  {
    id: 3,
    name: "Living Room",
    image: "/icondashboardlivingroom.png",
    status: "Good",
    pm25: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 40 },
        ],
        "1D": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 20 },
          { name: "50", value: 30 },
        ],
        "1W": [
          { name: "10", value: 10 },
          { name: "20", value: 20 },
          { name: "30", value: 10 },
          { name: "40", value: 20 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 20 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      }
    },
    airTemperature: {
      unit: "°C",
      unitPerValue: 45,
      chart : {
        "1H": 
          { condition: "Good", value: 25 }, 
        "1D": 
          { condition: "Good", value: 23 }, 
        "1W": 
          { condition: "Bad", value: 40 }, 
        "1M": 
          { condition: "Average", value: 27 }, 
      }
    },
    humidity: {
      unit: "%",
      unitPerValue: 100,
      chart : {
        "1H": 
          { condition: "Average", value: 62 }, 
        "1D": 
          { condition: "Average", value: 55 }, 
        "1W": 
          { condition: "Good", value: 35 }, 
        "1M": 
          { condition: "Bad", value: 80 }, 
      }
    },
    co2: {
      current : "9",
      condition : "Vary",
      chart : {
        "1H": [
          { name: "10", value: 20 },
          { name: "20", value: 40 },
          { name: "30", value: 20 },
          { name: "40", value: 10 },
          { name: "50", value: 30 },
        ],
        "1D": [
          { name: "10", value: 10 },
          { name: "20", value: 30 },
          { name: "30", value: 20 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ],
        "1W": [
          { name: "10", value: 20 },
          { name: "20", value: 20 },
          { name: "30", value: 30 },
          { name: "40", value: 40 },
          { name: "50", value: 10 },
        ],
        "1M":[
          { name: "10", value: 10 },
          { name: "20", value: 10 },
          { name: "30", value: 10 },
          { name: "40", value: 30 },
          { name: "50", value: 40 },
        ]
      } 
    },
    voc: [
      {
        compound: "Benzene",
        amount : 60,
        condition: "Good"
      },
      {
        compound: "Toluene",
        amount : 30,
        condition: "Average"
      },
      {
        compound: "Gas3",
        amount : 10,
        condition: "Bad"
      },
    ],
    waterTemperature: {
      chart : {
        "1H": 
          { condition: "Average", value: 43 }, 
        "1D": 
          { condition: "Good", value: 22 }, 
        "1W": 
          { condition: "Bad", value: 60 }, 
        "1M": 
          { condition: "Average", value: 30 }, 
      }
    },
    ph: {
      unitPerValue: 10,
      chart : {
        "1H": 
          { condition: "Bad", value: 6.2 }, 
        "1D": 
          { condition: "Average", value: 8.6 }, 
        "1W": 
          { condition: "Good", value: 7.5 }, 
        "1M": 
          { condition: "Good", value: 7.7 }, 
      }
    },
    tds: {
      unitPerValue: 600,
      chart : {
        "1H": 
          { condition: "Bad", value: 570 }, 
        "1D": 
          { condition: "Good", value: 115 }, 
        "1W": 
          { condition: "Good", value: 270 }, 
        "1M": 
          { condition: "Average", value: 436 }, 
      }
    },
  }
];

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


export const fetchSensorData = createAsyncThunk(
  "sensor/fetchSensorData",
  async () => {
    const response = await fetch("/api/sensorData");
    if (!response.ok) {
      throw new Error("Failed to fetch sensor data");
    }
    return await response.json();
  }
);


const sensorSlice = createSlice({
  name: "sensor",
  initialState,
  reducers: {
    updateSensorData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSensorData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSensorData.fulfilled, (state, action) => {
        state.status = "succeeded";
        //return { ...state, ...action.payload }; // HATA: Immer draft'ı değiştirirken yeni bir state döndürüyorsunuz
        Object.assign(state, action.payload); // Immer ile doğrudan state’i güncelliyoruz.  Immer’ın hem state’i değiştirmesine hem de yeni bir state döndürmesine engel olmuş oluyorsunuz.
      });
    /*.addCase(fetchSensorData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });*/
  },
});

export const { updateSensorData } = sensorSlice.actions;
export default sensorSlice.reducer;
