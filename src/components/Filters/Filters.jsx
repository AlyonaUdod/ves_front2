import React from 'react';
import { Checkbox, Divider } from 'antd';
const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  'Ukraine',
  'Poland',
  // 'China',
  'Romania',
  'West Europe',
  'East Europe',
  'Ukraine',
  'Poland',
  // 'China',
  'Romania',
  'West Europe',
  'East Europe',
];
const city = [
  'Oslo',
  'Bergen',
  'Hastad',
  'Tromso',
  'Oslo',
  'Bergen',
  'Hastad',
  'Tromso',
  'Oslo',
  'Bergen',
  'Hastad',
  'Tromso',
]
const age = [
  '18-25',
  '26-35',
  '35-44',
  '44-65',
  '65+'
]
const gender = [
  'm', 'w', 'u'
]
const divLevel = [
  'k', 't', 'g',
]

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
// ];

const Filters = () => {
  // const [checkedList, setCheckedList] = useState([]);
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        width: '100%',
        paddingLeft: '12px',
        overflow: 'auto'
      }}
    >
      <div>
        <p>Country background</p>
        <CheckboxGroup
          options={plainOptions}
          // value={checkedList}
          onChange={onChange}
        />
        <Divider />
      </div>
      <div>
        <p>City</p>
        <CheckboxGroup
          options={city}
          // value={checkedList}
          onChange={onChange}
        />
        <Divider /> 
      </div>
      <div>
        <p>Gender</p>
        <CheckboxGroup
          options={gender}
          // value={checkedList}
          onChange={onChange}
        />
        <Divider />
      </div>
      <div>
        <p>Age</p>
        <CheckboxGroup
          options={age}
          // value={checkedList}
          onChange={onChange}
        />
        <Divider />
      </div>
      <div>
        <p>Diversity level</p>
        <CheckboxGroup
          options={divLevel}
          // value={checkedList}
          onChange={onChange}
        />
        <Divider />
      </div>
    </div>
  );
};

export default Filters;
