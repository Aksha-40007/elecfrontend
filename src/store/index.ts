import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import AuthUserReducer from "./slices/AuthUserSlice";
import StudentPracticalReducer from "./slices/StudPracticalSlice";
import TeacherPracticalReducer from "./slices/TeachPracticalSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define your root state type
type RootReducer = {
  currentAuthUser: ReturnType<typeof AuthUserReducer>;
  StudentPracticalSlice: ReturnType<typeof StudentPracticalReducer>;
  TeacherPracticalSlice: ReturnType<typeof TeacherPracticalReducer>;
};

const rootReducer: Reducer<RootReducer> = combineReducers({
  currentAuthUser: AuthUserReducer,
  StudentPracticalSlice: StudentPracticalReducer,
  TeacherPracticalSlice: TeacherPracticalReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
