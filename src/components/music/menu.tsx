import Music from "./nav/music";
import File from "./nav/file";
import Edit from "./nav/edit";
import View from "./nav/view";
import Account from "./nav/account";
import { Link } from "@arco-design/web-react";


const NavMenu = () => {
    
    return (
        <div className="flex gap-2 pl-4 sticky">
           <Music />
           <File />
           <Edit />
           <View />
           <Account />
           <div>
            <Link href="/" className='text-slate-200 hover:text-white'>Home</Link>
          </div>
        </div>
    );
}

export default NavMenu
