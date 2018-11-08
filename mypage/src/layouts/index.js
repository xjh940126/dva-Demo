import Link from 'umi/link'
import { Layout, Menu, Breadcrumb, Avatar, } from 'antd';
import styles from './index.css';


const { Header, Content, Footer } = Layout;
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Layout>
       <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo"></div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Avatar icon="user" style={{marginRight:50}}/>
            <Menu.Item key="myPage"><Link to='/'>首页</Link></Menu.Item>
            <Menu.Item key="notes"><Link to='/notes'>笔记本</Link></Menu.Item>
            <Menu.Item key="projects"><Link to='/projects'>项目册</Link></Menu.Item>
          </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            { props.children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Practice ©2018 Created by Xjh
          </Footer>
        </Layout>
      </div>
     
  );
}

export default BasicLayout;
