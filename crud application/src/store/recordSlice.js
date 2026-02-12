import { createSlice } from "@reduxjs/toolkit"

const demoRecords = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "9876543210",
    position: "Frontend Developer"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phone: "9123456780",
    position: "UI/UX Designer"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    phone: "9988776655",
    position: "Backend Developer"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    phone: "9090909090",
    position: "HR Manager"
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    phone: "9812345678",
    position: "Project Manager"
  },
  {
    id: 6,
    name: "Ananya Singh",
    email: "ananya.singh@example.com",
    phone: "9765432109",
    position: "QA Engineer"
  }
];

// load records from local storage or use the demo data
const loadRecordsFromStorage = () =>{
    try {
        const savedRecords = localStorage.getItem("employeeRecords")
        return savedRecords ? JSON.parse(savedRecords): demoRecords
    } catch (error) {
        console.error("error loading records", error)
    }
}

//calculate next ID based on existing records
const calculateNextId = (records) => {
    if( !records || records.length ===0) return 1;
    return Math.max(...records.map((r)=>r.id)) +1
}

export  const recordsSlice = createSlice({
    name:'records',
    initialState:{
        items: demoRecords,
        searchTerm:"",
        nextId:calculateNextId(loadRecordsFromStorage())
    },
    reducers:{
        addRecord:(state, action) =>{
            const newRecord = {id: state.nextId , ...action.payload};
            state.items.push(newRecord)

            localStorage.setItem("employeeRecords", JSON.stringify(state.items))
            state.nextId = calculateNextId(state.items)
        },
        updateRecords:(state, action)=>{
            const {id, data} = action.payload
            const index = state.items.findIndex((r)=> r.id === id)

            if (index!== -1){
                state.items[index] = {...state.items[index], ...data};
                localStorage.setItem("employeesRecords" , JSON.stringify(state.items))
            }
        },
        deleteRecord:(state, action)=>{
            state.items= state.items.filter((r)=> r.id !== action.payload);
            localStorage.setItem("employeeRecord", JSON.stringify(setitems))
            state.nextId = calculateNextId(state.items)
        },
        setSearchTerm:(state, action)=>{
            state.searchTerm= action.payload
        },
        resetAllRecords:(state, action)=>{
            state.items = demoRecords;
            state.nextId = calculateNextId(demoRecords)
            localStorage.setItem("employeeRecord", JSON.stringify(demoRecords))
        }
    }

})

export const { addRecord, updateRecords, deleteRecord, setSearchTerm, resetAllRecords} = recordsSlice.actions

export const selectAllRecord =(state)=>{state.records.items}
export const selectSearchTerm = (state)=>{state.records.searchTerm}

export const selectFilteredRecords =(state)=>{
    const term = state.records.searchTerm.toLowerCase();
    return state.records.itmes.filter(
        (r)=>{
            r.name.toLowerCase().includes(term)||
            r.email.toLowerCase().includes(term)||
            r.positon.toLowerCase().includes(term)
        }
    )
}

export default recordsSlice.reducer