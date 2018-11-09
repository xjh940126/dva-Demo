import Link from 'umi/link';
import {  Breadcrumb, Input, List, Button, Modal, Row, Col} from 'antd';
import { Component } from 'react';

const Search = Input.Search;

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[
        {title:'react'},
        {title:'vue'},
        {title:'umi'},
        {title:'dva'},
      ],
      finished:[
        {title:'1234'},
      ],
      visible:false,
      text:'',
    }
  };
  //修改弹窗
  showModal(item){
    this.setState({
      visible:true,
      text:item,
    })
  }
  changeValue(val){
    if(val ==''){
      alert('请输入内容')
    }else{
      let OItem = this.state.text
      let Alist = this.state.list
      let m = Alist.indexOf(OItem)
      let NItem = this.state.text
      NItem.title = val + '----[已编辑]'
      Alist.splice(m,1,NItem)
      this.setState({
        list:Alist,
        visible:false
      })
    }
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }
  // 增加
  addApice(value){
    if(value==''){
      alert('请输入内容')
    }else{
  
      let item = {title:value}
      let newList = this.state.list
      newList.push(item)
      this.setState({
        list:newList
      })
    }
    
  }
  // 删除未完成
  removeApice(i){
    // console.log(i,'12345')
    let newList = this.state.list
    let finList = this.state.finished
    let m =  newList.indexOf(i)
    newList.splice(m,1);
    finList.push(i);
    this.setState({
      list:newList,
      finished:finList
    })
  }
  //删除已完成
  removeFin(i){
    console.log(i,'12345')
    let finList = this.state.finished
    let m =  finList.indexOf(i)
    finList.splice(m,1);
    this.setState({
      finished:finList
    })
  }
  //查询已完成内容
  searchFin(val){
    let nList = this.state.finished
    for(var i; i<0; i++){
      
    }
  }
  //清空所有已完成
  removeAll(){
    this.setState({
      finished:[]
    })
  }
  render(){
    return (
      <Row >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to={'/'}>首页</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Todo</Breadcrumb.Item>
        </Breadcrumb>
        <Col span={12} style={{ background: '#fff', padding: 24, minHeight: 480 }}>
        <Search
          placeholder="输入内容"
          enterButton="新建"
          size="large"
          onSearch={value => this.addApice(value)}
        />
        <Modal
          title="修改Todo"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Search placeholder={this.state.text.title} onSearch={value => this.changeValue(value)} enterButton="修改"></Search>
        </Modal>
        <List
          header={<h1>未完成</h1>}
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item >
              <List.Item.Meta
                title={item.title}
              />
              <Button style={{background:'#c35b16' ,width:70,color:"#fff"}} onClick={this.showModal.bind(this,item)}>编辑</Button>
              <Button style={{background:'#1b5b16' ,width:70,color:"#fff"}} onClick={()=>this.removeApice(item)}>完成</Button>
            </List.Item>
          )}
        />
        </Col>
        <Col span={12} style={{ background: '#999', padding: 24, minHeight: 480 ,color:'#fff'}}>
          <Search placeholder={'查询内容'} onSearch={value => this.searchFin(value)} enterButton="查询" ></Search>
          <Button style={{width:'100%', background:"#ddd",marginTop:10}} onClick={()=>this.removeAll()}>清空所有已完成</Button>
        <List
          header={<h1>已完成</h1>}
          itemLayout="horizontal"
          dataSource={this.state.finished}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
              />
              <Button style={{background:'#c32b19' ,width:70, color:"#fff"}} onClick={()=>this.removeFin(item)}>删除</Button>
            </List.Item>
          )}
        />
        </Col>
      </Row>
    );
  }
}
export default Todo
