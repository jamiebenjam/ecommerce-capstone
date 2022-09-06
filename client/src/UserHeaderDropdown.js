import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

function UserHeaderDropdown() {


    return (
        <div>
            <Dropdown icon="bars" pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Header>Shop</Dropdown.Header>
                    <Dropdown.Item as={Link} to='/products'>Shop All</Dropdown.Item>
                    <Dropdown.Item as={Link} to='/newArrivals'>New In</Dropdown.Item>
                    <Dropdown.Item>
                    <Dropdown text='Clothing'>
                        <Dropdown.Menu>
                        <Dropdown.Header>RAAS World</Dropdown.Header>
                        <Dropdown.Item>Lenghas</Dropdown.Item>
                        <Dropdown.Item>Dresses + Gowns</Dropdown.Item>
                        <Dropdown.Item>Sarees</Dropdown.Item>
                        <Dropdown.Item>Blouses</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>Tanisi World</Dropdown.Header>
                        <Dropdown.Item>Dresses</Dropdown.Item>
                        <Dropdown.Item>Tops + Tunics</Dropdown.Item>
                        <Dropdown.Item>Dusters</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default UserHeaderDropdown;
