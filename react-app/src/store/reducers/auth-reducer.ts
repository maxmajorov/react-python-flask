import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { authAPI } from '../../api/authorization-api';
import { handleServerAppError, handleServerNetworkError } from '../../utils/error-utils';
import { RootStateType } from '../store';
import { setAppStatusAC } from './app-reducer';

// Типизация state в toolkit Не нужна

// ==== THUNKS ====

export const signUpTC = createAsyncThunk(
    'auth/signUp',
    async (data: { username: string; email: string; password: string }, thunkAPI) => {
        const { username, email, password } = data;

        try {
            thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }));

            const response = await authAPI.signUp({ username, email, password });

            console.log(response);
            if (response) {
                thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }));
                // thunkAPI.dispatch(setAuthInstanceAC({ currentUser: auth.currentUser }));
                return;
            } else {
                return thunkAPI.rejectWithValue({
                    errors: 'Invalid email or password',
                });
            }
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>;
            handleServerNetworkError(err, thunkAPI.dispatch);
            return thunkAPI.rejectWithValue({
                errors: 'Invalid email or password',
            });
        }
    },
);

// export const logoutTC = createAsyncThunk('auth/logout', async (param, thunkAPI) => {
//     try {
//         thunkAPI.dispatch(setAppStatusAC({ status: 'loading' }));
//         await signOut(auth);
//     } catch (e) {
//         const err = e as Error | AxiosError<{ error: string }>;
//         handleServerNetworkError(err, thunkAPI.dispatch);
//         return thunkAPI.rejectWithValue({
//             errors: 'Not exit',
//         });
//     } finally {
//         thunkAPI.dispatch(setAppStatusAC({ status: 'succeeded' }));
//     }
// }
// );

const slice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isSignIn: false,
        currentUser: null,
    },
    reducers: {
        // setAuthInstanceAC(state, action: PayloadAction<{ currentUser: User | null }>) {
        //     //@ts-ignore
        //     state.currentUser = action.payload.currentUser;
        // },
    },
    extraReducers(builder) {
        // builder.addCase(signInWithGoogleTC.fulfilled, state => {
        //     state.isSignIn = true;
        // });
        // builder.addCase(signInWithEmailAndPasswordTC.fulfilled, state => {
        //     state.isSignIn = true;
        // });
        // builder.addCase(logoutTC.fulfilled, state => {
        //     state.isSignIn = false;
        //     state.currentUser = {} as User;
        // });
    },
});

export const authReducer = slice.reducer;

// export const { setAuthInstanceAC } = slice.actions;

// ==== SELECTORS ====

// export const isSignInSelector = (state: RootStateType) => state.auth.isSignIn;

// export const currentUserSelector = (state: RootStateType) => state.auth.currentUser;

// ==== TYPES ====
