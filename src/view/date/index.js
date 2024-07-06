import React from 'react';
import { Badge, Calendar ,ConfigProvider} from 'antd';
import './style.css'
const getListData = (value) => {
    let listData = []; // Specify the type of listData
    
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const App = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const onSelect = (date,info)=>{
         console.log(date,info);
    }

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return <ConfigProvider
    theme={{
      token: {
        colorPrimary:'#333',
        controlItemBgActive:'rgba(0, 0, 0, 0.04)'
      },
    }}
  >
   <div className='date_box'>
    <h1>Experience art up close! Book your visit now to our exclusive art exhibition, featuring captivating masterpieces. Reserve your spot today!</h1>
    <Calendar cellRender={cellRender} onSelect={onSelect}/></div>
  </ConfigProvider>;
};
export default App;

