import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_GET_TEST_DATA } from '../../Apis/ApiEndPoints';
import { Get } from '../../Apis/AxiosInterceptor';
import { IUser } from '../../models/Dashboard/Dashboard';
import { ICommonResponse } from '../../models/Common/Common';
import { CustomAction } from '../../store/customAction';

export const GetTestData = createAsyncThunk(
  "testData",
  async (_,{dispatch}) => {
    const data: IUser[] = await CustomAction(Get(API_GET_TEST_DATA), dispatch, 'testData');
    return data; 
  }
);
