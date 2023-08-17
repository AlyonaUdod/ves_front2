import { Button, Result } from 'antd';
import { Link } from 'react-router-dom'
const NotFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to='/'>Go home</Link></Button>}
  />
);
export default NotFoundPage;