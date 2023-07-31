import { useState } from "react"
import { Link, Button, Input, Space, TreeSelect } from "@arco-design/web-react";
import Avatar, { genConfig } from "react-nice-avatar";


const config = genConfig({ sex: "man", hairStyle: "mohawk" });
const TreeNode = TreeSelect.Node;
const treeData = [
  {
    key: 'node1',
    title: 'personal Acc',
    children: [
      {
        key: 'node2',
        title: 'Sax-User1',
      },
    ],
  },
  {
    key: 'node3',
    title: 'Teams',
    children: [
      {
        key: 'node4',
        title: 'Sax-User2',
      },
      {
        key: 'node5',
        title: 'Sax-User3',
      },
    ],
  },
];



const Navbar = () => {
  // // const [value, setValue] = useState({
  // //   value: 'node2',
  // //   label: <div className="flex items-center gap-x-2">
  // //     <Avatar className="w-4 h-4" {...config} />
  // //     <p>Sax-User1</p>
  // //   </div>,
  // });
  return (
    <div className="border-b border-slate-800 p-3 ">
      <div className="container flex justify-between">
        <Space>
          
          <div className="border-b border-slate-800 p-3 ">
            <div className="flex flex-col">
              {/* <TreeSelect
                labelInValue={true}
                treeData={treeData}
                value={value}
                onChange={(v) => {
                  setValue(v ? {
                    value: v.value,
                    label: <div>
                      <Avatar className="w-4 h-4" {...config} />
                      <span> {v.label}</span>
                    </div>,
                  } : v)
                }}
                style={{ width: 300 }}
                
              /> */}
              
              <TreeSelect  defaultValue='node2' style={{ width: 300 }} allowClear onVisibleChange={() => {
                console.log('a')
              }}>
                <TreeNode key='node1' title='Personal Account'>
                  <TreeNode key='node2' title='Sax-User1' />
                </TreeNode>
                <TreeNode key='node3' title='Teams'>
                  <TreeNode key='node4' title='Sax-User2' />
                  <TreeNode key='node5' title='Sax-User3' />
                </TreeNode>
              </TreeSelect>
            
            </div>
          </div>
  
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
