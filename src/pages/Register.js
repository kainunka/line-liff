import React, { useState } from 'react'
import { Container, Grid, Image, Dropdown, Input, Form, Button, Checkbox } from 'semantic-ui-react'
import ModalTerm from '../components/ModalTerm'

const RegisterPage = props => {
    const [dataForm, setDataForm] = useState({
        mobile: '',
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        term: false
    })
    const { profile } = props
    let d = []
    let m = []
    let y = []
    let yyyy = new Date()

    for (let i = 1; i <= 31; i++) {
        d.push({ key: i,value: i,text: i})
    }
    for (let i = 1; i <= 12; i++) {
        m.push({ key: i,value: i,text: i})
    }
    for (let i = yyyy.getFullYear() - 100; i < yyyy.getFullYear() + 100; i++) {
        y.push({ key: i,value: i,text: i})
    }

    const onSubmit = () => {
       console.log(dataForm)
    }


    return (
        <Container>
            <Form onSubmit={ onSubmit }>
                <Grid>
                    <Grid.Row>
                        <Grid.Column className="center-text">
                            <Image src={ profile.pictureUrl } size='small' avatar />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row><Grid.Column><p className="medium-font">สวัสดี</p></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column><p className="medium-font blod-font">{ profile.displayName }</p></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column><hr className="line-hr" /></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column><p className="medium-font">ยินดีตอนรับเข้าสู่ระบบ</p></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column><p className="medium-font">กรุณาให้ข้อมูล เพื่อรับสิทธิพิเศษต่างๆ</p></Grid.Column></Grid.Row>
                    <Grid.Row>
                        <Grid.Column className="center-text">
                            <Input placeholder='เบอร์โทรศัพท์' type="number" maxLength="20" value={ dataForm.mobile } onChange={(e) => setDataForm({...dataForm, mobile: e.target.value}) } />
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column className="center-text">
                            <Dropdown placeholder='วัน' search selection options={d} value={ dataForm.day }  onChange={(data, e) => setDataForm({...dataForm, day: e.value}) } />
                            <Dropdown placeholder='เดือน' search selection options={m} value={ dataForm.month }  onChange={(data, e) => setDataForm({...dataForm, month: e.value}) } />
                            <Dropdown placeholder='ปี' search selection options={y} value={ dataForm.year }  onChange={(data, e) => setDataForm({...dataForm, year: e.value}) } />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column className="center-text">
                            <ModalTerm termRender={ <Checkbox label="ยอมรับและตกลงเงื่อนไข" checked={ dataForm.term } onChange={(data, e) => setDataForm({...dataForm, term: e.checked}) } /> } />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column className="center-text">
                            <Button type="submit">ลงทะเบียน</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </Container>
    )
} 

export default RegisterPage