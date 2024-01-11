import * as React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageNotFound:React.FC = () => {
  const navigate = useNavigate();
  const  handleClick = ()=>{
    navigate('/');
  };
  React.useEffect(()=>{
  },[navigate]);
  return(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
  />
);
}

export default PageNotFound

