import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';

const dropList = (
  <Menu>
    <Menu.Item key='1'>Beijing</Menu.Item>
    <Menu.Item key='2'>Shanghai</Menu.Item>
    <Menu.Item key='3'>Guangzhou</Menu.Item>
  </Menu>
);

const Account = () => {
    
    return (
        <Space size='large' className='dropdown-demo'>
            <Dropdown droplist={dropList} trigger='click' position='bl'>
                <Button type='secondary'>
                    Account
                </Button>
            </Dropdown>
        </Space>
    );
}

export default Account