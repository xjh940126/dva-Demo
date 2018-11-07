import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Button } from 'antd';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Dva Demo</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <Button className={styles.btn}>按钮</Button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
