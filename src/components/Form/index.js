import React,{ useState } from 'react';
import { Form, Input, Button, DatePicker, Card, Table, Divider} from 'antd';

const UserForm = () => 
{

    /**sets the state to 
     * the form input fields */

    const[ firstName, setFirstName ] = useState('');
    const[ lastName, setLastName ] = useState('');
    const[ birthday, setBirthday ] = useState('');
    const[ age, setAge ] = useState('');
    const[ hobby, setHobby ] = useState('');
    const[ tableField, setTableField ] = useState('');


    const handleFormSubmit = () =>
     {
    
        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            age: age,
            hobby: hobby
        }

        setTableField([ ...tableField, userInfo ]);
        setFirstName('');
        setLastName('');
        setBirthday('');
        setAge('');
        setHobby('')
    };

    
    const handleDatePicker = (date, dateString) =>
    {
        setBirthday(dateString);

    }


    const formItemLayout = 
    {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 }
    }


    const buttonItemLayout =
    {
        wrapperCol: { span: 14, offset: 4 }
    }


    const columns = [

        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName'
        },


        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName'
        },


        {
            title: 'Birthday',
            dataIndex: 'birthday',
            key: 'birthday'
        },


        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },


        {
            title: 'Hobby',
            dataIndex: 'hobby',
            key: 'hobby'
        },
    ]

    const { Item } = Form;

    return(

        <>
            <Card title="User Details" style={{ maxWidth: 450, width: "100%", margin: "2rem auto" }}>
                <Form layout="horizontal">

                    <Item label="First Name:" { ...formItemLayout }>
                        <Input name="firstName" placeholder="enter first name" value={ firstName } onChange={ e => { setFirstName(e.target.value) } } />
                    </Item>

                    <Item label="Last Name:" { ...formItemLayout }>
                        <Input name="lastName" placeholder="enter last name" value={ lastName } onChange={ e => { setLastName(e.target.value) } } />
                    </Item>

                    <Item label="Birthday:" { ...formItemLayout }>
                        <DatePicker placeholder="select birthday" onChange={ handleDatePicker } />
                    </Item>

                    <Item label="Age:" { ...formItemLayout }>
                        <Input name="age" placeholder="enter age" value={ age } onChange={ e => { setAge(e.target.value) } } />
                    </Item>

                    <Item label="Hobby:" { ...formItemLayout }>
                        <Input name="hobby" placeholder="enter hobby" value={ hobby } onChange={ e => { setHobby(e.target.value) } } />
                    </Item>

                    <Item { ...buttonItemLayout }>
                        <Button type="primary" onClick={ handleFormSubmit } style={{margin: "0 auto"}}>Submit</Button>
                    </Item>

                </Form>
            </Card>
            <Divider />
            <div style={{maxWidth:"1200px",margin:"auto",marginTop:"30px"}}>
                <Table columns={columns} dataSource={ tableField } />
            </div>
        </>
    );

}

export default UserForm;