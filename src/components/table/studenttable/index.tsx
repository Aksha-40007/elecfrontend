import * as React from 'react';
import { useEffect } from 'react';
import { Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store';
import { studentSubmittedPractical, selectStudentPracticalData } from '../../../store/slices/StudPracticalSlice';

interface PracticalDataItem {
  practicalid: string;
  username: string;
  practicalname: string;
  submittedat: string | null;
  status: string;
}

interface PracticalData {
  success: boolean;
  data: PracticalDataItem[];
}

const StudTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const practicalData = useAppSelector(selectStudentPracticalData) as unknown as PracticalData;

  useEffect(() => {
    dispatch(studentSubmittedPractical());
  }, [dispatch]);

  const hasData = practicalData && practicalData.success && Array.isArray(practicalData.data) && practicalData.data.length > 0;

  const columns = hasData
    ? [
        { title: 'Username', dataIndex: 'username', key: 'username' },
        { title: 'Practical Name', dataIndex: 'practicalname', key: 'practicalname' },
        { title: 'Submitted Date', dataIndex: 'submittedat', key: 'submittedat' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
      ]
    : [];


  return (
    <>
      {hasData ? (
        <Table columns={columns} dataSource={practicalData.data} bordered pagination={false} rowKey={(record)=>`${record.submittedat}`} />
      ) : practicalData && !practicalData.success ? (
        <p>Error loading data.</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default StudTable;
