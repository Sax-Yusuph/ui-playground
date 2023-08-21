import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';

const dropList = (
  <Menu>
    <Menu.Item key='1'>About Music</Menu.Item>
    <Menu.Item key='2'>Preferences...</Menu.Item>
    <Menu.Item key='3'>Hide Music...</Menu.Item>
    <Menu.Item key='4'>Hide Others...</Menu.Item>
    <Menu.Item key='5'>Quit Music</Menu.Item>
  </Menu>
);

const Music = () => {
    
    return (
        <Space size='large' className='dropdown-demo'>
            <Dropdown droplist={dropList} trigger='click' position='bl'>
                <Button type='secondary'>
                    Music
                </Button>
            </Dropdown>
        </Space>
    );
}

export default Music