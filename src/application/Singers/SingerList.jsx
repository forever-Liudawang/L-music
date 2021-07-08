import React,{memo}from 'react'
import {List,ListItem} from "./style"
import  LazyLoad, {forceCheck} from 'react-lazyload';
function SingerList(props) {
    const {singerList = []} = props
    return (
        <List>
            {
                singerList.map((item,index)=>{
                    return  <ListItem key={item.accountId+""+index}>
                                <div className="img_wrapper">
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png').default} alt="music"/>}>
                                        <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                                    </LazyLoad>
                                </div>
                                <span className="name">{item.name}</span>
                            </ListItem>
                })
            }
        </List>
    )
}
export default  memo(SingerList)
