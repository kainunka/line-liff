import React, { useState } from 'react'
import { Container, Grid, Image, Segment, Button, Card  } from 'semantic-ui-react'
import _ from 'lodash'
const moment = require('moment'); 

const CouponPage = props => {
    const { profile, dataProfile } = props

    const renderCard = () => {
        return _.map(dataProfile.coupon, (value, key) => {
            return (
                <Card key={ key }>
                    <Card.Content>
                        <Image
                        floated='left'
                        size='tiny'
                        src={ value.image }
                        />
                        <Card.Header>{ value.text }</Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description>
                            มูลค่า <strong>{ value.price }</strong>  { value.used ? <span className="color-red">ใช้แล้ว</span> : null }
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra className="bg-grey">
                        <div className='ui two buttons'>
                            <Button basic>
                                    <span className="color-white">ใช้ได้ถึงวันที่ : { moment().format('DD MMMM YYYY / h:mm', value.dateTime) }</span>
                            </Button>
                            <Button className="bg-yellow">
                                <span className="color-black">แลก <strong>{ value.point } </strong> คะแนน</span>
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            )
        })
    }

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column className="center-text">
                        <Segment>
                            <Image src={ profile.pictureUrl } size='small' avatar floated='left' />
                            <p className="medium-font blod-font">
                                สวัสดี { profile.displayName }
                            </p>
                            <p className="medium-font blod-font">
                                { dataProfile.profilePoint  } คะแนน
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Card.Group centered={true}>
                            { renderCard() }
                        </Card.Group>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Container>
    )
} 

export default CouponPage