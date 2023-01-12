import { AxiosResponse } from 'axios';
import { instance } from './api-instance';

export const authAPI = {
    // authMe() {
    //   return instance.post<
    //     any,
    //     AxiosResponse<LoginResponseType>,
    //     LoginPayloadType
    //   >(`auth/me`);
    // },

    signUp(data: SignUpPayloadType) {
        return instance.post('users/register', data);
    },

    // login(data: LoginPayloadType) {
    //   return instance.post<
    //     any,
    //     AxiosResponse<LoginResponseType>,
    //     LoginPayloadType
    //   >("auth/login", data);
    // },

    // logout() {
    //   return instance.delete<LogoutResponseType>(`auth/me`);
    // },
};

// ==== TYPES ====

export type SignUpPayloadType = {
    username: string;
    email: string;
    password: string;
    rememberMe?: boolean;
};
