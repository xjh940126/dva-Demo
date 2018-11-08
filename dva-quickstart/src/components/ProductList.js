import React from 'react';
import PropTypes from 'prop-types';
import {Button,Table,Popconfirm, Tabs} from 'antd';

const ProductList = ({ onDelete, onAdd, products}) =>{
    const columns = [
        {
            title:'Name',
            dataIndex:'name',
        },{
            title:'Actions',
            render:(text,record) => {
                return(
                    <div>
                    <Popconfirm title='Delete?' onConfirm={()=> onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm> 
                    <Popconfirm title='Add?' onConfirm={()=> onDelete(record.id)}>
                        <Button>Add</Button>
                    </Popconfirm> 
                    </div>
                );
            },
        },
       
    ];
    return(
        <Table 
            dataSource={products}
            columns={columns}
        />
    );
};

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}

export default ProductList;