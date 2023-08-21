import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';

const dropList = (
  <Menu>
    <Menu.Item key='1'>Undo</Menu.Item>
    <Menu.Item key='2'>Redo</Menu.Item>
    <Menu.Item key='3'>Cut</Menu.Item>
    <Menu.Item key='1'>Copy</Menu.Item>
    <Menu.Item key='2'>Paste</Menu.Item>
    <Menu.Item key='3'>Select All</Menu.Item>
    <Menu.Item key='1'>Deselect All</Menu.Item>
    <Menu.Item key='2'>Smart Dictation...</Menu.Item>
    <Menu.Item key='3'>Emoji & Symbols</Menu.Item>
  </Menu>
);

const Edit = () => {
    
    return (
        <Space size='large' className='dropdown-demo'>
            <Dropdown droplist={dropList} trigger='click' position='bl'>
                <Button type='secondary'>
                    Edit
                </Button>
            </Dropdown>
        </Space>
    );
}

export default Edit