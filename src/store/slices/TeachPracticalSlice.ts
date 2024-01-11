import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, store} from "..";

interface Approve{
  userId?:number;
  practicalId?: number;
  remark?:string | null;
}

interface PracticalState {
  practicalData: any;   //DataType[] | 
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

export const teacherSubmittedPractical = createAsyncThunk('TeachSubmitPractical',async()=>{
  try {
    const submitPracticalsResponse = await axios.get(`${backendURL}/submitted-practicals`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
    return submitPracticalsResponse.data; // Return user data or status
  } catch (error) {
    console.error('Error in teacherDashboard:', error);
    throw error;
  }
});

export const approvePractical = createAsyncThunk('ApprovePractical',async(Approve:Approve)=>{
  try{
    const config={
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      },
    }
    const approveSubmittedPractical = await axios.post(`${backendURL}/approve-practical`,Approve,config);
    return approveSubmittedPractical;
  }catch(error){
        console.error('Error in teacherDashboard:', error);
    throw error;
  }
});

export const rejectPractical = createAsyncThunk('RejectPractical',async(Reject:Approve)=>{
  try{
    const config={
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      },
    }
    const approveSubmittedPractical = await axios.post(`${backendURL}/approve-practical`,Reject,config);
    return approveSubmittedPractical;
  }catch(error){
        console.error('Error in teacherDashboard:', error);
    throw error;
  }
});

const TeacherPracticalSlice = createSlice({
  name: "practical",
  initialState: {  
    practicalData: undefined,
    status: 'idle',
    error: null as string | null,
  } as PracticalState,
  reducers: {},
  extraReducers: (builder)=>{ 
    builder
    .addCase(teacherSubmittedPractical.pending,(state)=>{
      state.status ='loading';
    })
    .addCase(teacherSubmittedPractical.fulfilled, (state, action) => {
      state.status = 'success';
      state.practicalData = action.payload; // Assuming user data or status is returned
      state.error = null;
    })
    .addCase(teacherSubmittedPractical.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Login Failed';
    })
    .addCase(approvePractical.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(approvePractical.fulfilled, (state, action)=>{
      state.status = 'success';
      state.practicalData = action.payload;
      state.error= null; 
    })
    .addCase(approvePractical.rejected,(state,action)=>{
      state.status = 'failed';
      state.error = action.error.message || 'Login Failed';
    })
    .addCase(rejectPractical.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(rejectPractical.fulfilled, (state, action)=>{
      state.status = 'success';
      state.practicalData = action.payload;
      state.error= null; 
    })
    .addCase(rejectPractical.rejected,(state,action)=>{
      state.status = 'failed';
      state.error = action.error.message || 'Login Failed';
    })
  }
});

export default TeacherPracticalSlice.reducer;
export const selectTeacherPracticalData = (state:RootState) => state.TeacherPracticalSlice.practicalData;
// export const getStudPracticals = (state: RootState) => state.getStudentPracticals;