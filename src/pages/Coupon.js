import React, { useState } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'

const CouponPage = props => {
    const { profile } = props

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column className="center-text">
                        <Image src={ profile.pictureUrl } size='small' avatar />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row><Grid.Column><p className="medium-font">สวัสดี</p></Grid.Column></Grid.Row>
                <Grid.Row><Grid.Column><p className="medium-font blod-font">{ profile.displayName }</p></Grid.Column></Grid.Row>
                <Grid.Row><Grid.Column><hr className="line-hr" /></Grid.Column></Grid.Row>
            </Grid>
        </Container>
    )
} 

export default CouponPage