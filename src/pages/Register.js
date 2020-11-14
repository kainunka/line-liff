import React, { useState } from 'react'
import { Container, Grid, Image, Dropdown, Input, Form, Button, Checkbox } from 'semantic-ui-react'
import ModalTerm from '../components/ModalTerm'
import axios from 'axios'
import apiUrl from '../constants/api'

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

    const onSubmit = async () => {
        let params = {
            userID: props.profile.userId,
            displayName: props.profile.displayName,
            displayImage: props.profile.pictureUrl,
            detail: dataForm,
            profilePoint: 0,
            coupon: [{
                used: false,
                point: 1500,
                price: 100,
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Korean_Gimchi01.jpg',
                text: 'E- COUPON ส่วนลดกิมจิ',
                dateTime: new Date().getTime()
            }, {
                used: true,
                point: 2000,
                price: 200,
                image: 'https://www.smeleader.com/wp-content/uploads/2015/01/%e0%b8%ad%e0%b8%a2%e0%b8%b2%e0%b8%81%e0%b8%82%e0%b8%b2%e0%b8%a2%e0%b8%8b%e0%b8%b9%e0%b8%8a%e0%b8%b4-JJ-Sushi-Foods-%e0%b9%81%e0%b8%ab%e0%b8%a5%e0%b9%88%e0%b8%87%e0%b8%82%e0%b8%b2%e0%b8%a2%e0%b8%a7%e0%b8%b1%e0%b8%95%e0%b8%96%e0%b8%b8%e0%b8%94%e0%b8%b4%e0%b8%9a%e0%b8%a3%e0%b8%b2%e0%b8%84%e0%b8%b2%e0%b8%aa%e0%b9%88%e0%b8%87%e0%b9%80%e0%b8%81%e0%b8%a3%e0%b8%94%e0%b9%80%e0%b8%ad-%e0%b8%9b%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%9d%e0%b8%b1%e0%b8%99%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%99%e0%b8%8b%e0%b8%b9%e0%b8%8a%e0%b8%b4-2.jpg',
                text: 'E- COUPON ส่วนลดซูชิ',
                dateTime: new Date().getTime()
            }],
            verifyRegister: false
        }

       const { data } = await axios.post(apiUrl, params)

       if (data.status) {
            params.verifyRegister = true
            await axios.put(`${apiUrl}${data.data.id}`, params)
            window.location.reload()
        }
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