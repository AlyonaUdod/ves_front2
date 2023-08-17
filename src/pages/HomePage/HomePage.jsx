import { Space, Table, Tag, Button, Input } from 'antd';
import { useState } from 'react'
import data from './data';
const { Column } = Table;

const HomePage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const start = () => {
  //   setLoading(true);
  //   // ajax request after empty completing
  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding:'24px'}}>
        <Input.Search placeholder="input search text" onSearch={onSearch} enterButton style={{marginRight: '24px'}} />
        <Button disabled={!selectedRowKeys.length} type='primary'>Export excel</Button>
      </div>
      <Table
        rowSelection={rowSelection}
        bordered
      style={{ padding: '0 24px' }}
      dataSource={data}
        size="small"
        pagination={{ pageSize: 10 }}
        scroll={{
          y: 300, x: 'auto'
        }}
      expandable={{
        expandedRowRender: record => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
      }}
    >
      {/* <ColumnGroup title="Name"> */}
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
      {/* </ColumnGroup> */}
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="e-mail" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
      <Column title="Country background" dataIndex="cb" key="cb" />
      <Column title="City" dataIndex="city" key="city" />
      <Column title="Gender" dataIndex="gender" key="gender" />
      <Column
        title="Diversity level"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <>
            {tags.map(tag => (
              <Tag color={tag === 'k' ? 'blue' : tag === 't' ? 'green' : 'red'} key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button type='link'>Invite {record.lastName}</Button>
          </Space>
        )}
      />
      </Table>
      </>
  );
};

export default HomePage;
