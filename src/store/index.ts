import { types } from 'mobx-state-tree'
import { BoardStore } from './BoardStore'
import { UsersStore } from './UsersStore'

export const RootStore = types
    .model("RootStore", {
        users: types.optional(UsersStore, {}),
        boards: types.optional(BoardStore, {}),
    })