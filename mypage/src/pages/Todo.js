import Link from 'umi/link';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Card, Icon, Avatar,List} from 'antd';
import styles from './index.css';
import { Component } from 'react';
import { finished } from 'stream';
const { Meta } = Card;

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[
        {id:0,title:'react',status:0},
        {id:0,title:'vue',status:0},
        {id:0,title:'umi',status:0},
        {id:0,title:'dva',status:0},
        
      ],
      finished:0
    }
  };
  // 增加
  addApice(item){
    var newList = this.state.list
    newList.push(item)
    this.setState({
      list:newList
    })
  }
  render(){
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to={'/'}>首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Todo</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
        <List
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar />}
                title={<h4>{item.title}</h4>}
              />
            </List.Item>
          )}
        />
        </div>
      </div>
    );
  }
}
export default Todo



  


