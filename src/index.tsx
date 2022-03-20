import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStore } from './store';
import { Instance } from 'mobx-state-tree';

// const createStore = (): RootStoreModel => {
//   // const publishedPolls = PublishedPolls.create()
//   // const pollDraft = PollDraft.create()

//   return RootStore.create({ } as RootStoreModel)
// }
// const rootStore = createStore()

const rootStore: RootStoreModel = RootStore.create({} as RootStoreModel)
export type RootStoreModel = Instance<typeof RootStore>

export const StoreContext = createContext(rootStore)

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
    <App />
    </StoreContext.Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

