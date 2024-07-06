import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import { Image, Breadcrumb, ConfigProvider, Button,Collapse,Input  } from 'antd';

import img20 from '../../assets/20.jpg'
import img23 from '../../assets/23.jpg'
import {
  PlusOutlined ,MinusOutlined,LikeOutlined
} from '@ant-design/icons';

const { TextArea } = Input;

const App = () => {
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
    This captivating illustration depicts a woman enveloped in a cozy white blanket, indulging in a moment of tranquility as she savors a cup of coffee. Her golden hair, soft and radiant, frames her face, while her eyes are closed in a state of blissful repose. In her hand, she holds a brown mug, poised to take a sip, her fingers wrapped around it for warmth. The backdrop, adorned with lush green plants, likely part of an indoor décor, complements the cozy ambiance. The entire scene exudes a sense of warmth and relaxation, inviting the viewer to share in the woman's serene moment.
    </p>
  );
  const items = [
    {
      key: '1',
      label: <h2 style={{textAlign:'left'}}> Description </h2>,
      children: text,
    },
    
  ];
  const tdstyle={
    width:'50%',
    textAlign:'left'

  }
  const tdstyle2={
    width:'50%',
    textAlign:'right'

  }
  const text2 = (
    <div >
    <table border="0" textAlign='left'>
        <tbody>
          <tr>
            <td style={tdstyle}>Standard flat-rate shipping (3–8 days)</td>
            <td style={tdstyle2}>$12.95</td>
        </tr>
        <tr>
            <td style={tdstyle}>Expedited US shipping (2 days)</td>
            <td style={tdstyle2}>$13.95 extra</td>
        </tr>
        <tr>
            <td style={tdstyle}>Overnight shipping</td>
            <td style={tdstyle2}>$22.95 extra</td>
        </tr>
    </tbody></table>
    <p>The above rates apply to orders shipped within the contiguous 48 US states. For rates to Alaska, Hawaii, Canada, and other countries, please see our Shipping &amp; Handling page. </p>
    <p>If for any reason you are not fully satisfied with your order, you may return the merchandise within 90 days from the date of purchase. See our Returns page. </p>
</div>
  );
   const items2 = [
    {
      key: '1',
      label: <h2 style={{textAlign:'left'}}> Shipping & Returns </h2>,
      children: text2,
    },
    
  ];
  return <div className='Details_box'>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultColor:'rgb(166, 25, 46)',
            defaultBorderColor:'rgb(166, 25, 46)',
            defaultHoverColor: '#fff',
            defaultHoverBorderColor: 'rgb(166, 25, 46)',
            defaultHoverBg:'rgb(166, 25, 46)',
          

          },
          Input:{
            activeBorderColor:'#333',
            hoverBorderColor:'#333'
          }
        },
        
      }}
    >
      <Breadcrumb
        items={[
          {
            title: <Link to={'/Exhibition'}>Exhibition</Link>,

          },
          {
            title: 'ProductDetails',

          }
        ]}
      />

      <div className='Details_top'>
        <div className='Details_img'>

          <Image
            width={350}
            // height={500}
            src={img20}
          />
        </div>
        <div className='Details_text'>
          <h1>Me Time Moment</h1>
          <p>Painting works ID:  <span>1 </span></p>

          <p>Painting type：<span>Portrait Painting</span></p>
          <p>Author:  <span>Raissa Oltmanns</span></p>
          <p>price:  <span>$29.9</span></p>
          <div style={{display:'flex',justifyContent:'start'}}>
          <Button  style={{margin:'30px 0'}}  >
          Add to cart
          </Button>
          </div>
               <div className='line'></div>
               <Collapse style={{width:'80%'}} items={items} bordered={false} expandIconPosition={'end'} ghost
               expandIcon={({ isActive }) =>isActive? <MinusOutlined /> : <PlusOutlined /> }
               />
               <Collapse style={{width:'80%'}} items={items2} bordered={false} expandIconPosition={'end'} ghost
               expandIcon={({ isActive }) =>isActive? <MinusOutlined /> : <PlusOutlined /> }
               />
               
        </div>
      </div>
  
      <div className='evaluate'>
        <div className='evaluate_title'>
        User comments
        </div>
        <ul>
          <li>
            <div className = 'evaluateList_img'>
             <img src={img23}/>
            </div>
             
            <div className = 'evaluateList_text'>
              <h2>Tori  <span>2024/7/5</span></h2>
              <p>"This art exhibition is a captivating journey through the artist's vivid imagination, where each piece tells a unique story that lingers in the viewer's mind. The intricate brushwork and harmonious use of colors create a mesmerizing visual symphony, inviting contemplation and admiration. A must-see for art enthusiasts seeking to be inspired."</p>
              <div className='like'><LikeOutlined /> <span>10</span> </div>
              </div>
          </li>
        </ul>
      
    <div className='textArea_box'>
    <TextArea
      showCount
      maxLength={100}
    
      placeholder="Please enter the content..."
      style={{ height: 120, resize: 'none' }}
    />
    <Button  style={{margin:'30px 0' ,width:80}}  >
    Submit
          </Button>
    </div>
      </div>
    </ConfigProvider>
  </div>

};
export default App;

