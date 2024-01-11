import { Button, Card } from "antd";
import * as React from "react";

const { Meta } = Card;
const CardComponent:React.FC<{ title: string; src: string }>= (props) => {
  return (
    <>
      <Card
        style={{ width: 180 }}
        cover={
          <img
            alt="example"
            src={props.src}
          />
        }
        actions={[
          <Button type="primary">Practical</Button>,
          <Button type="primary">VR</Button>,
        ]}
      >
        <Meta title={props.title} />
      </Card>
    </>
  );
};

export default CardComponent;
