
import {Tabs, Button, Card, Grid, Space, DatePicker } from "@arco-design/web-react";
import Navbar from "./components/ui/navbar";
import { Overview } from "./components/ui/overview";
import RecentSales from "./components/ui/recentSales";

const TabPane = Tabs.TabPane;

const Row = Grid.Row;
const Col = Grid.Col;

interface StatsProps {
  title: string;
  amount: string;
  percentage: string;
}


// type TabType = 'capsule'


function App() {

  

  return (
      <div className=" " >
        
        <Navbar />
        <div className="p-8 bg-black flex flex-col">
          <section className="container">
            <Space direction="vertical" size={30} className="w-full mt-2">
              <div className="flex justify-between -mb-4">
                <h1 className="text-white text-3xl ">Dashboard</h1>
                <div className="flex"> 
                  <div className="text-sm/[17px] mx-2 flex items-center justify-center border-2 border-solid border-gray-800 rounded-lg">
                    
                    <div className="text-sm/[16px]">
                      <DatePicker.RangePicker defaultValue={['2023-06-08', '2023-07-18']} style={{ width: 300, height: 30, }} />
                    </div>
                  </div>
                  <Button >Download</Button>
                </div>
              </div>

              <div className="flex">
                  <Tabs type={"capsule"}>
                    <TabPane key='1' title='Overview'>
                    </TabPane>
                    <TabPane key='2' title='Analytics'>
                    </TabPane>
                    <TabPane key='3' title='Reports'>
                    </TabPane>
                    <TabPane key='4' title='Notifications' disabled>
                    </TabPane>
                  </Tabs>
                </div>
              
              <Row gutter={20}>
                <Stats title="Total Revenue" amount="$45,231.89" percentage="+20.1% from last month" />
                <Stats title="Subscriptions" amount="+2350" percentage="+180.1% from last month" />
                <Stats title="Sales" amount="+12,234" percentage="+19% from last month" />
                <Stats title="Active Now" amount="+573" percentage="+201% since last hour" />
              </Row>

              <Row gutter={20}>
                <Col span={12}>
                  <Card bordered>
                    <h1 className="text-white py-4 pl-5">Overview</h1>
                    <Overview />
                  </Card>
                </Col>

                <Col span={12}>
                  <Card bordered>
                    <RecentSales />
                  </Card>
                </Col>
              </Row>
            </Space>
          </section>
        </div>
      </div>
  );
}

export default App;

const Stats: React.FC<StatsProps> = ({ title, amount, percentage }) => (
  <Col span={6}>
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
      <div className="text-2xl font-bold">{amount}</div>
      <p className="text-xs text-muted-foreground">{percentage}</p>
    </Card>
  </Col>
);
