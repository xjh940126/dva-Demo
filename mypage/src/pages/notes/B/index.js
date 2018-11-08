import Link from 'umi/link'
import router from 'umi/router';
import { Layout, Menu, Breadcrumb, Avatar, } from 'antd';
import { Button } from 'antd';



export default function() {
  return (
    <div >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to='/notes'>笔记本</Link></Breadcrumb.Item>
        <Breadcrumb.Item>B页面</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
        <h1>这里是B页面</h1>
        <Button onClick={()=>{router.goBack()}}> BACK </Button>
      </div>
    </div>
  );
}