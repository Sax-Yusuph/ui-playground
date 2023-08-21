import { Dropdown, Menu, Button } from '@arco-design/web-react';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const data = [
  ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
  ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
  ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
  ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];
const dropList = (
  <Menu>
    {data.map((city, outerIndex) => {
      if (city.length > 1) {
        const districts = city[1];
        return (
          <SubMenu key={outerIndex} title={<span>{city[0]}</span>}>
            {districts.map((_district: any, innerIndex: string | number) => {
              return (
                <MenuItem key={`${outerIndex}_${innerIndex}`}>{districts[innerIndex]}</MenuItem>
              );
            })}
          </SubMenu>
        );
      }

      return <MenuItem key={outerIndex}>{city[0]}</MenuItem>;
    })}
  </Menu>
);

const File = () => {
  return (
    <div className='dropdown-demo'>
      <Dropdown trigger='click' droplist={dropList} position='bl'>
        <Button type='secondary'>
          File
        </Button>
      </Dropdown>
    </div>
  )
}

export default File
