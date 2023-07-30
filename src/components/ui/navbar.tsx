import { Link, Dropdown, Menu, Button, Input, Space } from "@arco-design/web-react";
import Avatar, { genConfig } from "react-nice-avatar";
import { IconDown, IconTwitter, IconGithub, IconSun, IconMoon } from '@arco-design/web-react/icon';

const config = genConfig({ sex: "man", hairStyle: "mohawk" });
const ButtonGroup = Button.Group;

const Navbar = () => {
  return (
    <div className="border-b border-slate-800 p-3 ">
      <div className="container flex justify-between">
        <Space>
          <ButtonGroup>
            <Button>Sax-Loader</Button>
            <Button icon={<IconDown />} />
          </ButtonGroup>
          {/* <Button type='outline' className='hover:bg-slate-200'>
            <p className="text-2xl text-white">Sax-Loader</p>
            <IconDown />
          </Button> */}
          
          {/* <Link href="#" className="text-2xl text-white">Sax-Loader</Link> */}
          <Link href="#">Overview</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Products</Link>
          <Link href="#">Settings</Link>
        </Space>
        
        <Space size={40}>
          
          {/* <h4 className="text-4xl text-white">Sax-Loader</h4> */}
           <Input className="w-72" placeholder="search..."/>
          {/*<IconGithub style={{ fontSize: 30, color: '#fff', marginRight: 20 }} />
          <IconTwitter style={{ fontSize: 30, color: '#fff', marginRight: 20 }} />
          <div className='w-10 space-x-2.5 bg-white'>
            <IconSun />
            <IconMoon />
          </div> */}
          <Avatar className="w-8 h-8" {...config} />
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
