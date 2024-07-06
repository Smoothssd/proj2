import React, { useState, useEffect } from 'react';
import { Menu, ConfigProvider } from 'antd';
import { useNavigate, useLocation, } from 'react-router-dom'
import './index.css'

const items = [
    {
        label: 'Home',
        key: 'Home',

    },
    {
        label: 'About',
        key: 'About',


    },
    {
        label: 'Exhibition',
        key: 'Exhibition',

    },
    {
        label: 'Artist',
        key: 'Artist',


    }, {
        label: 'Contact',
        key: 'Contact',

    },

];
const App = () => {
    const navigate = useNavigate();
    const hash = useLocation()

    const [current, setCurrent] = useState('Home');
    useEffect(() => {
        if (hash.state !== null) {
            setCurrent(hash.state.key)
           
            
        }
       
        if(hash.pathname==="/ProductDetails"){
            setCurrent('Exhibition')
        }
        console.log(hash);
    }, [])
    const onClick = async (e) => {
        console.log('click ', e);
        navigate(`/${e.key}`, { state: { key: e.key } });
        await setCurrent(e.key);

    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        horizontalItemSelectedColor: '#333',
                        horizontalItemHoverColor: '#333'
                    },
                },
            }}
        >
            <div className='navBar'>

                <Menu className='Menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
        </ConfigProvider>

    );
};
export default App;