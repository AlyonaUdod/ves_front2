import React, { useEffect } from 'react';
import { Button, Form, Input, InputNumber, Select, Checkbox } from 'antd';
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
    console.log(values)
    dispatch(addPerson(values));
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
        "firstName": "Jon",
        "lastName": "Smith",
        "email": "jon.smith@gmail.com",
        "phone": "+4793949394",
        "age": 29,
        "city": "Bergen",
        "profession": "Translator",
        "gender": "man",
        "countryBackground": "England",
        "diversityLevel": "cross-cultural",
        "civilStatus": "single",
        "languageProficiency": "english",
        "educationalLevel": "vocational or technical education",
        "employed": false,
        "comments": "It's a good guy"
    });
  };
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
        name="civilStatus"
        label="Civil Status"
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
          <Option value="single">single</Option>
          <Option value="married">married</Option>
          <Option value="widow/widower">widow/widower</Option>
          <Option value="divorced">divorced</Option>
          <Option value="separated">separated</Option>
          <Option value="registered partner">registered partner</Option>
          <Option value="separated partner">separated partner</Option>
          <Option value="divorced partner">divorced partner</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="educationalLevel"
        label="Educational Level"
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
          <Option value="no formal education">no formal education</Option>
          <Option value="primary education">primary education</Option>
          <Option value="secondary education">secondary education</Option>
          <Option value="lower secondary">lower secondary</Option>
          <Option value="upper secondary">upper secondary</Option>
          <Option value="vocational or technical education">vocational or technical education</Option>
          <Option value="tertiary education or higher education">tertiary education or higher education</Option>
          <Option value="associate degree">associate degree</Option>
          <Option value="bachelor's degree">bachelor's degree</Option>
          <Option value="master's degree">master's degree</Option>
          <Option value="doctorate or Ph.D.">doctorate or Ph.D.</Option>
          <Option value="professional degrees">professional degrees</Option>
          <Option value="post-doctoral or advanced professional training">post-doctoral or advanced professional training</Option>
          <Option value="continuing education">continuing education</Option>
          <Option value="other certifications or qualifications">other certifications or qualifications</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="languageProficiency"
        label="Language Proficiency"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="employed"
        valuePropName="checked"
        // wrapperCol={{
        //   offset: 8,
        //   span: 16,
        // }}
      >
      <Checkbox>Employed/Unemployed</Checkbox>
    </Form.Item>
      <Form.Item
        name="comments"
        label="Comments"
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
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form (test data)
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddPersonForm;
