import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function UserBreadcrumb({product}) {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Section as={Link} to={'/'}>Home</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section as={Link} to={'/products'}>Products</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>{product.title}</Breadcrumb.Section>
            </Breadcrumb>
        </div>
    );
}

export default UserBreadcrumb;
