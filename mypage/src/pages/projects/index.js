import Link from 'umi/link'

import { Breadcrumb, Avatar, } from 'antd';
import styles from './projects.css';



export default function() {
  return (
    <div >
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>项目册</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 480 }}></div>
    </div>
  );
}
