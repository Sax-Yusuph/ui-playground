import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';

const dropList = (
  <Menu>
    <Menu.Item key='1'>Show Playing Next</Menu.Item>
    <Menu.Item key='2'>Show Lyrics</Menu.Item>
    <Menu.Item key='3'>Show Status Bar</Menu.Item>
    <Menu.Item key='2'>Hide Sidebar</Menu.Item>
    <Menu.Item key='3'>Enter Full Screen</Menu.Item>
  </Menu>
);

const View = () => {
    
    return (
        <Space size='large' className='dropdown-demo'>
            <Dropdown droplist={dropList} trigger='click' position='bl'>
                <Button type='secondary'>
                    View
                </Button>
            </Dropdown>
        </Space>
    );
}

export default View