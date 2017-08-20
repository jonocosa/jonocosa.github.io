import React from 'react';
import Link from 'gatsby-link';
import { Container, Menu} from 'semantic-ui-react';

const MenuFixed = () => 
   <Menu fluid >
        <Container>
            <Menu.Item  >
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="About">About</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='Contact'>Contact</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='Projects'>Projects</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Link to="PostListing">Blog</Link>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu> 



export default MenuFixed