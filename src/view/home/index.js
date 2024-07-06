import React from 'react';
import { Carousel, ConfigProvider, Card, Image } from 'antd';
import { CalendarTwoTone } from '@ant-design/icons';
import './style.css'
import video from '../../assets/video/1.mp4'
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import img3 from '../../assets/3.webp'
import img4 from '../../assets/4.webp'
import img5 from '../../assets/5.webp'
import img6 from '../../assets/6.webp'
import img7 from '../../assets/7.webp'
import img8 from '../../assets/8.webp'
import img9 from '../../assets/9.webp'
import img10 from '../../assets/10.webp'
import img11 from '../../assets/11.webp'
import img12 from '../../assets/12.webp'
import img13 from '../../assets/13.webp'
import img14 from '../../assets/14.webp'
import img15 from '../../assets/15.webp'
import img16 from '../../assets/16.webp'
import img17 from '../../assets/17.webp'
import img18 from '../../assets/18.webp'
const { Meta } = Card;
const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => (
    <ConfigProvider
        theme={{
            components: {
                Carousel: {
                    arrowSize: 30,
                },

            },
        }}
    >
        <Carousel autoplay arrows infinite={true}>
            <div>
                <h3 style={contentStyle}>
                    <img src={img15} style={{ width: '100%', height: '100%' }} alt="" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src={img16} style={{ width: '100%', height: '100%' }} alt="" /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src={img17} style={{ width: '100%', height: '100%' }} alt="" /></h3>
            </div>
            <div>
                <h3 style={contentStyle}><img src={img18} style={{ width: '100%', height: '100%' }} alt="" /></h3>
            </div>
        </Carousel>

        <Card
            hoverable
            style={{
                width: '90%',
                height: 400,
                padding: 50,
            }}
            className='video_box'

        >
            <video className='video' src={video} controls></video>
            <div className='video_text'><Card
                title="Art Tour"
                bordered={false}
                style={{
                    width: '100%',
                    height: 300
                }}
            >
                <p>a captivating exhibition showcasing the vibrant creativity and diverse perspectives of today's art scene. This showcase brings together a selection of paintings, drawings, and mixed-media installations by renowned and emerging artists from around the globe. Each work is a testament to the artist's unique vision, exploring themes ranging from the abstract realm of emotions and dreams to the intricate details of everyday life. As visitors step into this vibrant gallery, they'll embark on a sensory journey, immersed in colors that dance on canvas, lines that tell stories, and textures that evoke a profound connection to the artistic process. "Vibrant Visions" promises to inspire, challenge, and delight art enthusiasts and casual observers alike, offering a window into the boundless imagination of the contemporary artistic mind.
                </p>

            </Card>
            </div>
        </Card>

        <div className='Home_imgList'>
            <h1 className='Home_title'>Now On View <span>View all &gt; </span></h1>
            <div className='HomeImg'>
                <Card
                    hoverable
                    style={{ width: 500, height: 408 }}
                    cover={<Image
                        width={'100%'}
                        height={277}
                        src={img1}
                    />}
                >
                    <Meta title="The Harlem Renaissance and Transatlantic Modernism" description={<div>
                        <p>Through July 28</p>
                        <p>The Met Fifth Avenue</p>
                    </div>} />
                </Card>
                <Card
                    hoverable
                    style={{ width: 500, height: 408 }}
                    cover={<Image
                        width={'100%'}
                        height={277}
                        src={img4}
                    />}
                >
                    <Meta title="Sleeping Beauties: Reawakening Fashion" description={<div>
                        <p>Through September 2</p>
                        <p>The Met Fifth Avenue</p>
                    </div>} />
                </Card>
                <Card
                    hoverable
                    style={{ width: 500, height: 408 }}
                    cover={<Image
                        width={'100%'}
                        height={277}
                        src={img5}
                    />}
                >
                    <Meta title="Collecting Inspiration: Edward C. Moore at Tiffany & Co." description={<div>
                        <p>Through October 20</p>
                        <p>The Met Fifth Avenue</p>
                    </div>} />
                </Card>


            </div>

        </div>
        <div className='Home_Locations'>
            <h1 className='Home_title'>Locations and Hours </h1>
            <div className='LocationsHours'>
                <Card
                    hoverable
                    style={{ width: '49%' }}
                    cover={<Image
                        width={'100%'}
                        height={425}
                        src={img2}
                    />}
                >
                    <Meta style={{ textAlign: 'left', width: '100%' }} title={<><h1>The Met Fifth Avenue</h1></>} description={<div className='Home_mate_style'>
                        <p>Over 5,000 years of art from around the world.</p>
                        <p style={{ color: '#a6192e' }}><CalendarTwoTone twoToneColor="#a6192e" />  Next open at 10 am</p>
                        <p><span>Hours: </span>Sunday–Tuesday and Thursday: 10 am–5 pm
                        </p>
                        <p><span>Extended Hours:  </span>Friday and Saturday: 10 am–9 pm
                        </p>
                        <p><span>Closed: </span>Wednesday
                        </p>
                        <p>Closed Thanksgiving Day, December 25, January 1, and the first Monday in May.</p>

                    </div>} />
                </Card>
                <Card
                    hoverable
                    style={{ width: '49%' }}
                    cover={<Image
                        width={'100%'}
                        height={425}
                        src={img6}
                    />}
                >
                    <Meta style={{ textAlign: 'left', width: '100%' }} title={<><h1>The Met Cloisters</h1></>} description={<div className='Home_mate_style'>
                        <p>Art, architecture, and gardens of medieval Europe.</p>
                        <p style={{ color: '#a6192e' }}><CalendarTwoTone twoToneColor="#a6192e" />  Next open at 10 am</p>
                        <p><span>Hours: </span>Thursday–Tuesday: 10 am–5 pm
                        </p>

                        <p><span>Closed: </span>Wednesday
                        </p>
                        <p>Closed Thanksgiving Day, December 25, January 1.</p>

                    </div>} />
                </Card>
            </div>
        </div>
        <div className='Home_Contemporary '>
            <div className='Contemporary_img'>
                <img src={img3} alt="" />
            </div>
            <div className='Contemporary_Text'>
                <h1>
                    An Exciting Milestone for the Redesign of The Met’s Galleries for Modern and Contemporary Art
                </h1>
                <p>Director and CEO Max Hollein celebrates an important moment as the Museum moves forward with renovation plans for the new Oscar L. and H.M. Agnes Hsu-Tang Wing with architect Frida Escobedo, the first woman to design a wing in the Museum’s 154-year history.</p>
                <span>Read more</span>
            </div>
        </div>
        <div className='Home_Contemporary '>

            <div className='Contemporary_Text'>
                <h1>
                    Immaterial: Stone
                </h1>
                <p>What happens when the unbreakable shatters? Find out in this new episode of The Met’s podcast.</p>
                <span>Listen Now</span>
            </div>
            <div className='Contemporary_img'>
                <img src={img7} alt="" />
            </div>
        </div>
        <div className='Home_Contemporary '>
            <div className='Contemporary_img'>
                <img src={img8} alt="" />
            </div>
            <div className='Contemporary_Text'>
                <h1>
                    Membership at The Met
                </h1>
                <p>Met Members enjoy a rich variety of specialized benefits—from free guest passes to Member Preview Days for new exhibitions—all while supporting our mission.</p>
                <span>See the benefits</span>
            </div>
        </div>
        <div className='Home_Contemporary '>

            <div className='Contemporary_Text'>
                <h1>
                    Summer at The Met Store
                </h1>
                <p>Discover fresh finds for the season ahead, including jewelry, apparel, home decor, and more.</p>
                <span>Shop now</span>
            </div>
            <div className='Contemporary_img'>
                <img src={img9} alt="" />
            </div>
        </div>
        <div className='Home_Explore'>
            <h1 className='Home_title'>More to Explore </h1>
            <div className='ExploreImg'>
                <div className='ExploreImg_list'>
                    <img src={img10} alt="" />
                    <span>Perspectives</span>
                </div>
                <div className='ExploreImg_list'>
                    <img src={img11} alt="" />
                    <span>Audio Guides</span>
                </div>
                <div className='ExploreImg_list'>
                    <img src={img12} alt="" />
                    <span>Collection Areas</span>
                </div>
                <div className='ExploreImg_list'>
                    <img src={img13} alt="" />
                    <span>Learning Resources</span>
                </div>
                <div className='ExploreImg_list'>
                    <img src={img14} alt="" />
                    <span>Group Tours</span>
                </div>
            </div>
        </div>
    </ConfigProvider>

);
export default App;