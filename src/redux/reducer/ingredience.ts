import { createSlice } from "@reduxjs/toolkit";
import { DataReceipe } from "../type/ingredience";
// Nasi putih 1 piring
// Bawang putih 2 siung, cincang halus
// Kecap manis atau kecap asin sesuai selera
// Saus sambal sesuai selera
// Saus tiram sesuai selera
// Garam secukupnya
// Kaldu bubuk rasa ayam atau sapi sesuai selera
// Daun bawang 1 batang, cincang halus
// Telur ayam 1 butir
// Sosis ayam 1 buah, iris tipis
// Margarin atau minyak goreng 3 sdm
interface AppReducerState {
    listDefault: Array<string>;
    listProcedures: Array<string> | [];
    listRecipe: DataReceipe[] | [];
    inputReceipe: string;
    inputProcedures: string;
    inputValueRecipe: string;
}

const initialState = {
    listDefault: ['Nasi putih', 'Bawang putih', 'Daun bawang', 'Telur ayam', 'Sosis ayam', 'Minyak goreng'],
    listProcedures: [],
    listRecipe: [],
    inputReceipe: '',
    inputProcedures: '',
    inputValueRecipe: ''
} as AppReducerState


export const ingredienceReducer = createSlice({
    name: 'ingredience',
    initialState,
    reducers: {
        addReceipe: (state) => {
            const newReceipe = {
                value: null,
                receipe: state.inputReceipe
            }

            if(state.inputReceipe.length) {
                state.listRecipe.push(newReceipe)
            }

            state.inputReceipe = ''
        },
        editValueRecipe: (state, action) => {
            console.log('index', action.payload)
            state.listRecipe[action.payload].value = state.inputValueRecipe
        },
        deleteReceipe: (state, action) => {
            state.listRecipe = state.listRecipe.filter((list, index) => index !== action.payload);
        },
        editReceipe: (state, action) => {

        },
        addProcedures: (state) => {
            if(state.inputProcedures.length) {
                state.listProcedures.push(state.inputProcedures)
            }

            state.inputProcedures = ''
        },
        valueReceipe: (state, action) => {
            state.inputReceipe = action.payload
        },
        valueProcedures: (state, action) => {
            state.inputProcedures = action.payload;
        },
        handleInputValueReceived: (state, action) => {
            state.inputValueRecipe = action.payload
        }
    }
})

export const {
    addReceipe,
    addProcedures,
    valueReceipe,
    valueProcedures,
    deleteReceipe,
    editValueRecipe,
    handleInputValueReceived
  } = ingredienceReducer.actions;
  
  export default ingredienceReducer.reducer;