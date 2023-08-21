import { Link, Input, Space,  } from "@arco-design/web-react";
import UserNav from "./userNav";
import TeamSwitchs from "./teamSwitchs";


const Navbar = () => {

  return (
    
      <div className="container h-20 w-full sticky top-0 z-40 border-b pr-8 bg-black border-slate-800 flex justify-between">
        <Space size={20}>
          <TeamSwitchs />
          <div className='text-white'>
            <Link href="#" className='text-slate-500 hover:text-white'>Overview</Link>
            <Link href="#" className='text-slate-500 hover:text-white'>Customers</Link>
            <Link href="#" className='text-slate-500 hover:text-white'>Products</Link>
            <Link href="#" className='text-slate-500 hover:text-white'>Settings</Link>
          </div>
          <div>
            <Link href="/about" className='text-slate-200 hover:text-white'>Music</Link>
          </div>
        </Space>

        <Space size={20}>
          <Input className="w-72" placeholder="search..." />
          <UserNav />
        </Space>
      </div>
  );
};

export default Navbar;
