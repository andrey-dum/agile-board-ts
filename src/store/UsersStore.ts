import { types, flow, Instance } from 'mobx-state-tree'
import { Api } from '../api'

const User = types.model('User', {
    id: types.identifier,
    createdAt: types.string,
    name: types.string,
    avatar: types.string,
    
})
 

export const UsersStore = types
    .model("RootStore", {
        users: types.maybe(types.array(User))
    })
    .actions(self => {
        const load = flow(function* () {
            self.users = yield Api.fetchUsers();
        })

        return {
            load,
            afterCreate() {
                load()
            }
        }
        
    })
 
    // .actions((self) => ({
    //     load: flow(function* () {
    //         self.users = yield Api.fetchUsers();
    //         afterCreate() {
    //             self.load()
    //         }
    //     }),
        
    // }))

