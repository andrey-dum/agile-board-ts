export interface IUser {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
}

export interface IBoardSection {
    id: string;
    title: string;
}
export interface IBoard {
        id: string;
        title: string;
        sections: IBoardSection[];

}