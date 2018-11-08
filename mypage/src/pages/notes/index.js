import Link from 'umi/link'

import { Layout, Menu, Breadcrumb, Avatar, } from 'antd';
import styles from './notes.css';



export default function() {
  return (
    <div >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>笔记本</Breadcrumb.Item>
        
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
        <h2> <Link to='/notes/A'>A页面</Link></h2>
        <h2> <Link to='/notes/B'>B页面</Link></h2>

      </div>
    </div>
  );
}
