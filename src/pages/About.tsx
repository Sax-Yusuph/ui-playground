import { Layout } from '@arco-design/web-react';
import NavMenu from "../components/music/menu";
import Sidebar from "../components/music/sidebar";
import ContentPage from "../components/music/content";
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;


const About = () => {
  return (
    <div>
      <div className='bg-black min-h-screen relative text-white'>
        <Layout  className='flx h-full'>
          <Header className="border-b bg-black sticky top-0 z-40 border-gray-600 flex items-center h-12" >
            <NavMenu />
          </Header>
          <Layout className="flex w-full">
            <Sider className="h-[56rem] pr-4 border-r border-gray-600 bg-black">
              <Sidebar />
            </Sider>
            <Content className="w-64 bg-black">
              <div className='flex'>
                <ContentPage />
              </div>
            </Content>
          </Layout>
        </Layout>
        <br />
      </div>
    </div>
  )
}

export default About
