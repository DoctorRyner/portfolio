import * as Root from "../reducers/root"
import {createStore, combineReducers} from "redux"
import {useSelector} from "react-redux"

export type StoreState = {
  root: Root.State
}

const combinedReducers = combineReducers ({
  root: Root.reducer
})

export const store = createStore (combinedReducers)

export const useAppState = <A> (f: (state: StoreState) => A): A => useSelector (f)