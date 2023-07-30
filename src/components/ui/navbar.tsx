import { Button, Input, Link, Space } from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";
import Avatar, { genConfig } from "react-nice-avatar";

const config = genConfig({ sex: "man", hairStyle: "mohawk" });
const ButtonGroup = Button.Group;

const Navbar = () => {
  // return (
  //   <div className="border-b border-slate-800 p-3 ">
  //     <div className="container flex justify-between">
  //       <h4 className="text-4xl text-white">Navbar</h4>
  //       <Space size={40}>
  //         <Input className="w-72" />
  //         <Avatar className="w-8 h-8" {...config} />
  //       </Space>
  //     </div>
  //   </div>
  // );
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
          <Input className="w-72" placeholder="search..." />

          <Avatar className="w-8 h-8" {...config} />
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
