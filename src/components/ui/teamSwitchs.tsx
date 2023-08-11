import {  Button, Select, Space, Divider } from '@arco-design/web-react';
import { IconPlusCircle  } from '@arco-design/web-react/icon';
const Option = Select.Option;

const data = [
    ['Alabere-coder',],
    ['Max-user', 'Joy-giver'],
  ];

function TeamSwitchs() {

  return (
    <Space size='large' className="pl-10">
      <Select showSearch allowClear
        placeholder='Select or Search a Team' 
        style={{ width: 210 }}>

        {data.map((options, index) => {
          return (
            <Select.OptGroup label={`Team-${index}`} key={index}>
              {options.map((option, _index) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
              
            </Select.OptGroup>
          );
        })}
        <Divider className="m-1 "/>

        <div className="">
          <Button type='text' className="w-full flex gap-8 items-center">
          <IconPlusCircle fontSize={18}/>
            Create Team</Button>
        </div>
 
      </Select>

      
    </Space>
  );
}

export default TeamSwitchs;