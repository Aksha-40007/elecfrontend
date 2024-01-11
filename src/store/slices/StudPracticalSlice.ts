import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store} from "..";

interface PracticalState {
  practicalData: undefined;   //DataType[] | 
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
  isLoggedIn: boolean;
}

const backendURL="http://localhost:7071";


const getAuthToken = () =>{
  const state1 = store.getState();
  const authTokenEnv = state1.currentAuthUser.authToken;
  return authTokenEnv;
}

const userid = localStorage.getItem('userId');
// console.log("Auth:",authTokenEnv);

export const studentSubmittedPractical = createAsyncThunk('StudSubmitPractical',async()=>{
 // const authuser = useAppSelector((state)=>state.currentAuthUser.authUser);
  //console.log("In studentslice authuser",authuser.id); 
  try {
    console.log("In student practical")
    const config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${getAuthToken()}`
            },
            params:{
              userId:`${userid}`
            }
          };

    const submitPracticalsResponse = await axios.get(`${backendURL}/students-submitted-practicals`,config);
    return submitPracticalsResponse.data; // Return user data or status
  } catch (error) {
    throw error;
  }
});

const StudentPracticalSlice = createSlice({
  name: "practical",
  initialState: {  
    practicalData: undefined,
    status: 'idle',
    error: null as string | null,
  } as PracticalState,
  reducers: {},
  extraReducers: (builder)=>{ 
    builder
    .addCase(studentSubmittedPractical.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(studentSubmittedPractical.fulfilled, (state, action) => {
      state.status = 'success';
      state.practicalData = action.payload; // Assuming user data or status is returned
      state.error = null;
    })
    .addCase(studentSubmittedPractical.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Login Failed';
    })
  }
});

export default StudentPracticalSlice.reducer;

export const { reducer: practicalReducer } = StudentPracticalSlice;
export const selectStudentPracticalData = (state:RootState) => state.StudentPracticalSlice.practicalData;
// export const getStudPracticals = (state: RootState) => state.getStudentPracticals;