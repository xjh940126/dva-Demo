import Link from 'umi/link'
import { Layout, Menu, Breadcrumb, Avatar, Button } from 'antd';
import styles from './index.css';



export default function() {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 200 }}>
        <Button><Link to={'/Todo'}> Todo </Link></Button>
      </div>
    </div>
  );
}
