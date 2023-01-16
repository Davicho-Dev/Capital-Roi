import { configureStore } from '@reduxjs/toolkit'

const RTKStore = configureStore({
	reducer: {}
})

export default RTKStore
export type RootState = ReturnType<typeof RTKStore.getState>
export type AppDispatch = typeof RTKStore.dispatch
