import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { RootState } from "..";
import axios from "axios";
import * as JWT from 'jwt-decode';
export class User{
  public username?: string;
  public password?:string;
}

const backendURL="http://localhost:7071";
export const login = createAsyncThunk('authLogin', async (credentials:User) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const loginResponse = await axios.post(`${backendURL}/auth/login`, credentials,config); /*https//:localhost:5000*/
      if (loginResponse.status === 200) {
        return loginResponse.data; // Return user data or status
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.log({error});
      throw error;
    }
  }
);

const AuthUserSlice = createSlice({
  name: "auth",
  initialState: {  
    authToken: null,
    authUser: null as null | any,
    status: 'idle',
    error: null as string | null,
    isLoggedIn: false,
  },
  reducers: {
    removeAuthUser(state) {
      state.authToken=null;
      state.authUser=null;
      state.isLoggedIn=false;
      state.status='idle';
      localStorage.clear();
    },
  },
  extraReducers: (builder)=>{ 
    builder
    .addCase(login.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(login.fulfilled, (state, action) => {
      state.status = 'success';
      state.isLoggedIn = true;
      state.authToken = action.payload?.token; 
      localStorage.setItem('userToken',action.payload?.token);
      state.authUser = JWT.jwtDecode(action.payload?.token);
      state.error = null;
    })
    .addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      state.isLoggedIn = false;
      state.authUser = null,
      state.error = action.error.message || 'Login Failed';
    })    
  }
});

export default AuthUserSlice.reducer;

export const {removeAuthUser } = AuthUserSlice.actions;

export const authUserStore = (state: RootState) => state.currentAuthUser;

