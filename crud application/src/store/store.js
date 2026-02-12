import {configureStore} from '@reduxjs/toolkit'
import { recordsSlice } from './recordSlice'

export const store= configureStore({
    reducer:{
        records: recordsSlice
    }
})

