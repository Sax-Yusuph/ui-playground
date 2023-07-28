import { Button, Card, Grid, Space } from "@arco-design/web-react";
import Navbar from "./components/ui/navbar";
import { Overview } from "./components/ui/overview";

const Row = Grid.Row;
const Col = Grid.Col;

function App() {
  return (
    <div className="flex flex-col h-[100vh] bg-slate-950">
      <Navbar />

      <section className="container">
        <Space direction="vertical" size={30} className="w-full mt-12">
          <Button size="large">Get Started</Button>
          <Row gutter={20}>
            <Stats />
            <Stats />
            <Stats />
            <Stats />
          </Row>

          <Row gutter={20}>
            <Col span={12}>
              <Card bordered>
                <Overview />
              </Card>
            </Col>

            <Col span={12}>
              <Card bordered>
                <Overview />
              </Card>
            </Col>
          </Row>
        </Space>
      </section>
    </div>
  );
}

export default App;

const Stats = () => (
  <Col span={6}>
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Total Revenue</p>
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
      <div className="text-2xl font-bold">$45,231.89</div>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </Card>
  </Col>
);
