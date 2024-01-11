import * as React from 'react';
import { useEffect } from 'react';
import { Table, Space, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store';
import { teacherSubmittedPractical, selectTeacherPracticalData } from '../../../store/slices/TeachPracticalSlice';
import CustomDrawer from './CustomDrawer'; // Adjust the import path if needed

interface PracticalDataItem {
  practicalid: number;
  userid:number;
  username: string;
  practicalname: string;
  submittedat: string | null;
  status: string;
  name: string;
  type:string;
}

interface PracticalData {
  success: boolean;
  data: PracticalDataItem[];
}

const TeachTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const practicalData = useAppSelector(selectTeacherPracticalData) as unknown as PracticalData;

  useEffect(() => {
    dispatch(teacherSubmittedPractical());
  }, [dispatch]);

  const hasData = practicalData && practicalData.success && Array.isArray(practicalData.data) && practicalData.data.length > 0;

  const columns = hasData
    ? [
        { title: 'Username', dataIndex: 'username', key: 'username' },
        { title: 'Practical Name', dataIndex: 'practicalname', key: 'practicalname' },
        { title: 'Submitted Date', dataIndex: 'submittedat', key: 'submittedat' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        { title:'Userid',dataIndex:'userid',key:'userid',hidden:true},
        {
          title: 'Action',
          key: 'action',
          render: (_: any,record:any) => (
            <Space size="middle">
              <CustomDrawer record={record}/>
            </Space>
          ),
        },
      ]
    : [];

  return (
    <>
      {hasData ? (
        <Table columns={columns.filter((column) => !column.hidden)} dataSource={practicalData.data} bordered pagination={false} rowKey={(record) => `${record.submittedat}`}/>
      ) : practicalData && !practicalData.success ? (
        <p>Error loading data.</p>
      ) : (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
    </>
  );
};

export default TeachTable;
