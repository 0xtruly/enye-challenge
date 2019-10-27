import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, DatePicker, Card, Table, Divider} from 'antd';
import { columns } from '../TableField/index';



const UserForm = () => 
{

    const { firstName, lastName, age, hobby, birthday, tableData} = useSelector(state => state);
    
    const dispatch = useDispatch();
    
    

    const userInfo =  {firstName, lastName, birthday, age, hobby}

    /**dispatch actions */
    const changeFirstName = (e) => {
        dispatch({
            type: 'firstName',
            payload: e.target.value
        });
    }
    
    const changeLastName = (e) => {
        dispatch({
            type: 'lastName',
            payload: e.target.value
        });
    }

    const changeBirthday = (date, dateString) => {
        dispatch({
            type: 'birthday',
            payload: dateString
        });
    }

    const changeAge = (e) => {
        dispatch({
            type: 'age',
            payload: e.target.value
        });
    }

    const changeHobby = (e) => {
        dispatch({
            type: 'hobby',
            payload: e.target.value
        });
    }

    /**form layout */
    const formItemLayout = 
    {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    }

    /**button layout */
    const buttonItemLayout =
    {
        wrapperCol: { span: 14, offset: 4 }
    }


    const { Item } = Form;
   

    return(

        <>
            <Card title="User Details" style={{ maxWidth: 450, width: "100%", margin: "2rem auto" }}>
                <Form layout="horizontal">

                    <Item label="First Name:" { ...formItemLayout }>
                        <Input name="firstName" placeholder="enter first name" value={ firstName } onChange={ changeFirstName } />
                    </Item>

                    <Item label="Last Name:" { ...formItemLayout }>
                        <Input name="lastName" placeholder="enter last name" value={ lastName } onChange={ changeLastName } />
                    </Item>

                    <Item label="Birthday:" { ...formItemLayout }>
                        <DatePicker placeholder="select birthday" onChange={ changeBirthday } />
                    </Item>

                    <Item label="Age:" { ...formItemLayout }>
                        <Input name="age" placeholder="enter age" value={ age } onChange={ changeAge } />
                    </Item>

                    <Item label="Hobby:" { ...formItemLayout }>
                        <Input name="hobby" placeholder="enter hobby" value={ hobby } onChange={ changeHobby } />
                    </Item>

                    <Item { ...buttonItemLayout }>
                        <Button type="primary" onClick={ () => dispatch ({type: 'submit', payload: userInfo}) } style={{margin: "0 auto"}}>Submit</Button>
                    </Item>

                </Form>
            </Card>
            <Divider />
            <div style={{maxWidth:"1200px",margin:"auto",marginTop:"30px"}}>
            
                <Table columns={columns} dataSource={ tableData } key={tableData} />
            </div>
        </>
    );

}

export default UserForm;