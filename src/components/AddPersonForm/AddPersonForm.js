import React, { useEffect } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from 'redux/persons/personsOperations';
import { isLoadingPersons } from 'redux/persons/personsSelectors';

const { Option } = Select;


const AddPersonForm = () => {

  const formRef = React.useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingPersons);

  useEffect(() => {
    if (isLoading === 'success added') {
      formRef.current.resetFields()
    };
  }, [isLoading])


  const onFinish = values => {
    dispatch(addPerson(values));
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  // const onFill = () => {
  //   formRef.current?.setFieldsValue({
  //     firstName: "Alona",
  //     lastName: "Udod",
  //     email: "alona1@gmail.com",
  //     phone: "+4793945868",
  //     profession: 'Frisor',
  //     age: 32,
  //     city: "Bekkestua",
  //     // gender: 'woman',
  //     countryBackground: "Ukraine",
  //     // diversityLevel: 'monocultural',
  //     comments: "some comments"
  //   });
  // };
  return (
    <Form
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      layout="vertical"
      size="small"
    >
      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          }
        ]}
      >
        <InputNumber min={0} max={99} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            required: true,
          },
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="profession"
        label="Profession"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="countryBackground"
        label="Country background"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="diversityLevel"
        label="Diversity level"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="monocultural">monocultural</Option>
          <Option value="multicultural">multicultural</Option>
          <Option value="cross-cultural">cross-cultural</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="comments"
        label="Comments"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading === 'add person'}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        {/* <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
    </Form>
  );
};
export default AddPersonForm;
