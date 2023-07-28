import { Input, Space } from "@arco-design/web-react";
import Avatar, { genConfig } from "react-nice-avatar";

const config = genConfig({ sex: "man", hairStyle: "mohawk" });

const Navbar = () => {
  return (
    <div className="border-b border-slate-800 p-3 ">
      <div className="container flex justify-between">
        <h4 className="text-4xl text-white">Navbar</h4>
        <Space size={40}>
          <Input className="w-72" />
          <Avatar className="w-8 h-8" {...config} />
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
