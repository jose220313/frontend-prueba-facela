import {create} from "zustand";
import axios from "axios";

export interface IUser {
    id?: number;
    fullname: string;
    email: string;
    phone: string;
    isNew?: boolean;
    isUpdated?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface UserState {
    users: IUser[];
    success: string[];
    errors: string[];
    loading: boolean;
    getUsers: () => void;
    addUser: (user: IUser) => void;
    updateUser: (user: IUser) => void;
    deleteUser: (userId: number) => void;
}

const useUserStore = create<UserState>((set) => ({
    users: [],
    success: [],
    errors: [],
    loading: false,
    getUsers: async () => {
        set({loading: true});
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_CONECTION_URL}/api/users`);
            set(() => ({users: res.data, loading: false}));
        } catch (error: any) {
            set(() => ({users: [], loading: false}));
            if (error?.response?.data?.message) {
                set({errors: [error?.response?.data?.message]});
            } else {
                set({
                    errors: ['Error desconocido al obtener las calibraciones activas.'],
                });
            }
        }
    },
    addUser: async (user: IUser) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_CONECTION_URL}/api/users`, user);
            set((state) => ({users: [...state.users, {...res.data?.newUser, isNew: true}]}));
        } catch (error: any) {
            if (error?.response?.data?.message) {
                set({errors: [error?.response?.data?.message]});
            } else {
                set({
                    errors: ['Error desconocido al agregar el usuario.'],
                });
            }
        }
    },
    updateUser: async (user: IUser) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_CONECTION_URL}/api/users/${user.id}`, {
                fullname: user.fullname,
                email: user.email,
                phone: user.phone
            });
            set((state) => ({
                users: state.users.map((u) => (u.id === user.id ? {...res.data?.user, isUpdated: true} : u))
            }));
        } catch (error: any) {
            if (error?.response?.data?.message) {
                set({errors: [error?.response?.data?.message]});
            } else {
                set({
                    errors: ['Error desconocido al actualizar el usuario.'],
                });
            }
        }
    },
    deleteUser: async (userId: number) => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_CONECTION_URL}/api/users/${userId}`);
            set((state) => ({
                users: state.users.filter((user) => user.id !== userId)
            }));
        } catch (error: any) {
            if (error?.response?.data?.message) {
                set({errors: [error?.response?.data?.message]});
            } else {
                set({
                    errors: ['Error desconocido al eliminar el usuario.'],
                });
            }
        }
    }
}));

export default useUserStore;