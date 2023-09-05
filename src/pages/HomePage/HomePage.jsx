import { Space, Table, Button, Input, Modal, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { getPersons } from 'redux/persons/personsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingPersons, selectPersons } from 'redux/persons/personsSelectors';
import AddPersonForm from 'components/AddPersonForm/AddPersonForm';
const { Column } = Table;

const HomePage = () => {
  const onSearch = value => console.log(value);
  const dispatch = useDispatch();
  const persons = useSelector(selectPersons);
  const isLoading = useSelector(isLoadingPersons);

  useEffect(() => {
    if (isLoading === 'success added') {
      setIsModal(false);
    };
  }, [isLoading])

  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);
  console.log(persons);

  const [isModal, setIsModal] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const handleCancel = () => {
    setPopupOpen(true);
  };

  const handlePopupConfirm = () => {
    setIsModal(false);
    setPopupOpen(false);
  };

  const handlePopupCancel = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '24px',
        }}
      >
        <Input.Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ marginRight: '24px' }}
        />
        {/* <Button disabled={!selectedRowKeys.length} type="primary">
          Export excel
        </Button> */}
        <Button type='primary' onClick={() => setIsModal(true)}>Add person</Button>
      </div>
      <Table
        // rowSelection={rowSelection}
        bordered
        rowKey="_id"
        style={{ padding: '0 24px' }}
        dataSource={persons}
        size="small"
        pagination={{ pageSize: 10 }}
        scroll={{
          y: 300,
          x: 'auto',
        }}
        expandable={{
          expandedRowRender: record => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.comments}
            </p>
          ),
        }}
      >
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="e-mail" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Profession" dataIndex="profession" key="profession" />
        <Column
          title="Country background"
          dataIndex="countryBackground"
          key="countryBackground"
        />
        <Column title="City" dataIndex="city" key="city" />
        <Column title="Gender" dataIndex="gender" key="gender" />
        <Column title="Diversity level" dataIndex="diversityLevel" key="diversityLevel" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link">
                Invite {record.firstName} {record.lastName}
              </Button>
            </Space>
          )}
        />
      </Table>
      <Popconfirm
        title="Are you sure you want to close this modal?"
        open={popupOpen}
        onConfirm={handlePopupConfirm}
        onCancel={handlePopupCancel}
        okText="Yes"
        cancelText="No"
      />
      <Modal
        centered
        title="Add Person"
        open={isModal}
        // onOk={() => console.log('ok')}
        footer={null}
        onCancel={handleCancel}
        style={{margin: '20px 0'}}
      >
        <AddPersonForm/>
      </Modal>
    </>
  );
};

export default HomePage;
