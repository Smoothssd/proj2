import React, { useState } from 'react'
import './style.css'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Checkbox, ConfigProvider, Pagination } from 'antd';
import { Card } from 'antd';
import img20 from '../../assets/20.jpg'
import img21 from '../../assets/21.jpg'
import img22 from '../../assets/22.jpg'
import img23 from '../../assets/23.jpg'
import img24 from '../../assets/24.jpg'
import img25 from '../../assets/25.jpg'
import img26 from '../../assets/26.jpg'
import img27 from '../../assets/27.jpg'
const { Meta } = Card;

export default function Index() {
    const [CheckBoxArr, setCheckBoxArr] = useState([
        { id: 1, name: 'Checkbox1', checked: false },
        { id: 2, name: 'Checkbox2', checked: false },
        { id: 3, name: 'Checkbox3', checked: false }])
    const [CheckBoxArr2, setCheckBoxArr2] = useState([
        { id: 1, name: 'Checkbox1', checked: false },
        { id: 2, name: 'Checkbox2', checked: false },
        { id: 3, name: 'Checkbox3', checked: false }])
    const [CheckBoxArr3, setCheckBoxArr3] = useState([
        { id: 1, name: 'Checkbox1', checked: false },
        { id: 2, name: 'Checkbox2', checked: false },
        { id: 3, name: 'Checkbox3', checked: false }])
    const onChangeCheckbox = (e, i, arr) => {
        console.log(e.target.checked, i);
        let value = e.target.checked
        let CheckArr = []

        if (arr === 'items') {
            CheckArr = CheckBoxArr
            console.log(CheckArr[i]);
            CheckArr[i].checked = value
            setCheckBoxArr(CheckArr)

        }
        if (arr === 'items2') {
            CheckArr = CheckBoxArr2
            CheckArr[i].checked = value
            setCheckBoxArr2(CheckArr)

        }
        if (arr === 'items3') {
            CheckArr = CheckBoxArr3
            CheckArr[i].checked = value
            setCheckBoxArr3(CheckArr)

        }
        console.log(CheckBoxArr, CheckBoxArr2, CheckBoxArr3);
    }

    const items = [
        {
            key: '1',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '2',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '3',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items')}>Checkbox</Checkbox>
            ),
        },


    ];
    const items2 = [
        {
            key: '1',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items2')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '2',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items2')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '3',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items2')}>Checkbox</Checkbox>
            ),
        },


    ];
    const items3 = [
        {
            key: '1',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 0, 'items3')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '2',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 1, 'items3')}>Checkbox</Checkbox>
            ),
        },
        {
            key: '3',
            label: (
                <Checkbox onChange={(e) => onChangeCheckbox(e, 2, 'items3')}>Checkbox</Checkbox>
            ),
        },


    ];



    const [open, setopen] = useState(false)
    const [open2, setopen2] = useState(false)
    const [open3, setopen3] = useState(false)
    const clickSetOpen = (id) => {
        if (id === 1) {
            setopen(!open)
            setopen2(false)
            setopen3(false)
        }
        if (id === 2) {
            setopen2(!open2)
            setopen(false)
            setopen3(false)
        }
        if (id === 3) {
            setopen3(!open3)
            setopen(false)
            setopen2(false)
        }

    }
    const showModal = () => {
    }
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultHoverColor: '#333',
                        defaultHoverBorderColor: '#333',


                    },
                },
            }}
        >
            <div className='Exhibition_box'>
                <h1>All Clearance & Sale Art-Inspired Items</h1>
                <p>Welcome to the exclusive merchandise shop of our prestigious art exhibition,</p>
                <p> where art enthusiasts and collectors alike can find a unique blend of creativity and elegance in every piece.</p>
                <p> Our collection showcases a meticulous curation of items inspired by the stunning artworks on display,</p>
                <p> offering a chance to bring a piece of this remarkable exhibition home.</p>

                <div className='Dropdown_box'>
                    <Space size={30}>
                        <Dropdown menu={{ items, selectable: false, }}
                            open={open}
                            onClick={() => clickSetOpen(1)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    Price
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>

                        <Dropdown menu={{ items: items2, selectable: false, }}
                            open={open2}
                            onClick={() => clickSetOpen(2)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    Product Type
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>

                        <Dropdown menu={{ items: items3, selectable: false, }}
                            open={open3}
                            onClick={() => clickSetOpen(3)}
                            trigger={['click']}
                        >
                            <Button>
                                <Space>
                                    Style
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Space>

                    <Button onClick={showModal}  >
                        Search
                    </Button>
                </div>
            </div>
            <div className='Exhibition_img'>
                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img20} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Me Time Moment</h2>
                            <p>Raissa Oltmanns</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '100%' }} alt="example" src={img21} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Boats</h2>
                            <p>Jukyong Park</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>


                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img22} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Cheetah Charm</h2>
                            <p>Sasha</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>

                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img23} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Tea Time</h2>
                            <p>Unknown Chiu</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '100%' }} alt="example" src={img25} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Alpine Trail</h2>
                            <p>Maxine Shore</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img24} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Kimone</h2>
                            <p>Unknown Woodworth</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>



                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img26} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Wander</h2>
                            <p>Iris Lehnhardt</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>

                <Card
                    hoverable
                    style={{
                        width: 340,
                        height: 500,
                        margin: 20
                    }}
                    cover={<div className='Exhibition_img_list'><img style={{ width: '70%' }} alt="example" src={img27} /></div>}
                >
                    <Meta description={
                        <div className='Exhibition_list_text'>
                            <h2>Dalmatian</h2>
                            <p>Uma Gokhale</p>
                            <Button   >
                                READ MORE
                            </Button>
                        </div>
                    } />
                </Card>
            </div>
            <Pagination style={{ margin: '30px 0 60px' }} align="center" defaultCurrent={1} total={50} />
        </ConfigProvider>
    )
}
