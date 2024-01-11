import * as React from "react";
import { useState } from "react";
import { Button, Drawer, Input, Table, Collapse, Checkbox } from "antd";
const { Panel } = Collapse;
import { ApproveStyledButton, StyledArea, StyledButtons } from "./style";
import { useAppDispatch } from "../../../store";
import {
  approvePractical,
  rejectPractical,
} from "../../../store/slices/TeachPracticalSlice";

interface SubmittedValueItem {
  key: string;
  ip1: number;
  ip2: number;
  _Q: number;
}

interface PracticalDataItem {
  userid: number;
  submittedValue: SubmittedValueItem[];
  practicalid: number;
  username: string;
  practicalname: string;
  submittedat: string | null;
  status: string;
  name: string;
  success: boolean;
}

interface CustomModalProps {
  record: PracticalDataItem;
}

const { TextArea } = Input;

const CustomDrawer: React.FC<CustomModalProps> = ({ record }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [comments, setComments] = useState<string>("");
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const displayComments = () => {
    setShowTextArea((prevState) => !prevState);
  };

  const handleOnChangeComments = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComments(e.target.value);
  };

  const onApprove = () => {
    console.log(typeof record.userid,"::",typeof record.practicalid);
    const payload: any = {
      userid: record.userid,
      comments,
      practicalid: record.practicalid,
    };
    dispatch(approvePractical(payload));
  };

  const onReject = () => {
    const payload: any = {
      userid: record.userid,
      comments,
      practicalid: record.practicalid,
    };
    dispatch(rejectPractical(payload));
  };

  const recordArray = Object.values(record);
  const hasData = Array.isArray(recordArray) && recordArray.length > 0;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Practical Preview
      </Button>
      <Drawer
        width={720}
        title="Practical Preview"
        open={isModalVisible}
        onClose={handleCancel}
      >
        <>
          {hasData ? (
            <Collapse accordion>
              {Object.keys(record).map((key) => {
                let content;
                if (key === "submittedat" && Array.isArray(record[key])) {
                  console.log('Key:',key);
                  content = <NestedTable data={record.submittedValue as SubmittedValueItem[]} />;
                } else {
                  content = (
                    <Table
                      columns={[{ dataIndex: key }]}
                      dataSource={[record]}
                      bordered
                      pagination={false}
                      rowKey={(record) => `${record.submittedat}`}
                    />
                  );
                }

                return (
                  <Panel header={key} key={key}>
                    {content}
                  </Panel>
                );
              })}
            </Collapse>
          ) : (
            <p>
              {record && typeof recordArray[0]?.success !== "undefined"
                ? "Error loading data"
                : "Loading..."}
            </p>
          )}
        </>
        <ApproveStyledButton>
          <Checkbox id="commentbtn" onClick={displayComments}>
            <>Approve with comments</>
          </Checkbox>
        </ApproveStyledButton>
        <StyledArea>
          <TextArea
            rows={4}
            placeholder="Add your comments..."
            value={comments}
            onChange={handleOnChangeComments}
            style={{ display: showTextArea ? "block" : "none" }}
          />
        </StyledArea>
        <StyledButtons>
          <Button
            type="primary"
            style={{ backgroundColor: "green" }}
            onClick={onApprove}
          >
            Approve
          </Button>
          <Button type="primary" danger onClick={onReject}>
            Reject
          </Button>
        </StyledButtons>
      </Drawer>
    </>
  );
};

const NestedTable: React.FC<{ data: SubmittedValueItem[] }> = ({ data }) => {
  console.log("data in nested", data);
  if (Array.isArray(data) && data.length > 0) {
    const nestedColumns = Object.keys(data).map((key, index) => ({
      title: key,
      dataIndex: key,
      key: index,
    }));

    return (
      <Table columns={nestedColumns} dataSource={data} pagination={false} />
    );
  } else {
    return <p>No data available for submittedvalue.</p>;
  }
};

export default CustomDrawer;
