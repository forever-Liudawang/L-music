import React,{memo,useState,useRef}from 'react'
import {Container,TopDesc,Menu} from "./style"
import {CSSTransition} from "react-transition-group"
import Header from '../../baseUI/Header';
import Scroll from '../../baseUI/scroll';
import SongList from './SongList';
import style from '../../assets/global-style';

const currentAlbum = {
    creator: {
      avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
      nickname: "浪里推舟"
    },
    coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
    subscribedCount: 2010711,
    name: "听完就睡，耳机是天黑以后柔软的梦境",
    tracks:[
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
    ]
}

function Album(props) {
    const [showStatus, setShowStatus] = useState (true);
    const [isMarquee, setIsMarquee] = useState(false)
    const {id} = props && props.match.params
    const headerEl = useRef();
    const handleBack = ()=>{
        //onExited={props.history.goBack} 退出动画执行结束时跳转路由。
        setShowStatus(false)
    }
    const HEADER_HEIGHT = 45;
    const handleScroll = (pos)=>{
        let minScrollY = -HEADER_HEIGHT;
        let percent = Math.abs(pos.y/minScrollY);
        let headerDom = headerEl.current;
        // 滑过顶部的高度开始变化
        if (pos.y < minScrollY) {
            headerDom.style.backgroundColor = style["theme-color"];
            headerDom.style.opacity = Math.min(1, (percent-1)/2);
            setIsMarquee(true);
        } else {
            headerDom.style.backgroundColor = "";
            headerDom.style.opacity = 1;
            setIsMarquee(false);
        }
    }
    return (
        <CSSTransition
            in={showStatus}  
            timeout={300} 
            classNames="fly" 
            appear={true} 
            unmountOnExit
            onExited={props.history.goBack}
        >
            <Container>
                <Header ref={headerEl} title={currentAlbum.name} handleClick={handleBack} isMarquee={isMarquee}/>
                <Scroll bounceTop={false} onScroll={handleScroll}>
                    <div>
                        <TopDesc background={currentAlbum.coverImgUrl}>
                            <div className="background">
                                <div className="filter"></div>
                            </div>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={currentAlbum.coverImgUrl} alt=""/>
                                <div className="play_count">
                                <i className="iconfont play">&#xe885;</i>
                                <span className="count">{Math.floor (currentAlbum.subscribedCount/1000)/10} 万 </span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{currentAlbum.name}</div>
                                <div className="person">
                                <div className="avatar">
                                    <img src={currentAlbum.creator.avatarUrl} alt=""/>
                                </div>
                                <div className="name">{currentAlbum.creator.nickname}</div>
                                </div>
                            </div>
                        </TopDesc>
                        <Menu>
                            <div>
                                <i className="iconfont">&#xe6ad;</i>
                                评论
                            </div>
                            <div>
                                <i className="iconfont">&#xe86f;</i>
                                点赞
                            </div>
                            <div>
                                <i className="iconfont">&#xe62d;</i>
                                收藏
                            </div>
                            <div>
                                <i className="iconfont">&#xe606;</i>
                                更多
                            </div>
                        </Menu>
                        <SongList currentAlbum={currentAlbum}/>
                    </div>  
                </Scroll>
            </Container>
        </CSSTransition>
    )
}
export default  memo(Album)
