import { Space, Table, Button, Input, Modal, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { getPersons } from 'redux/persons/personsOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoadingPersons,
  selectPersons,
} from 'redux/persons/personsSelectors';
import AddPersonForm from 'components/AddPersonForm/AddPersonForm';
import { selectUser } from 'redux/auth/authSelectors';
const { Column } = Table;

const HomePage = () => {
  const onSearch = value => console.log(value);
  const dispatch = useDispatch();
  const persons = useSelector(selectPersons);
  const isLoading = useSelector(isLoadingPersons);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (isLoading === 'success added') {
      setIsModal(false);
    }
  }, [isLoading]);

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
        {user.role === 'admin' && (
          <Button type="primary" onClick={() => setIsModal(true)}>
            Add person
          </Button>
        )}
      </div>
      <Table
        // rowSelection={rowSelection}
        bordered
        rowKey="_id"
        style={{ padding: '0 24px' }}
        dataSource={persons}
        size="small"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1500, y: 300 }}
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
        <Column
          title="First Name"
          dataIndex="firstName"
          key="firstName"
          width="100px"
          render={(_, record) =>
            user.role === 'presenter' ? <p>----</p> : record.firstName
          }
        />
        <Column
          title="Last Name"
          dataIndex="lastName"
          key="lastName"
          width="100px"
          render={(_, record) =>
            user.role === 'presenter' ? <p>----</p> : record.lastName
          }
        />
        <Column title="Age" dataIndex="age" key="age" width="60px" />
        <Column
          title="E-mail"
          dataIndex="email"
          key="email"
          width="200px"
          render={(_, record) =>
            user.role === 'presenter' ? <p>----</p> : record.email
          }
        />
        <Column
          title="Phone"
          dataIndex="phone"
          key="phone"
          width="150px"
          render={(_, record) =>
            user.role === 'presenter' ? <p>----</p> : record.phone
          }
        />
        <Column
          title="Profession"
          dataIndex="profession"
          key="profession"
          width="150px"
        />
        <Column
          title="Country background"
          dataIndex="countryBackground"
          key="countryBackground"
          width="150px"
        />
        <Column title="City" dataIndex="city" key="city" width="120px" />
        <Column title="Gender" dataIndex="gender" key="gender" width="100px" />
        <Column
          title="Diversity level"
          dataIndex="diversityLevel"
          key="diversityLevel"
          width="150px"
        />
        <Column
          title="Civil Status"
          dataIndex="civilStatus"
          key="civilStatus"
          width="150px"
        />
        <Column
          title="Language Proficiency"
          dataIndex="languageProficiency"
          key="languageProficiency"
          width="100px"
        />
        <Column
          title="Educational Level"
          dataIndex="educationalLevel"
          key="educationalLevel"
          width="200px"
        />
        <Column
          title="Employed"
          dataIndex="employed"
          key="employed"
          width="100px"
          render={(_, record) => <p>{record.employed ? 'yes' : 'no'}</p>}
        />
        <Column
          title="Action"
          key="action"
          // fixed="right"
          // width="400"
          width="150px"
          render={(_, record) => (
            <Space size="middle">
              <Button type="link">Invite {user.role !== 'presenter' ? record.firstName : '----'}</Button>
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
        style={{ margin: '20px 0' }}
      >
        <AddPersonForm />
      </Modal>
    </>
  );
};

export default HomePage;
