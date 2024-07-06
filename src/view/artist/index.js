import React from 'react';
import { HighlightOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider, Card, Image, Pagination } from 'antd';
import img1 from '../../assets/1.webp'
import img28 from '../../assets/28.jpg'
import img29 from '../../assets/29.jpg'
import img30 from '../../assets/30.webp'
import img31 from '../../assets/31.jpg'
import img32 from '../../assets/32.jpg'
import img33 from '../../assets/33.jpg'
import img34 from '../../assets/34.webp'
import img35 from '../../assets/35.jpg'
import './style.css'
const items = [
    {
        key: 'sub1',
        icon: <UserOutlined />,
        label: 'A-Z PROGRAMS',
        children: [
            {
                key: '1-1',
                type: 'group',
                children: [
                    {
                        key: '1',
                        label: 'Option 1',
                    },
                    {
                        key: '2',
                        label: 'Option 2',
                    },
                    {
                        key: '3',
                        label: 'Option 1',
                    },
                    {
                        key: '4',
                        label: 'Option 2',
                    },
                    {
                        key: '5',
                        label: 'Option 1',
                    },
                    {
                        key: '6',
                        label: 'Option 2',
                    },


                ],
            },

        ],
    },
    {
        key: 'sub2',
        icon: <HighlightOutlined />,
        label: 'Factions',
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '7',
                        label: 'Option 7',
                    },
                    {
                        key: '8',
                        label: 'Option 8',
                    },
                ],
            },
        ],
    },
    {
        key: 'sub4',
        label: 'Country ',
        icon: <EnvironmentOutlined />,
        children: [
            {
                key: '9',
                label: 'Option 9',
            },
            {
                key: '10',
                label: 'Option 10',
            },
            {
                key: '11',
                label: 'Option 11',
            },
            {
                key: '12',
                label: 'Option 12',
            },
        ],
    },
];
const onClick = (e) => {
    console.log('click', e);
};
const { Meta } = Card;
const App = () => (

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
        <div className='Artist_box'>
            <div className='Artist_box_select'>
                <Menu
                    onClick={onClick}
                    style={{
                        width: '200px',
                        textAlign: 'left'
                    }}
                    mode="vertical"
                    items={items}
                />
                <img src={img1} style={{ flex:1, height: '150px' }} alt="" />
            </div>
            <div className='Artist_list'>
                <Card
                    hoverable
                    style={{ width: 350, }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img28}
                    />}
                >
                    <Meta title="Claude Monet" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350, }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img29}
                    />}
                >
                    <Meta title="Vincent Van Gogh" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350, }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img30}
                    />}
                >
                    <Meta title="Jean-Michel Basquiat" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350, }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img31}
                    />}
                >
                    <Meta title="Andy Warhol" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350,marginTop:50  }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img32}
                    />}
                >
                    <Meta title="John James Audubon" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350, marginTop:50 }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img33}
                    />}
                >
                    <Meta title="Gustav Klimt" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350,marginTop:50 }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img34}
                    />}
                >
                    <Meta title="Norman Rockwell" />
                </Card>

                <Card
                    hoverable
                    style={{ width: 350,marginTop:50 }}
                    cover={<Image
                        width={'100%'}
                        height={350}
                        src={img35}
                    />}
                >
                    <Meta title="Pablo Picasso" />
                </Card>


            </div>
            <Pagination style={{ margin: '60px 0 ' }} align="center" defaultCurrent={1} total={50} />
        </div>
    </ConfigProvider>
);
export default App;