import { useContext } from 'react'
import { RootStoreModel, StoreContext } from "..";

export const useStore = (): RootStoreModel => useContext(StoreContext);