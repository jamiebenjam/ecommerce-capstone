import { Menu } from 'semantic-ui-react'

function HomePageHeadingMenu(){
    return(
        <div>
            <Menu stackable>
                <Menu.Item>
                <img alt="logo" src='/logo.png' />
                </Menu.Item>

                <Menu.Item
                name='features'
                // active={activeItem === 'features'}
                >
                Features
                </Menu.Item>

                <Menu.Item
                name='testimonials'
                // active={activeItem === 'testimonials'}
                >
                Testimonials
                </Menu.Item>

                <Menu.Item
                name='sign-in'
                // active={activeItem === 'sign-in'}
                >
                Sign-in
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default HomePageHeadingMenu;