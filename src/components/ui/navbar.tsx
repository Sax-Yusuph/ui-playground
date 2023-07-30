import { Link, Button, Input, Space } from "@arco-design/web-react";
import Avatar, { genConfig } from "react-nice-avatar";
import { IconDown } from '@arco-design/web-react/icon';

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
  
          <Link href="#">Overview</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Products</Link>
          <Link href="#">Settings</Link>
        </Space>
        
        <Space size={40}>
        
           <Input className="w-72" placeholder="search..."/>
          
          <Avatar className="w-8 h-8" {...config} />
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
