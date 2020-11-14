import React  from 'react'
import { Container, Grid, Button} from 'semantic-ui-react'

const LoginPage = props => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column className="center-text">
                    <Button style={{ marginTop: 20 }} className="bg-green" onClick={ props.login }><span className="color-white">กรุณเข้าสู่ระบบ Line</span></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>   
    )
}

export default LoginPage