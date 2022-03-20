import axios, { AxiosResponse } from "axios";
import { IUser } from "../types";

const DOMAIN = 'http://localhost:3001';
const USERS_URL = 'users';
const BOARDS_URL = 'boards';

export interface DateResponse<T> {
    data: Array<T>;
    status: number | string;
    statusText: string
  }

export namespace Api {

    export const fetchUsers = async () => {
        const response = await axios.get<DateResponse<IUser>>(
            `${DOMAIN}/${USERS_URL}`,
        );
        return response.data;
    };

    export const updateUser = async (id: string, data: Partial<IUser>) => {
        const response = await axios.post<DateResponse<IUser>>(
            `${DOMAIN}/${USERS_URL}/${id}`,
            { data }
        );
        return response.data;
    };

    export const deleteUser = async (id: string) => {
        const response = await axios.delete<DateResponse<IUser>>(
            `${USERS_URL}/${id}`,
        );
        return response.data;
    };


    
    // export const fetchBoards = async () => {
    //     const response = await axios.get<DateResponse<IBoard>>(
    //         `${DOMAIN}/${BOARDS_URL}`,
    //     );
    //     return response.data;
    // };
}



// export const Api =  {

//     async fetchUsers() {
//         const response = await axios.get<DateResponse<IUser>>(`${USERS_URL}`);
//         return response.data;
//     }

// }
