import { Dropdown, Menu, Button, Divider,  } from '@arco-design/web-react';
import Avatar, { genConfig } from "react-nice-avatar";

const config = genConfig({ sex: "man", hairStyle: "mohawk" });
const dropList = (
    <Menu className='w-52 h-84'>
        <div className='flex flex-col pt-1 pl-4 pb-2'>
            <p className='text-sm text-slate-300 font-medium leading-none'>Alabere</p>
            <p className="pt-1 text-slate-600 leading-none text-muted-foreground">Alabere-coder@gmail.com</p>
        </div>
        
        <Divider className="-m-0"/>
        <div>
            <Menu.Item key='1'>Beijing</Menu.Item>
            <Menu.Item key='2'>Shanghai</Menu.Item>
            <Menu.Item key='3'>Guangzhou</Menu.Item>
        </div>
        <Divider className="-m-0"/>
        <Menu.Item key='4' className="-py-2">Log Out</Menu.Item>
    </Menu>
  );


const UserNav = () => {
  return (
    <div className=' w-9 h-9 '>
        <Dropdown droplist={dropList} trigger='click' position='br'>
            <div className="relative h-9 w-9 hover:bg-black rounded-full">
                <Button type='text'>
                    <Avatar className="w-8 h-8 absolute -bottom-1 -right-1" {...config} />
                </Button>
            </div>
        </Dropdown>
    </div>
  )
}

export default UserNav
