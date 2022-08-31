import { Grid, Image, Container, Header } from 'semantic-ui-react'

function HomePageLanding() {

    const colors = [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
        ]

    
    return(
        <div>
            <Grid divided='vertically'>
                
                <Grid.Row columns={2}>
                <Grid.Column>
                    <Image src='https://images.squarespace-cdn.com/content/v1/583f300f5016e1fe6892262b/1603404810507-O01I1T6C1N9KB3MAGO6T/0-25.jpg?format=2500w' />
                </Grid.Column>
                <Grid.Column>
                    <Container>
                        <Header as='h2'>Header</Header>
                        <p>hi hello</p>
                    </Container>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                <Grid.Column>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/paragraph.png' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default HomePageLanding;