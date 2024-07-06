import Chart from "../../components/echarts";
import './style.css'
import React, { useState } from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import img10 from '../../assets/19.webp'
const options = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 180],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
            ]
        }
    ]
};
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultHoverColor: 'rgb(166, 25, 46)',
                            defaultHoverBorderColor: 'rgb(166, 25, 46)',
                            defaultGhostBorderColor: '#333',
                            defaultGhostColor: '#333'

                        },
                    },
                }}
            >
                <div className='about_title'>

                    <div className='about_title_img'>
                        <img src={img10} alt="" />
                    </div>
                    <div className='about_title_right'>
                        <h1> About The Met</h1>
                        <p>Tracing back centuries, this art exhibition showcases a rich tapestry of visual narratives, evolving from masters' strokes to contemporary innovations.</p>
                    </div>
                </div>
                <div className='artBox'>
                    <h1 className='about_h1'>Artistic Style</h1>
                    <p>This exhilarating art exhibition is a vibrant tapestry of diverse artistic styles, each canvas a testament to the boundless creativity of its maker. From the meticulous brushstrokes of realism, capturing life's finest details with uncanny precision, to the bold and expressive forms of modernism, where colors and shapes collide in a symphony of visual emotion, the exhibition takes visitors on a thrilling journey. Abstract works invite contemplation, their ambiguous shapes and hues evoking a sense of wonder and infinite interpretation, while impressionist pieces capture fleeting moments of light and atmosphere, imbuing the gallery with a sense of timelessness. Each style stands as a unique language, conveying profound emotions and ideas, uniting viewers in a shared appreciation for the power of art.</p>
                    <Button onClick={showModal} ghost >
                        View statistics
                    </Button>
                </div>

                <Modal
                    open={isModalOpen}
                    title="View statistics"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={850}
                    footer={[
                        <Button key="OK" onClick={handleCancel}>
                            OK
                        </Button>,


                    ]}
                >
                    <Chart options={options} Width={800} Height={500} />
                </Modal>
            </ConfigProvider>

        </>
    );
}

export default App;
