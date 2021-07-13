import React ,{memo,useState,useRef} from 'react'
import { CSSTransition } from "react-transition-group";
import {Container,ImgWrapper,Collection,ListContainer} from "./style"
import Scroll from '../../baseUI/scroll';
import Header from '../../baseUI/Header';
import SongList from '../../components/SongList';
const artist = {
    picUrl: "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
    name: "薛之谦",
    hotSongs: [
      {
        name: "我好像在哪见过你",
        ar: [{name: "薛之谦"}],
        al: {
          name: "薛之谦专辑"
        }
      },
      {
        name: "我好像在哪见过你",
        ar: [{name: "薛之谦"}],
        al: {
          name: "薛之谦专辑"
        }
      },
    ]
}
const list = {
  "id": 19723756,
  "name": "飙升榜",
  "coverImgId": 18696095720518496,
  "coverImgUrl": "https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg",
  "coverImgId_str": "18696095720518497",
  "adType": 0,
  "userId": 1,
  "createTime": 1404115136883,
  "status": 0,
  "opRecommend": false,
  "highQuality": false,
  "newImported": false,
  "updateTime": 1626136036030,
  "trackCount": 100,
  "specialType": 10,
  "privacy": 0,
  "trackUpdateTime": 1626162563446,
  "commentThreadId": "A_PL_0_19723756",
  "playCount": 4397064704,
  "trackNumberUpdateTime": 1626136020026,
  "subscribedCount": 3791851,
  "cloudTrackCount": 0,
  "ordered": true,
  "description": "云音乐中每天热度上升最快的100首单曲，每日更新。",
  "tags": [],
  "updateFrequency": null,
  "backgroundCoverId": 0,
  "backgroundCoverUrl": null,
  "titleImage": 0,
  "titleImageUrl": null,
  "englishTitle": null,
  "officialPlaylistType": null,
  "subscribers": [
    {
      "defaultAvatar": false,
      "province": 360000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/goT0bXg5D1BnfXuARXQNmA==/109951163451622844.jpg",
      "accountStatus": 0,
      "gender": 2,
      "city": 360800,
      "birthday": -2209017600000,
      "userId": 1549305939,
      "userType": 0,
      "nickname": "馥守",
      "signature": "以你为名的世界一定很美",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951163451622850,
      "backgroundImgId": 109951163451639900,
      "backgroundUrl": "http://p1.music.126.net/lS3slFqzRxh471ygq9b_qw==/109951163451639907.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951163451622844",
      "backgroundImgIdStr": "109951163451639907",
      "anchor": false,
      "avatarImgId_str": "109951163451622844"
    },
    {
      "defaultAvatar": false,
      "province": 320000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/DbUbrcWq9Y4r99bNzDezww==/109951165204154532.jpg",
      "accountStatus": 0,
      "gender": 2,
      "city": 320100,
      "birthday": -2209017600000,
      "userId": 1957480012,
      "userType": 0,
      "nickname": "hanyaonan",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951165204154530,
      "backgroundImgId": 109951162868128400,
      "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951165204154532",
      "backgroundImgIdStr": "109951162868128395",
      "anchor": false,
      "avatarImgId_str": "109951165204154532"
    },
    {
      "defaultAvatar": false,
      "province": 370000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/6snBC7gWWJyhj2vihuWwow==/109951166173812478.jpg",
      "accountStatus": 0,
      "gender": 1,
      "city": 371600,
      "birthday": 1011530699379,
      "userId": 552299621,
      "userType": 0,
      "nickname": "Stinger_5",
      "signature": "斑驳的黑白",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951166173812480,
      "backgroundImgId": 109951162868128400,
      "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951166173812478",
      "backgroundImgIdStr": "109951162868128395",
      "anchor": false,
      "avatarImgId_str": "109951166173812478"
    },
    {
      "defaultAvatar": false,
      "province": 0,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
      "accountStatus": 0,
      "gender": 2,
      "city": 100,
      "birthday": -2209017600000,
      "userId": 5087251065,
      "userType": 0,
      "nickname": "用户5087252208",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951165647004060,
      "backgroundImgId": 109951162868126480,
      "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951165647004069",
      "backgroundImgIdStr": "109951162868126486",
      "anchor": false,
      "avatarImgId_str": "109951165647004069"
    },
    {
      "defaultAvatar": false,
      "province": 530000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/Nw9MA8ogevSozeAGlp-25A==/109951165238925863.jpg",
      "accountStatus": 0,
      "gender": 1,
      "city": 530100,
      "birthday": -2209017600000,
      "userId": 1788135937,
      "userType": 0,
      "nickname": "Hunter_E0sN",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951165238925860,
      "backgroundImgId": 109951162868126480,
      "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951165238925863",
      "backgroundImgIdStr": "109951162868126486",
      "anchor": false,
      "avatarImgId_str": "109951165238925863"
    },
    {
      "defaultAvatar": false,
      "province": 340000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/m1RDx1PweK-v3rulO8JuRw==/109951165941594982.jpg",
      "accountStatus": 0,
      "gender": 2,
      "city": 340300,
      "birthday": 1174046769332,
      "userId": 4994303376,
      "userType": 0,
      "nickname": "凤黎瑜",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951165941594980,
      "backgroundImgId": 109951162868126480,
      "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951165941594982",
      "backgroundImgIdStr": "109951162868126486",
      "anchor": false,
      "avatarImgId_str": "109951165941594982"
    },
    {
      "defaultAvatar": false,
      "province": 440000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/8hGzmnsUN9GYxRE9UMkV9A==/109951163302238830.jpg",
      "accountStatus": 0,
      "gender": 2,
      "city": 440500,
      "birthday": 1072195011881,
      "userId": 1459161646,
      "userType": 0,
      "nickname": "iii阿笙",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951163302238830,
      "backgroundImgId": 109951163302243620,
      "backgroundUrl": "http://p1.music.126.net/PWhtRS7xX6uXcCsvGz0eKg==/109951163302243613.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951163302238830",
      "backgroundImgIdStr": "109951163302243613",
      "anchor": false,
      "avatarImgId_str": "109951163302238830"
    },
    {
      "defaultAvatar": false,
      "province": 230000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
      "accountStatus": 0,
      "gender": 0,
      "city": 230100,
      "birthday": -2209017600000,
      "userId": 3696705198,
      "userType": 0,
      "nickname": "忘川_P_",
      "signature": "",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951165647004060,
      "backgroundImgId": 109951162868128400,
      "backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": null,
      "experts": null,
      "djStatus": 0,
      "vipType": 0,
      "remarkName": null,
      "authenticationTypes": 0,
      "avatarDetail": null,
      "avatarImgIdStr": "109951165647004069",
      "backgroundImgIdStr": "109951162868128395",
      "anchor": false,
      "avatarImgId_str": "109951165647004069"
    }
  ],
  "subscribed": null,
  "creator": {
    "defaultAvatar": false,
    "province": 110000,
    "authStatus": 1,
    "followed": false,
    "avatarUrl": "http://p1.music.126.net/u9WtIRsF39ayeb5HX7bm8A==/109951165806093811.jpg",
    "accountStatus": 0,
    "gender": 1,
    "city": 110101,
    "birthday": -2209017600000,
    "userId": 1,
    "userType": 2,
    "nickname": "网易云音乐",
    "signature": "网易云音乐是8亿人都在使用的音乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。 \n2019年8月31日起，将不再提供实时在线人工服务。您可以优先通过自助方式解决问题，如仍需求助，可在相关页面留下您的问题，后续会有人工为您解答，辛苦您耐心等待，给您带来的不便敬请谅解。 如果仍然不能解决您的问题，可以邮件我们： 用户：ncm5990@163.com 音乐人：yyr599@163.com",
    "description": "网易云音乐官方账号",
    "detailDescription": "网易云音乐官方账号",
    "avatarImgId": 109951165806093810,
    "backgroundImgId": 109951165363002800,
    "backgroundUrl": "http://p1.music.126.net/pSEHaYQA2pWbc30Rrr3ayA==/109951165363002796.jpg",
    "authority": 3,
    "mutual": false,
    "expertTags": null,
    "experts": null,
    "djStatus": 10,
    "vipType": 11,
    "remarkName": null,
    "authenticationTypes": 4098,
    "avatarDetail": {
      "userType": 2,
      "identityLevel": 1,
      "identityIconUrl": "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4788940880/1a1f/68f5/b59a/b444b81b88567108ba88194fa29144f5.png"
    },
    "avatarImgIdStr": "109951165806093811",
    "backgroundImgIdStr": "109951165363002796",
    "anchor": true,
    "avatarImgId_str": "109951165806093811"
  },
  "tracks": [
    {
      "name": "还是会想你",
      "id": 1827600686,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 15199791,
          "name": "林达浪",
          "tns": [],
          "alias": []
        },
        {
          "id": 12631485,
          "name": "h3R3",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 124309279,
        "name": "还是会想你",
        "picUrl": "http://p3.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg",
        "tns": [],
        "pic_str": "109951165798773745",
        "pic": 109951165798773740
      },
      "dt": 190063,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7605165,
        "vd": -65927
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4563117,
        "vd": -63374
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3042093,
        "vd": -61772
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "放空",
      "id": 1841002409,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 33735716,
          "name": "大籽",
          "tns": [],
          "alias": []
        },
        {
          "id": 35518640,
          "name": "Lil E",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126689451,
        "name": "放空",
        "picUrl": "http://p4.music.126.net/ocVnhvD-nXHKEM3TvBUZsw==/109951165931493179.jpg",
        "tns": [],
        "pic_str": "109951165931493179",
        "pic": 109951165931493180
      },
      "dt": 150626,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6027885,
        "vd": -54489
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3616749,
        "vd": -51884
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2411181,
        "vd": -50198
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1419026,
      "publishTime": 1619712000000
    },
    {
      "name": "好事要发生",
      "id": 1859925893,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 2524,
          "name": "大张伟",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130147476,
        "name": "好事要发生",
        "picUrl": "http://p3.music.126.net/rAnr7NKPkLcQRbGcJQkipQ==/109951166162697121.jpg",
        "tns": [],
        "pic_str": "109951166162697121",
        "pic": 109951166162697120
      },
      "dt": 191648,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7668550,
        "vd": -68776
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4601147,
        "vd": -66274
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3067446,
        "vd": -64815
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1626019200000
    },
    {
      "name": "Moon Halo",
      "id": 1859652717,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1003026,
          "name": "茶理理",
          "tns": [],
          "alias": []
        },
        {
          "id": 1081556,
          "name": "TetraCalyx",
          "tns": [],
          "alias": []
        },
        {
          "id": 1049179,
          "name": "Hanser",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "崩坏3《薪炎永燃》动画短片印象曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130098008,
        "name": "Moon Halo",
        "picUrl": "http://p3.music.126.net/ciLKATqflV2YWSV3ltE2Kw==/109951166159281275.jpg",
        "tns": [],
        "pic_str": "109951166159281275",
        "pic": 109951166159281280
      },
      "dt": 204054,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8164845,
        "vd": -57813
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4898925,
        "vd": -55315
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3265965,
        "vd": -53917
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14299094,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1625760000000
    },
    {
      "name": "Stay",
      "id": 1859245776,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32795025,
          "name": "The Kid LAROI",
          "tns": [],
          "alias": []
        },
        {
          "id": 35531,
          "name": "Justin Bieber",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130016223,
        "name": "Stay",
        "picUrl": "http://p4.music.126.net/e5cvcdgeosDKTDrkTfZXnQ==/109951166155165682.jpg",
        "tns": [],
        "pic_str": "109951166155165682",
        "pic": 109951166155165680
      },
      "dt": 141871,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5674885,
        "vd": -65994
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3404948,
        "vd": -63413
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2269980,
        "vd": -61765
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 1318912,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14298179,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "publishTime": 1625760000000
    },
    {
      "name": "等风 (银河系-付思超 Remix)",
      "id": 1853710741,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 47738151,
          "name": "张腾",
          "tns": [],
          "alias": []
        },
        {
          "id": 12580547,
          "name": "付思超",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129091469,
        "name": "等风 (银河系-付思超 Remix)",
        "picUrl": "http://p4.music.126.net/w_OEykxOyf5Zitjm_fynMw==/109951166091745925.jpg",
        "tns": [],
        "pic_str": "109951166091745925",
        "pic": 109951166091745920
      },
      "dt": 211334,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8456403,
        "vd": -50482
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5073859,
        "vd": -47964
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3382587,
        "vd": -46420
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Peaches",
      "id": 1860518817,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35531,
          "name": "Justin Bieber",
          "tns": [],
          "alias": []
        },
        {
          "id": 1021293,
          "name": "Daniel Caesar",
          "tns": [],
          "alias": []
        },
        {
          "id": 32396647,
          "name": "Giveon",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130226831,
        "name": "Beach Party Music 2021",
        "picUrl": "http://p4.music.126.net/f7hrPT2gFglYrzvtkm6bmw==/109951166170404717.jpg",
        "tns": [],
        "pic_str": "109951166170404717",
        "pic": 109951166170404720
      },
      "dt": 198112,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7925595,
        "vd": -58732
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4755374,
        "vd": -56138
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3170264,
        "vd": -54452
      },
      "a": null,
      "cd": "01",
      "no": 21,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 1318912,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1626019200000
    },
    {
      "name": "环绕",
      "id": 1841194853,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 819001,
          "name": "张哲瀚",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 4,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126730351,
        "name": "环绕",
        "picUrl": "http://p3.music.126.net/BrH-WJvGrHfyH-TMF4B2mg==/109951165959575638.jpg",
        "tns": [],
        "pic_str": "109951165959575638",
        "pic": 109951165959575630
      },
      "dt": 181333,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7255725,
        "vd": -56254
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4353453,
        "vd": -53749
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2902317,
        "vd": -52256
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2708449,
      "publishTime": 0
    },
    {
      "name": "我的样子比我年轻",
      "id": 1859925050,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5551,
          "name": "吴俊余",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130148243,
        "name": "我的样子比我年轻",
        "picUrl": "http://p3.music.126.net/JIiGWWI_hdg1vruTesPt0g==/109951166164890625.jpg",
        "tns": [],
        "pic_str": "109951166164890625",
        "pic": 109951166164890620
      },
      "dt": 274072,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 10965165,
        "vd": -31873
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6579117,
        "vd": -29364
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4386093,
        "vd": -27919
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14299110,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1626019200000
    },
    {
      "name": "星河",
      "id": 1859938842,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 10695,
          "name": "张远",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "影视剧《喵，请许愿》插曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130149065,
        "name": "喵，请许愿 影视原声带",
        "picUrl": "http://p4.music.126.net/PCW_LK6mY_vWHUmLS_b5RA==/109951166162848051.jpg",
        "tns": [],
        "pic_str": "109951166162848051",
        "pic": 109951166162848050
      },
      "dt": 228361,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9137325,
        "vd": -33673
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5482413,
        "vd": -31046
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3654957,
        "vd": -29360
      },
      "a": null,
      "cd": "01",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14299192,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416740,
      "publishTime": 1626019200000
    },
    {
      "name": "The way to live",
      "id": 1858112698,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12308350,
          "name": "韩美娟",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129847081,
        "name": "The way to live",
        "picUrl": "http://p4.music.126.net/RGV_dKT3Fz1M_CSq06yJJQ==/109951166141225873.jpg",
        "tns": [
          "我生活的方式"
        ],
        "pic_str": "109951166141225873",
        "pic": 109951166141225870
      },
      "dt": 257000,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 10282605,
        "vd": -41042
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6169581,
        "vd": -38447
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4113069,
        "vd": -36794
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14298333,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2709442,
      "publishTime": 1625673600000,
      "tns": [
        "我生活的方式"
      ]
    },
    {
      "name": "Will save us -Short Ver.",
      "id": 1859631351,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48815049,
          "name": "川津明日香",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "特摄剧《假面骑士圣刃》插曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130095310,
        "name": "Will save us -Short Ver.",
        "picUrl": "http://p3.music.126.net/UBOlBqiLOsrk6BXO2P0KKg==/109951166159101370.jpg",
        "tns": [
          "特摄剧《假面骑士圣刃》插曲"
        ],
        "pic_str": "109951166159101370",
        "pic": 109951166159101380
      },
      "dt": 112400,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 4498329,
        "vd": -53255
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 2699015,
        "vd": -50675
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 1799358,
        "vd": -49087
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 457010,
      "publishTime": 1626019200000,
      "tns": [
        "将拯救我们-短版"
      ]
    },
    {
      "name": "写给你的歌",
      "id": 1859975710,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48637873,
          "name": "陈柯霓",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130153895,
        "name": "写给你的歌",
        "picUrl": "http://p4.music.126.net/yqjt2svd4A935Kti9OamWA==/109951166163310076.jpg",
        "tns": [],
        "pic_str": "109951166163310076",
        "pic": 109951166163310080
      },
      "dt": 263931,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10560045,
        "vd": -49666
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6336045,
        "vd": -47037
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4224045,
        "vd": -45268
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "一个人",
      "id": 1857853051,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35187624,
          "name": "叶琼琳",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129799009,
        "name": "一个人",
        "picUrl": "http://p4.music.126.net/I-fiEX0_qIbC4Lt5m7xwdQ==/109951166138054257.jpg",
        "tns": [],
        "pic_str": "109951166138054257",
        "pic": 109951166138054260
      },
      "dt": 210447,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8420205,
        "vd": -46192
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5052141,
        "vd": -43577
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3368109,
        "vd": -41900
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "即便",
      "id": 1857232779,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12349011,
          "name": "李学仕",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129670560,
        "name": "即便",
        "picUrl": "http://p4.music.126.net/R0rGR9Vi0PbjiS266UluyQ==/109951166131574233.jpg",
        "tns": [],
        "pic_str": "109951166131574233",
        "pic": 109951166131574240
      },
      "dt": 170000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 6802605,
        "vd": -8132
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4081581,
        "vd": -5527
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2721069,
        "vd": -3864
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 262144,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "25",
      "id": 1842765421,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34624664,
          "name": "王云宏",
          "tns": [],
          "alias": []
        },
        {
          "id": 13451730,
          "name": "0883",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 11,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126993955,
        "name": "25",
        "picUrl": "http://p3.music.126.net/ErQqvx0v-cs9wiSSLg5pyw==/109951165953810948.jpg",
        "tns": [],
        "pic_str": "109951165953810948",
        "pic": 109951165953810940
      },
      "dt": 206117,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8247423,
        "vd": -32555
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4948471,
        "vd": -29917
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3298995,
        "vd": -28129
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "就这样疯狂吧",
      "id": 1856616055,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12487017,
          "name": "魏巡",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129583573,
        "name": "就这样疯狂吧",
        "picUrl": "http://p4.music.126.net/3Ydio_jbGsrQYJUNiMZzpw==/109951166123950283.jpg",
        "tns": [],
        "pic_str": "109951166123950283",
        "pic": 109951166123950290
      },
      "dt": 208551,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8344365,
        "vd": -60757
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5006637,
        "vd": -58277
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3337773,
        "vd": -56969
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2707463,
      "publishTime": 0
    },
    {
      "name": "般配",
      "id": 1859339684,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12471927,
          "name": "江皓南",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130039504,
        "name": "般配",
        "picUrl": "http://p3.music.126.net/_8D98wTjXWMhYl5Bofui0w==/109951166155884642.jpg",
        "tns": [],
        "pic_str": "109951166155884642",
        "pic": 109951166155884640
      },
      "dt": 181500,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7263129,
        "vd": -57706
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4357895,
        "vd": -55112
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2905278,
        "vd": -53424
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 262144,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1625846400000
    },
    {
      "name": "小心翼翼",
      "id": 1859907060,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12054456,
          "name": "董又霖",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130146147,
        "name": "小心翼翼",
        "picUrl": "http://p3.music.126.net/m19D2zjOgG377D7kBOY20Q==/109951166162477529.jpg",
        "tns": [],
        "pic_str": "109951166162477529",
        "pic": 109951166162477540
      },
      "dt": 244565,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9785325,
        "vd": -51113
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5871213,
        "vd": -48537
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3914157,
        "vd": -46873
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1418063,
      "publishTime": 0
    },
    {
      "name": "中国老总",
      "id": 1850277666,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31960387,
          "name": "闽南狼PYC",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128415823,
        "name": "林北",
        "picUrl": "http://p4.music.126.net/BoZsbUFWN_ojQeDS2jsi6Q==/109951166055643051.jpg",
        "tns": [],
        "pic_str": "109951166055643051",
        "pic": 109951166055643060
      },
      "dt": 178432,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7139565,
        "vd": -16682
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4283757,
        "vd": -14061
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2855853,
        "vd": -12367
      },
      "a": null,
      "cd": "01",
      "no": 4,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "时光背面的我",
      "id": 1858139145,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1172023,
          "name": "刘至佳",
          "tns": [],
          "alias": []
        },
        {
          "id": 13007752,
          "name": "韩瞳",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129849508,
        "name": "时光背面的我",
        "picUrl": "http://p3.music.126.net/VOcPF6uCGAlwESFyyGqHrg==/109951166141514551.jpg",
        "tns": [],
        "pic_str": "109951166141514551",
        "pic": 109951166141514540
      },
      "dt": 181348,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7256860,
        "vd": -58753
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4354133,
        "vd": -56180
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2902770,
        "vd": -54551
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416618,
      "publishTime": 1625500800000
    },
    {
      "name": "独处",
      "id": 1860245965,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1047298,
          "name": "CADY",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130197864,
        "name": "独处",
        "picUrl": "http://p3.music.126.net/6Qc5q8T-dn3rWDh5ojVPhA==/109951166166703081.jpg",
        "tns": [],
        "pic_str": "109951166166703081",
        "pic": 109951166166703090
      },
      "dt": 217965,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8720762,
        "vd": -71867
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5232475,
        "vd": -69304
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3488331,
        "vd": -67690
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "留在心间",
      "id": 1855756259,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30134331,
          "name": "丁文秀",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129431000,
        "name": "留在心间",
        "picUrl": "http://p4.music.126.net/NYH6ENQKhnU2r4OPf_iCoA==/109951166114366661.jpg",
        "tns": [],
        "pic_str": "109951166114366661",
        "pic": 109951166114366660
      },
      "dt": 297107,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 11886765,
        "vd": -46232
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 7132077,
        "vd": -43654
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4754733,
        "vd": -42053
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2707463,
      "publishTime": 0
    },
    {
      "name": "写你成歌",
      "id": 1854142292,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 33995829,
          "name": "王雨桐",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129184167,
        "name": "写你成歌",
        "picUrl": "http://p4.music.126.net/L0qDyMyzvX26uag1Fgge6A==/109951166096127557.jpg",
        "tns": [],
        "pic_str": "109951166096127557",
        "pic": 109951166096127550
      },
      "dt": 233142,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 9328365,
        "vd": -28414
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5597037,
        "vd": -25867
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3731373,
        "vd": -24217
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "温柔的病",
      "id": 1860398803,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30116848,
          "name": "阿冗",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 9,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130212211,
        "name": "温柔的病",
        "picUrl": "http://p4.music.126.net/JdTaz4IZwYjuwiI2zymntg==/109951166168655576.jpg",
        "tns": [],
        "pic_str": "109951166168655576",
        "pic": 109951166168655580
      },
      "dt": 297584,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 11905611,
        "vd": -54867
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7143384,
        "vd": -52274
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4762271,
        "vd": -50572
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Stitches",
      "id": 1859880109,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 956238,
          "name": "Shawn Mendes",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130141711,
        "name": "Tik Tock Summer 2021",
        "picUrl": "http://p3.music.126.net/tB3cIrvHL9iwOuJtM9NrtA==/109951166162089293.jpg",
        "tns": [],
        "pic_str": "109951166162089293",
        "pic": 109951166162089300
      },
      "dt": 206915,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8277725,
        "vd": -55834
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4966653,
        "vd": -53375
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3311116,
        "vd": -52060
      },
      "a": null,
      "cd": "01",
      "no": 25,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1625760000000
    },
    {
      "name": "kIng",
      "id": 1859632074,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 14098549,
          "name": "鈴木瑛美子",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "TV动画《王者天下 第三季》片尾曲2"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130095312,
        "name": "kIng",
        "picUrl": "http://p4.music.126.net/f4EsK1EmnqRY6Onq-zDAwg==/109951166159105263.jpg",
        "tns": [],
        "pic_str": "109951166159105263",
        "pic": 109951166159105260
      },
      "dt": 230826,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9235897,
        "vd": -54833
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5541555,
        "vd": -52369
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3694385,
        "vd": -50874
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 457010,
      "publishTime": 1626019200000
    },
    {
      "name": "目及皆是你",
      "id": 1847975477,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 46961650,
          "name": "小蓝背心",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127968653,
        "name": "目及皆是你",
        "picUrl": "http://p4.music.126.net/jDTEtAnZiDvfq5iBpLQBRA==/109951166171265193.jpg",
        "tns": [],
        "pic_str": "109951166171265193",
        "pic": 109951166171265200
      },
      "dt": 231046,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 9243885,
        "vd": -28377
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5546349,
        "vd": -25765
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3697581,
        "vd": -24034
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 262144,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416318,
      "publishTime": 1622217600000
    },
    {
      "name": "最后的人",
      "id": 1854829854,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48196977,
          "name": "杨杨哥哥",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129285094,
        "name": "得不到的人",
        "picUrl": "http://p4.music.126.net/Ux8NPY3S2aqM-gvZcDdeQw==/109951166104546075.jpg",
        "tns": [],
        "pic_str": "109951166104546075",
        "pic": 109951166104546080
      },
      "dt": 248214,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9931245,
        "vd": 3985
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5958765,
        "vd": 6597
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3972525,
        "vd": 8295
      },
      "a": null,
      "cd": "01",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "The Nights",
      "id": 1859847042,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 45236,
          "name": "Avicii",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130138742,
        "name": "Celebrating Friendship",
        "picUrl": "http://p3.music.126.net/raE01zXI5btqrN-kBCaAgw==/109951166161757331.jpg",
        "tns": [],
        "pic_str": "109951166161757331",
        "pic": 109951166161757330
      },
      "dt": 178102,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7125203,
        "vd": -71940
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4275139,
        "vd": -69452
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2850107,
        "vd": -68059
      },
      "a": null,
      "cd": "01",
      "no": 27,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1625760000000
    },
    {
      "name": "武林也要与时俱进",
      "id": 1860234203,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 29234568,
          "name": "陈亦洺",
          "tns": [],
          "alias": []
        },
        {
          "id": 37194928,
          "name": "袁铭喆",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130197319,
        "name": "武林也要与时俱进",
        "picUrl": "http://p4.music.126.net/BfeKWacTKfJwMA_7oim6lA==/109951166166434651.jpg",
        "tns": [],
        "pic_str": "109951166166434651",
        "pic": 109951166166434660
      },
      "dt": 193823,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7754925,
        "vd": -59637
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4652973,
        "vd": -57073
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3101997,
        "vd": -55457
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1418167,
      "publishTime": 0
    },
    {
      "name": "Kiss Me More",
      "id": 1835514122,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 911131,
          "name": "Doja Cat",
          "tns": [],
          "alias": []
        },
        {
          "id": 905232,
          "name": "SZA",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 125688580,
        "name": "Kiss Me More",
        "picUrl": "http://p4.music.126.net/1DdFvinGow812XdZl9ilgA==/109951165869944664.jpg",
        "tns": [],
        "pic_str": "109951165869944664",
        "pic": 109951165869944670
      },
      "dt": 208927,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8357138,
        "vd": -67022
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5014300,
        "vd": -64459
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3342881,
        "vd": -62824
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 1318912,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14279267,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "publishTime": 1617897600000
    },
    {
      "name": "By your side（在你身边）",
      "id": 1860245702,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35187588,
          "name": "Seb.",
          "tns": [],
          "alias": []
        },
        {
          "id": 48730046,
          "name": "竹子",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130197314,
        "name": "By your side（在你身边）",
        "picUrl": "http://p3.music.126.net/nKSpd33U00gwxddRONOWGQ==/109951166166427699.jpg",
        "tns": [],
        "pic_str": "109951166166427699",
        "pic": 109951166166427700
      },
      "dt": 220909,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8838836,
        "vd": -61758
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5303319,
        "vd": -59194
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3535560,
        "vd": -57570
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "只你爱我残缺",
      "id": 1860577034,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35215266,
          "name": "海娃",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130235739,
        "name": "只你爱我残缺",
        "picUrl": "http://p4.music.126.net/JdnJ9qg-NhsD8Jzhzo2mTg==/109951166171195955.jpg",
        "tns": [],
        "pic_str": "109951166171195955",
        "pic": 109951166171195950
      },
      "dt": 250861,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10037333,
        "vd": -33755
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6022417,
        "vd": -31149
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4014959,
        "vd": -29471
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "万疆",
      "id": 1840861309,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 4130,
          "name": "李玉刚",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126661770,
        "name": "万疆",
        "picUrl": "http://p4.music.126.net/UQPif4rqzXS81gxeHdXYuQ==/109951165930285966.jpg",
        "tns": [],
        "pic_str": "109951165930285966",
        "pic": 109951165930285970
      },
      "dt": 234919,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9397856,
        "vd": -41221
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5638731,
        "vd": -38628
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3759168,
        "vd": -36927
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14288274,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "publishTime": 1620057600000
    },
    {
      "name": "We Are The People (Official UEFA EURO 2020 Song)",
      "id": 1843889342,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 780003,
          "name": "Martin Garrix",
          "tns": [],
          "alias": []
        },
        {
          "id": 49737,
          "name": "Bono",
          "tns": [],
          "alias": []
        },
        {
          "id": 45312,
          "name": "The Edge",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "2020欧洲杯主题曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127181581,
        "name": "We Are The People (Official UEFA EURO 2020 Song)",
        "picUrl": "http://p3.music.126.net/NNafYSOavRKvC4KQGdabqw==/109951165967350544.jpg",
        "tns": [],
        "pic_str": "109951165967350544",
        "pic": 109951165967350540
      },
      "dt": 217051,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8683146,
        "vd": -67757
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5209905,
        "vd": -65270
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3473284,
        "vd": -63770
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "publishTime": 1621094400000
    },
    {
      "name": "把温柔的一面留给你",
      "id": 1858080200,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34532678,
          "name": "Zeebu",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129843506,
        "name": "16 Sixteen",
        "picUrl": "http://p4.music.126.net/lRwbdZLyus2XyJanu1VnEw==/109951166140654417.jpg",
        "tns": [],
        "pic_str": "109951166140654417",
        "pic": 109951166140654420
      },
      "dt": 130000,
      "h": {
        "br": 320003,
        "fid": 0,
        "size": 5202285,
        "vd": -11710
      },
      "m": {
        "br": 192003,
        "fid": 0,
        "size": 3121389,
        "vd": -9100
      },
      "l": {
        "br": 128003,
        "fid": 0,
        "size": 2080941,
        "vd": -7402
      },
      "a": null,
      "cd": "01",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "backbone",
      "id": 1847059460,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30003804,
          "name": "404 RAPPER",
          "tns": [],
          "alias": []
        },
        {
          "id": 29304235,
          "name": "Melo",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127807464,
        "name": "backbone",
        "picUrl": "http://p4.music.126.net/g-pH4e8w4JxvzVXEmdJ9Pw==/109951166002263221.jpg",
        "tns": [],
        "pic_str": "109951166002263221",
        "pic": 109951166002263220
      },
      "dt": 137142,
      "h": {
        "br": 320003,
        "fid": 0,
        "size": 5488365,
        "vd": -53023
      },
      "m": {
        "br": 192003,
        "fid": 0,
        "size": 3293037,
        "vd": -50416
      },
      "l": {
        "br": 128003,
        "fid": 0,
        "size": 2195373,
        "vd": -48784
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Your Name",
      "id": 1845299729,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 37561126,
          "name": "LCGongS7",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 10,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127464584,
        "name": "YOUR NAMES",
        "picUrl": "http://p4.music.126.net/6rohb2fJbVumEySr369HKw==/109951166076727686.jpg",
        "tns": [],
        "pic_str": "109951166076727686",
        "pic": 109951166076727680
      },
      "dt": 235292,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9414574,
        "vd": -67035
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5648762,
        "vd": -64518
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3765856,
        "vd": -63208
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "U",
      "id": 1859064990,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31855626,
          "name": "millennium parade",
          "tns": [],
          "alias": []
        },
        {
          "id": 30615252,
          "name": "中村佳穂",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "动画电影《龙和雀斑公主》印象曲"
      ],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129989799,
        "name": "U",
        "picUrl": "http://p3.music.126.net/F5sYHWv2lIynD_AQkHVzGA==/109951166153007215.jpg",
        "tns": [],
        "pic_str": "109951166153007215",
        "pic": 109951166153007220
      },
      "dt": 187324,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7493007,
        "vd": -52461
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4495822,
        "vd": -50092
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2997229,
        "vd": -48818
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2706476,
      "publishTime": 1626019200000
    },
    {
      "name": "和你匹配",
      "id": 1829828597,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35506271,
          "name": "0-100",
          "tns": [],
          "alias": []
        },
        {
          "id": 12270343,
          "name": "地下8英里",
          "tns": [],
          "alias": []
        },
        {
          "id": 28638705,
          "name": "阿斯巴田ASPT",
          "tns": [],
          "alias": []
        },
        {
          "id": 33837450,
          "name": "Drunkid达芬奇",
          "tns": [],
          "alias": []
        },
        {
          "id": 6309,
          "name": "Mai",
          "tns": [],
          "alias": []
        },
        {
          "id": 14119278,
          "name": "HYPER MUSIC",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 124571657,
        "name": "和你匹配",
        "picUrl": "http://p4.music.126.net/VTjNLOweoZs8i0PJnmodAw==/109951165809040747.jpg",
        "tns": [],
        "pic_str": "109951165809040747",
        "pic": 109951165809040750
      },
      "dt": 192096,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7686765,
        "vd": -56368
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4612077,
        "vd": -53786
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3074733,
        "vd": -52128
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14273027,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416745,
      "publishTime": 1615910400000
    },
    {
      "name": "失联万人迷",
      "id": 1837758344,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 13790589,
          "name": "坤木Joymo",
          "tns": [],
          "alias": []
        },
        {
          "id": 12292356,
          "name": "灯灯灯泡",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126086470,
        "name": "失联万人迷",
        "picUrl": "http://p4.music.126.net/DjHEDa0DRGFAX79Rz7xX7g==/109951165894966144.jpg",
        "tns": [],
        "pic_str": "109951165894966144",
        "pic": 109951165894966140
      },
      "dt": 151250,
      "h": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3631900,
        "vd": -30657
      },
      "l": null,
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "高考那个夏天（With Hook）",
      "id": 1832399395,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12172312,
          "name": "高宇Slient",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 9,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127942092,
        "name": "高考那个夏天",
        "picUrl": "http://p3.music.126.net/4RykM52XvUd5avvhbzFFKA==/109951166031360436.jpg",
        "tns": [],
        "pic_str": "109951166031360436",
        "pic": 109951166031360430
      },
      "dt": 188000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7522264,
        "vd": -17839
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4513376,
        "vd": -15202
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3008932,
        "vd": -13444
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "巴赫旧约",
      "id": 1819024549,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12002248,
          "name": "沈以诚",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 12,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122741806,
        "name": "旧故事 (He Was)",
        "picUrl": "http://p3.music.126.net/r2TpKSvBMVHNT9FGw-CaNA==/109951165709492923.jpg",
        "tns": [],
        "pic_str": "109951165709492923",
        "pic": 109951165709492930
      },
      "dt": 213272,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8533725,
        "vd": -64138
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5120253,
        "vd": -61546
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3413516,
        "vd": -59941
      },
      "a": null,
      "cd": "01",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2707419,
      "publishTime": 1618934400000
    },
    {
      "name": "Hiding In The Blue",
      "id": 1852002829,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1019952,
          "name": "TheFatRat",
          "tns": [],
          "alias": []
        },
        {
          "id": 30558622,
          "name": "Riell",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128736879,
        "name": "Hiding In The Blue",
        "picUrl": "http://p4.music.126.net/ADpiRZBWME85KQ9SpXTWVw==/109951166074180029.jpg",
        "tns": [],
        "pic_str": "109951166074180029",
        "pic": 109951166074180030
      },
      "dt": 221700,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8870182,
        "vd": -59247
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5322127,
        "vd": -56686
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3548099,
        "vd": -55102
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 743010,
      "publishTime": 1625760000000
    },
    {
      "name": "2021",
      "id": 1859964178,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12357157,
          "name": "新秀",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130153042,
        "name": "2021",
        "picUrl": "http://p4.music.126.net/usG6i4HMz2blsoXzXWtycA==/109951166163192275.jpg",
        "tns": [],
        "pic_str": "109951166163192275",
        "pic": 109951166163192270
      },
      "dt": 249966,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10001325,
        "vd": -30769
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6000813,
        "vd": -28283
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4000557,
        "vd": -26749
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 262144,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1625846400000
    },
    {
      "name": "山河砚",
      "id": 1860274389,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5568,
          "name": "Winky诗",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130198916,
        "name": "《天下3》“万象归宗”2021年11门派音乐特辑",
        "picUrl": "http://p4.music.126.net/YPetAL0aUnKbyxy_njb2vw==/109951166167105291.jpg",
        "tns": [],
        "pic_str": "109951166167105291",
        "pic": 109951166167105300
      },
      "dt": 249025,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 9963146,
        "vd": -40811
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 5977905,
        "vd": -38193
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 3985284,
        "vd": -36502
      },
      "a": null,
      "cd": "01",
      "no": 9,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2708479,
      "publishTime": 0
    },
    {
      "name": "GASMAN",
      "id": 1845762728,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32913327,
          "name": "某幻君",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 8,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127554053,
        "name": "Gasman",
        "picUrl": "http://p4.music.126.net/5ykxjCZ2iY3XPsgm7_5x4Q==/109951165987564836.jpg",
        "tns": [],
        "pic_str": "109951165987564836",
        "pic": 109951165987564830
      },
      "dt": 170428,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6819885,
        "vd": -44549
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4091949,
        "vd": -41972
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2727981,
        "vd": -40469
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "海边",
      "id": 1860160375,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 35233297,
          "name": "武连压",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 7,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130188349,
        "name": "四次元",
        "picUrl": "http://p3.music.126.net/idnUXFZqX5PF3dfoV3gqIQ==/109951166165611092.jpg",
        "tns": [],
        "pic_str": "109951166165611092",
        "pic": 109951166165611090
      },
      "dt": 180192,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7210885,
        "vd": -54291
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4326548,
        "vd": -51913
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2884380,
        "vd": -50639
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "斩草歌",
      "id": 1859907592,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 9270,
          "name": "萨顶顶",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "《斩妖行》主题曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130145807,
        "name": "斩草歌",
        "picUrl": "http://p4.music.126.net/g1UrHonRdtXXFVSaUq0pOA==/109951166162535814.jpg",
        "tns": [],
        "pic_str": "109951166162535814",
        "pic": 109951166162535800
      },
      "dt": 250751,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10032045,
        "vd": -37039
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6019245,
        "vd": -34440
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4012845,
        "vd": -32769
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14299096,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1418026,
      "publishTime": 0
    },
    {
      "name": "硕鼠",
      "id": 1841418475,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30955486,
          "name": "Bo Peep",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 126767615,
        "name": "硕鼠",
        "picUrl": "http://p4.music.126.net/U0IG_IVpkA7zk7leFqBlBQ==/109951165936199344.jpg",
        "tns": [],
        "pic_str": "109951165936199344",
        "pic": 109951165936199340
      },
      "dt": 139200,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5570395,
        "vd": -55431
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3342254,
        "vd": -52915
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2228184,
        "vd": -51340
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "摩斯电码",
      "id": 1855784429,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 33762221,
          "name": "lil MILK",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122099424,
        "name": "正义",
        "picUrl": "http://p3.music.126.net/TWG9OFQKWhT58uNh0AV6og==/109951165665784338.jpg",
        "tns": [],
        "pic_str": "109951165665784338",
        "pic": 109951165665784340
      },
      "dt": 154838,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6195885,
        "vd": -61047
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3717549,
        "vd": -58515
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2478381,
        "vd": -57041
      },
      "a": null,
      "cd": "01",
      "no": 7,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1611504000000
    },
    {
      "name": "Love In The Air(拉阔)",
      "id": 1858618041,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31337037,
          "name": "B.B Auntie(白石洲安缇)",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 8,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129932404,
        "name": "恋爱的季节",
        "picUrl": "http://p3.music.126.net/edvy7nAQkniJty77tyzOPw==/109951166147424351.jpg",
        "tns": [],
        "pic_str": "109951166147424351",
        "pic": 109951166147424350
      },
      "dt": 234000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 9361965,
        "vd": -48726
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5617197,
        "vd": -46136
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3744813,
        "vd": -44459
      },
      "a": null,
      "cd": "01",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 524288,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "无人岛",
      "id": 1452055727,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 14072226,
          "name": "李霖森",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 10,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122474060,
        "name": "祝我们好在春夏秋冬",
        "picUrl": "http://p4.music.126.net/uT8C1-oi7xungVArjNRRyQ==/109951166124347802.jpg",
        "tns": [],
        "pic_str": "109951166124347802",
        "pic": 109951166124347800
      },
      "dt": 240158,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9608925,
        "vd": 21035
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5765373,
        "vd": 23673
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3843596,
        "vd": 25438
      },
      "a": null,
      "cd": "01",
      "no": 5,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Somebody That I Used To Know (Remix)",
      "id": 1819828675,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 46319458,
          "name": "Farizki",
          "tns": [],
          "alias": []
        },
        {
          "id": 419437,
          "name": "Orfeo",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122976525,
        "name": "Somebody That I Used To Know",
        "picUrl": "http://p4.music.126.net/fJliyLSoWIyvDm4yFTvCQQ==/109951165720818804.jpg",
        "tns": [],
        "pic_str": "109951165720818804",
        "pic": 109951165720818800
      },
      "dt": 262199,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10490819,
        "vd": -36891
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6294509,
        "vd": -34300
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4196354,
        "vd": -32543
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 743010,
      "publishTime": 1612972800000
    },
    {
      "name": "骑行",
      "id": 1858408587,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48722772,
          "name": "北方歌神",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129908211,
        "name": "骑行",
        "picUrl": "http://p4.music.126.net/pymgynlRJVvd1wRPYt0UjA==/109951166144618833.jpg",
        "tns": [],
        "pic_str": "109951166144618833",
        "pic": 109951166144618830
      },
      "dt": 184346,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7375978,
        "vd": 4557
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4425604,
        "vd": 7167
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2950417,
        "vd": 8893
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 524288,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "rain",
      "id": 1855372809,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 47864270,
          "name": "YSSSS",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127124461,
        "name": "rain",
        "picUrl": "http://p3.music.126.net/zqKw8pOoINpyyXkJSWuzkA==/109951165963291328.jpg",
        "tns": [],
        "pic_str": "109951165963291328",
        "pic": 109951165963291330
      },
      "dt": 161541,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6463782,
        "vd": -48734
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3878287,
        "vd": -46115
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2585539,
        "vd": -44364
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "客子光阴",
      "id": 1806127843,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31002807,
          "name": "是七叔呢",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 120722782,
        "name": "客子光阴",
        "picUrl": "http://p3.music.126.net/eh3yVQwTtT_3PyzzNzxjSg==/109951165575294301.jpg",
        "tns": [],
        "pic_str": "109951165575294301",
        "pic": 109951165575294300
      },
      "dt": 181894,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7277805,
        "vd": -23576
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4366701,
        "vd": -20974
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2911149,
        "vd": -19305
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416842,
      "publishTime": 1608652800000
    },
    {
      "name": "天使",
      "id": 1844006025,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 47914397,
          "name": "AAAAXY",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127117664,
        "name": "天使",
        "picUrl": "http://p3.music.126.net/uhIHb0FFAFtvaNRd5fBmWQ==/109951165962433119.jpg",
        "tns": [],
        "pic_str": "109951165962433119",
        "pic": 109951165962433120
      },
      "dt": 162012,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 6483636,
        "vd": -33773
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 3890199,
        "vd": -31146
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2593480,
        "vd": -29398
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "High of Luv",
      "id": 1860006992,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48813592,
          "name": "sss",
          "tns": [],
          "alias": []
        },
        {
          "id": 37668404,
          "name": "lil fuel",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130159546,
        "name": "High of Luv",
        "picUrl": "http://p3.music.126.net/Mhuwf_HCRU0r9eJv2Jr9Tg==/109951166163704349.jpg",
        "tns": [],
        "pic_str": "109951166163704349",
        "pic": 109951166163704350
      },
      "dt": 127427,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5100191,
        "vd": -16945
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3060132,
        "vd": -14327
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2040102,
        "vd": -12629
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "your good girl",
      "id": 1454997009,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12052075,
          "name": "蜷花仕女",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 90796278,
        "name": "第一式：起源",
        "picUrl": "http://p3.music.126.net/w1WL3U4uPcv3UFDwpymt_A==/109951165057400556.jpg",
        "tns": [],
        "pic_str": "109951165057400556",
        "pic": 109951165057400560
      },
      "dt": 177042,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7083885,
        "vd": -51204
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4250349,
        "vd": -48601
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2833581,
        "vd": -46910
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Calling My Phone",
      "id": 1819036133,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 28391620,
          "name": "Lil Tjay",
          "tns": [],
          "alias": []
        },
        {
          "id": 12122239,
          "name": "6LACK",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122794832,
        "name": "Calling My Phone",
        "picUrl": "http://p4.music.126.net/qYR4BoYMO0Krvdu45eGy8w==/109951165711762762.jpg",
        "tns": [],
        "pic_str": "109951165711762762",
        "pic": 109951165711762770
      },
      "dt": 205505,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8221301,
        "vd": -30219
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4932798,
        "vd": -27679
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3288546,
        "vd": -26008
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7001,
      "publishTime": 1612886400000
    },
    {
      "name": "臆想失控",
      "id": 1856307135,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 32674400,
          "name": "是二智呀",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129533089,
        "name": "臆想失控",
        "picUrl": "http://p3.music.126.net/77S8H2MNpHhAef5aRREK8Q==/109951166120237127.jpg",
        "tns": [],
        "pic_str": "109951166120237127",
        "pic": 109951166120237120
      },
      "dt": 225140,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 9007725,
        "vd": -44598
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5404653,
        "vd": -42003
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3603117,
        "vd": -40399
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "无人知晓",
      "id": 1481929839,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 9548,
          "name": "田馥甄",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 1,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 95902047,
        "name": "无人知晓",
        "picUrl": "http://p3.music.126.net/OjItC1KtO-Jg_lBVqsihkQ==/109951165341263996.jpg",
        "tns": [],
        "pic_str": "109951165341263996",
        "pic": 109951165341264000
      },
      "dt": 288733,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 11551725,
        "vd": -43264
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6931053,
        "vd": -40643
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4620717,
        "vd": -38944
      },
      "a": null,
      "cd": "01",
      "no": 7,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 10961528,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416663,
      "publishTime": 1600963200000
    },
    {
      "name": "1987我不知会遇见你 (、歌手) (⊥歌手)",
      "id": 1844714295,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12091129,
          "name": "孟慧圆",
          "tns": [],
          "alias": []
        },
        {
          "id": 12039199,
          "name": "邓见超",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127356625,
        "name": "谁是宝藏歌手 第4期",
        "picUrl": "http://p4.music.126.net/uiYFQChklZqEjQnEHv1IzA==/109951165976139860.jpg",
        "tns": [],
        "pic_str": "109951165976139860",
        "pic": 109951165976139860
      },
      "dt": 242706,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9710445,
        "vd": -47486
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5826285,
        "vd": -44918
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3884205,
        "vd": -43271
      },
      "a": null,
      "cd": "01",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2709472,
      "publishTime": 0
    },
    {
      "name": "天外来物",
      "id": 1463165983,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5781,
          "name": "薛之谦",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 35,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 121012393,
        "name": "天外来物",
        "picUrl": "http://p3.music.126.net/jOrfzq4tB9ENWQVWLhi3Ag==/109951165591010361.jpg",
        "tns": [],
        "pic_str": "109951165591010361",
        "pic": 109951165591010370
      },
      "dt": 257212,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10291244,
        "vd": -52235
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6174764,
        "vd": -49678
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4116524,
        "vd": -48009
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 10968017,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1609344000000
    },
    {
      "name": "口是心非 (烟嗓版)",
      "id": 1821828003,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34633032,
          "name": "半吨兄弟",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 123339193,
        "name": "口是心非 (烟嗓版)",
        "picUrl": "http://p3.music.126.net/sNQ1dBGM8_WGmYlTUaUQMA==/109951165745257833.jpg",
        "tns": [],
        "pic_str": "109951165745257833",
        "pic": 109951165745257840
      },
      "dt": 212000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8482605,
        "vd": -44351
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5089581,
        "vd": -41758
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3393069,
        "vd": -40048
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 2,
      "originSongSimpleData": {
        "songId": 187738,
        "name": "口是心非",
        "artists": [
          {
            "id": 6459,
            "name": "张雨生"
          }
        ],
        "albumMeta": {
          "id": 19026,
          "name": "口是心非"
        }
      },
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416318,
      "publishTime": 1613750400000
    },
    {
      "name": "Wrecked",
      "id": 1858068739,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 94779,
          "name": "Imagine Dragons",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 1,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129843201,
        "name": "Wrecked",
        "picUrl": "http://p4.music.126.net/hlzJcalYT4ztUK_AMOSyXQ==/109951166140780247.jpg",
        "tns": [],
        "pic_str": "109951166140780247",
        "pic": 109951166140780240
      },
      "dt": 244035,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 9762525,
        "vd": -68880
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5857533,
        "vd": -66350
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 3905036,
        "vd": -64873
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270464,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14298324,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1625155200000
    },
    {
      "name": "分手季",
      "id": 1858653119,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48722772,
          "name": "北方歌神",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129935765,
        "name": "分手季",
        "picUrl": "http://p4.music.126.net/BqtqG7izQY3fMw1dchVyFg==/109951166148136048.jpg",
        "tns": [],
        "pic_str": "109951166148136048",
        "pic": 109951166148136050
      },
      "dt": 171051,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 6845170,
        "vd": 162531
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4107120,
        "vd": 165142
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2738094,
        "vd": 166890
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 131072,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "At My Worst (feat. Kehlani)",
      "id": 1814710748,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 28085265,
          "name": "Pink Sweat$",
          "tns": [],
          "alias": []
        },
        {
          "id": 1060155,
          "name": "Kehlani",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 8,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122089485,
        "name": "At My Worst (feat. Kehlani)",
        "picUrl": "http://p4.music.126.net/ewdhHv8vBNltMjh9N9BVxQ==/109951165670823097.jpg",
        "tns": [],
        "pic_str": "109951165670823097",
        "pic": 109951165670823100
      },
      "dt": 169168,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 6767848,
        "vd": -60661
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4060726,
        "vd": -58042
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2707165,
        "vd": -56286
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14275047,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7002,
      "publishTime": 1611676800000
    },
    {
      "name": "Tomorrow",
      "id": 1847883751,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1163027,
          "name": "Fly by Midnight",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127945755,
        "name": "Tomorrow",
        "picUrl": "http://p3.music.126.net/3MEE4NnEwlA0CMPorVZ68Q==/109951166031456387.jpg",
        "tns": [],
        "pic_str": "109951166031456387",
        "pic": 109951166031456380
      },
      "dt": 185474,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7421954,
        "vd": -69938
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4453190,
        "vd": -67414
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2968808,
        "vd": -65873
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14293633,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416692,
      "publishTime": 1623340800000
    },
    {
      "name": "海鸥电台Pt.1",
      "id": 1860184891,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12519065,
          "name": "程安",
          "tns": [],
          "alias": []
        },
        {
          "id": 29392509,
          "name": "AEolus阿一",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 11,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130190354,
        "name": "海鸥电台",
        "picUrl": "http://p3.music.126.net/Kd5Sr94QeA9oI5wuhJLPbg==/109951166165843602.jpg",
        "tns": [],
        "pic_str": "109951166165843602",
        "pic": 109951166165843600
      },
      "dt": 182225,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7291245,
        "vd": -37175
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4374765,
        "vd": -34523
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2916525,
        "vd": -32828
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "没理由怪你",
      "id": 1850235304,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30707953,
          "name": "kKzk赵珂",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128418700,
        "name": "没理由怪你",
        "picUrl": "http://p3.music.126.net/vYMnfg4wTG-fzl3Cf0tFYw==/109951166055825774.jpg",
        "tns": [],
        "pic_str": "109951166055825774",
        "pic": 109951166055825780
      },
      "dt": 216585,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8665965,
        "vd": -54876
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5199597,
        "vd": -52287
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3466413,
        "vd": -50630
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2709486,
      "publishTime": 0
    },
    {
      "name": "那一首歌",
      "id": 1850219401,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12283512,
          "name": "刘悦spam-生番",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128417344,
        "name": "而立",
        "picUrl": "http://p4.music.126.net/XoueLGbHnG-EDbLwXFjUvg==/109951166055723990.jpg",
        "tns": [],
        "pic_str": "109951166055723990",
        "pic": 109951166055723980
      },
      "dt": 212195,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8490885,
        "vd": -65208
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5094548,
        "vd": -62591
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3396380,
        "vd": -60878
      },
      "a": null,
      "cd": "01",
      "no": 2,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1622995200000
    },
    {
      "name": "Drink It",
      "id": 1860519298,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12514045,
          "name": "THE BOYZ",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130228023,
        "name": "Drink It",
        "picUrl": "http://p4.music.126.net/Xk2i5tescQoUegXTr09MXQ==/109951166170424392.jpg",
        "tns": [],
        "pic_str": "109951166170424392",
        "pic": 109951166170424380
      },
      "dt": 206946,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8280860,
        "vd": -91388
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4968533,
        "vd": -88891
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3312370,
        "vd": -87576
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14300263,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1410822,
      "publishTime": 1625932800000
    },
    {
      "name": "寄西风",
      "id": 1859905734,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 188558,
          "name": "Aki阿杰",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130145277,
        "name": "寄西风",
        "picUrl": "http://p4.music.126.net/H99EAdm8bjUQM6RNs17Fmw==/109951166163806700.jpg",
        "tns": [],
        "pic_str": "109951166163806700",
        "pic": 109951166163806700
      },
      "dt": 280000,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 11202285,
        "vd": -44313
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6721389,
        "vd": -41674
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4480941,
        "vd": -39957
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "吻得太逼真",
      "id": 1846014476,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30649136,
          "name": "我是张怡啊",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127619130,
        "name": "吻得太逼真",
        "picUrl": "http://p4.music.126.net/HrZYsVA8VB-a_aeh0JWzhQ==/109951165989806610.jpg",
        "tns": [],
        "pic_str": "109951165989806610",
        "pic": 109951165989806610
      },
      "dt": 230762,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9233325,
        "vd": -15308
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5540013,
        "vd": -12683
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3693357,
        "vd": -10934
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 2,
      "originSongSimpleData": {
        "songId": 5250048,
        "name": "吻得太逼真",
        "artists": [
          {
            "id": 6462,
            "name": "张敬轩"
          }
        ],
        "albumMeta": {
          "id": 511763,
          "name": "Love国语情歌集"
        }
      },
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "God I'm Feeling Low",
      "id": 1834218564,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12384020,
          "name": "Sik World",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 125476547,
        "name": "God I'm Feeling Low",
        "picUrl": "http://p3.music.126.net/bxQlSA6Dn1F5WLqWXBTgbw==/109951165853877444.jpg",
        "tns": [],
        "pic_str": "109951165853877444",
        "pic": 109951165853877440
      },
      "dt": 159781,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6393774,
        "vd": -23028
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3836282,
        "vd": -20428
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2557536,
        "vd": -18691
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 1318912,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14281664,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416692,
      "publishTime": 1618934400000
    },
    {
      "name": "Lucky Rain",
      "id": 553595927,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 10473,
          "name": "袁娅维",
          "tns": [],
          "alias": []
        },
        {
          "id": 1083118,
          "name": "王嘉尔",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 1,
      "v": 22,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 38374300,
        "name": "TIARA",
        "picUrl": "http://p4.music.126.net/mn0Ll0AkeCw5d5vyB3SqGw==/109951163251745843.jpg",
        "tns": [],
        "pic_str": "109951163251745843",
        "pic": 109951163251745840
      },
      "dt": 284107,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 11365399,
        "vd": -28100
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6819257,
        "vd": -25500
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4546186,
        "vd": -24000
      },
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 5955223,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7002,
      "publishTime": 1524931200000
    },
    {
      "name": "STARTS",
      "id": 1825722150,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 37561126,
          "name": "LCGongS7",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 7,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 123546672,
        "name": "STARTS",
        "picUrl": "http://p4.music.126.net/w5Ovj4cMvlqXlDcGYoVg7Q==/109951165787817214.jpg",
        "tns": [],
        "pic_str": "109951165787817214",
        "pic": 109951165787817220
      },
      "dt": 142695,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5710411,
        "vd": -97705
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3426264,
        "vd": -95146
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2284191,
        "vd": -93587
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Love Love",
      "id": 1858557336,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 0,
          "name": "金润吉",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 92879829,
        "name": "影视原声带收录",
        "picUrl": "http://p3.music.126.net/NdnYUwEjsjiIRiWDJnQlwg==/109951165960364331.jpg",
        "tns": [],
        "pic_str": "109951165960364331",
        "pic": 109951165960364340
      },
      "dt": 177056,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7084452,
        "vd": -46177
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4250689,
        "vd": -43359
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2833807,
        "vd": -41235
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 524416,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "茫茫",
      "id": 1836046195,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 14116394,
          "name": "鲁怀德",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 125803253,
        "name": "茫茫",
        "picUrl": "http://p4.music.126.net/Jk_XUeIKdeSiRYDdpdHC_Q==/109951165875691514.jpg",
        "tns": [],
        "pic_str": "109951165875691514",
        "pic": 109951165875691520
      },
      "dt": 239178,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9570264,
        "vd": -47195
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5742176,
        "vd": -44595
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3828132,
        "vd": -42937
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "3.5",
      "id": 1851853304,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31511662,
          "name": "99 God",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128698005,
        "name": "NOSKIP",
        "picUrl": "http://p3.music.126.net/sHGVwHiHVDTp8RmCaK0f7g==/109951166073087302.jpg",
        "tns": [],
        "pic_str": "109951166073087302",
        "pic": 109951166073087300
      },
      "dt": 158222,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6331080,
        "vd": -41205
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3798666,
        "vd": -38575
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2532458,
        "vd": -36829
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Believer",
      "id": 1859855778,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 94779,
          "name": "Imagine Dragons",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130140190,
        "name": "Uplifting Happy Playlist",
        "picUrl": "http://p3.music.126.net/M2BoyLfjfj43KfjfuCfn8w==/109951166161823265.jpg",
        "tns": [],
        "pic_str": "109951166161823265",
        "pic": 109951166161823260
      },
      "dt": 204382,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8176370,
        "vd": -74143
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4905840,
        "vd": -71648
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3270574,
        "vd": -70256
      },
      "a": null,
      "cd": "01",
      "no": 15,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1625760000000
    },
    {
      "name": "Counting Stars",
      "id": 1859839405,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 98105,
          "name": "OneRepublic",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 130137990,
        "name": "Radio Ga Ga",
        "picUrl": "http://p3.music.126.net/GNdLEAjb4k1-fJfkxT4CRQ==/109951166161702734.jpg",
        "tns": [],
        "pic_str": "109951166161702734",
        "pic": 109951166161702740
      },
      "dt": 256809,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10273480,
        "vd": -64901
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6164106,
        "vd": -62401
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4109418,
        "vd": -60811
      },
      "a": null,
      "cd": "01",
      "no": 13,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1625760000000
    },
    {
      "name": "终点起点",
      "id": 1855487830,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 36301312,
          "name": "鱼丁糸",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129371403,
        "name": "终点起点",
        "picUrl": "http://p4.music.126.net/DknqlrU1SvDgkDyEhtFsOg==/109951166112215487.jpg",
        "tns": [],
        "pic_str": "109951166112215487",
        "pic": 109951166112215490
      },
      "dt": 302061,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 12084525,
        "vd": -64736
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 7250733,
        "vd": -62123
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4833837,
        "vd": -60450
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14296587,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416693,
      "publishTime": 1624550400000
    },
    {
      "name": "等海",
      "id": 1815629102,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12079128,
          "name": "苏玮（小残）",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122248655,
        "name": "等海",
        "picUrl": "http://p4.music.126.net/YKebBsUFJQ4VVRek2z5Eow==/109951165671303286.jpg",
        "tns": [],
        "pic_str": "109951165671303286",
        "pic": 109951165671303280
      },
      "dt": 286144,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 11448045,
        "vd": -35101
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6868845,
        "vd": -32475
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4579245,
        "vd": -30755
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2709443,
      "publishTime": 1611849600000
    },
    {
      "name": "想去海边",
      "id": 1413863166,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12383009,
          "name": "夏日入侵企画",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 11,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 84029595,
        "name": "想去海边",
        "picUrl": "http://p3.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg",
        "tns": [],
        "pic_str": "109951164602081973",
        "pic": 109951164602081970
      },
      "dt": 267032,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10684125,
        "vd": -35514
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6410493,
        "vd": -32908
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4273676,
        "vd": -31294
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Beautiful",
      "id": 1847219367,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12110173,
          "name": "thomeboydontkill",
          "tns": [],
          "alias": []
        },
        {
          "id": 27868624,
          "name": "KnowKnow",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127824986,
        "name": "Beautiful",
        "picUrl": "http://p3.music.126.net/SJqUGortMP6D_skZSpmxNQ==/109951166004145031.jpg",
        "tns": [],
        "pic_str": "109951166004145031",
        "pic": 109951166004145020
      },
      "dt": 189183,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7570329,
        "vd": -54813
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4542215,
        "vd": -52284
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3028158,
        "vd": -50704
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "BINGBIAN病变（原版）",
      "id": 533259686,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12276430,
          "name": "Cubi",
          "tns": [],
          "alias": []
        },
        {
          "id": 12052056,
          "name": "Fi9江澈",
          "tns": [],
          "alias": []
        },
        {
          "id": 12056024,
          "name": "Birck",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 26,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 37358928,
        "name": "BINGBIAN病变（原始版）",
        "picUrl": "http://p3.music.126.net/3wSMVTdxeH2wN02yTxvhvw==/109951164388312861.jpg",
        "tns": [],
        "pic_str": "109951164388312861",
        "pic": 109951164388312860
      },
      "dt": 242024,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9682068,
        "vd": 9700
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5809258,
        "vd": 12300
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3872853,
        "vd": 14000
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1498147200000
    },
    {
      "name": "鼓動 (TV size)",
      "id": 1857456965,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34140008,
          "name": "カグラナナ",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129711742,
        "name": "鼓動 (TV size)",
        "picUrl": "http://p4.music.126.net/BeUDQxPxmuaGKvRKrycDZQ==/109951166134105128.jpg",
        "tns": [],
        "pic_str": "109951166134105128",
        "pic": 109951166134105120
      },
      "dt": 91211,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 3650925,
        "vd": -58534
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 2190573,
        "vd": -55927
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 1460397,
        "vd": -54263
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1418220,
      "publishTime": 1625155200000
    },
    {
      "name": "Astronaut In The Ocean (Original Mix)",
      "id": 1851182533,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 31768692,
          "name": "H2R",
          "tns": [],
          "alias": []
        },
        {
          "id": 32682416,
          "name": "KINGWG",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 7,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 128539789,
        "name": "Astronaut In The Ocean",
        "picUrl": "http://p3.music.126.net/j-Yx73vm4ixrdfqsB1miRA==/109951166066946302.jpg",
        "tns": [],
        "pic_str": "109951166066946302",
        "pic": 109951166066946300
      },
      "dt": 160275,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6413627,
        "vd": -43860
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3848194,
        "vd": -41349
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2565477,
        "vd": -39912
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "失眠飞行",
      "id": 1365898499,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12085016,
          "name": "接个吻，开一枪",
          "tns": [],
          "alias": []
        },
        {
          "id": 12002248,
          "name": "沈以诚",
          "tns": [],
          "alias": []
        },
        {
          "id": 12408182,
          "name": "薛黛霏",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 11,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 79191452,
        "name": "失眠飞行",
        "picUrl": "http://p4.music.126.net/Bq6Io8lpY1l2HsQ28QKFlw==/109951164083996255.jpg",
        "tns": [],
        "pic_str": "109951164083996255",
        "pic": 109951164083996260
      },
      "dt": 207157,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8289219,
        "vd": -12198
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4973549,
        "vd": -9604
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3315714,
        "vd": -7942
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1558195200000
    },
    {
      "name": "Girls Like Us",
      "id": 1811542484,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 33000875,
          "name": "Zoe Wees",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 121551817,
        "name": "Girls Like Us",
        "picUrl": "http://p3.music.126.net/EI7hYYlmekrZsBGJabJiDQ==/109951165625049369.jpg",
        "tns": [],
        "pic_str": "109951165625049369",
        "pic": 109951165625049380
      },
      "dt": 189048,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7563015,
        "vd": -63270
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4537826,
        "vd": -60724
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3025232,
        "vd": -59038
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 270336,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14227752,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7003,
      "publishTime": 1610380800000
    },
    {
      "name": "目及皆是你 (心跳版)",
      "id": 1860578400,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 46961650,
          "name": "小蓝背心",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 90,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127968653,
        "name": "目及皆是你",
        "picUrl": "http://p3.music.126.net/jDTEtAnZiDvfq5iBpLQBRA==/109951166171265193.jpg",
        "tns": [],
        "pic_str": "109951166171265193",
        "pic": 109951166171265200
      },
      "dt": 175000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 7002950,
        "vd": 315
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4201787,
        "vd": 2941
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 2801206,
        "vd": 4685
      },
      "a": null,
      "cd": "01",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416318,
      "publishTime": 1626019200000
    },
    {
      "name": "风儿吹",
      "id": 1805371171,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 33435854,
          "name": "要不要买菜",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 120617169,
        "name": "风儿吹",
        "picUrl": "http://p3.music.126.net/hnFq-qGzeIA99l7Kj4V1Og==/109951165549916980.jpg",
        "tns": [],
        "pic_str": "109951165549916980",
        "pic": 109951165549916980
      },
      "dt": 190285,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7614215,
        "vd": -43323
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4568546,
        "vd": -40717
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3045712,
        "vd": -38971
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "Astronaut In The Ocean",
      "id": 1809910902,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12973065,
          "name": "Masked Wolf",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 1,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 121269595,
        "name": "Astronaut In The Ocean",
        "picUrl": "http://p3.music.126.net/HHbPeTLzrbiFbgcVMxV9KA==/109951165610535031.jpg",
        "tns": [],
        "pic_str": "109951165610535031",
        "pic": 109951165610535020
      },
      "dt": 132806,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5313350,
        "vd": -60131
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3188027,
        "vd": -57593
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2125366,
        "vd": -56054
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 1318912,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14284287,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 7002,
      "publishTime": 1609862400000
    },
    {
      "name": "岁月如歌 陈奕迅",
      "id": 1856449521,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48658532,
          "name": "Chinese Song Center",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129555395,
        "name": "岁月如歌 陈奕迅",
        "picUrl": "http://p3.music.126.net/gVl1RkQTILMHTLMnMf1phA==/109951166121942430.jpg",
        "tns": [],
        "pic_str": "109951166121942430",
        "pic": 109951166121942430
      },
      "dt": 207911,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8319521,
        "vd": -36984
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4991730,
        "vd": -34427
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3327835,
        "vd": -32713
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416692,
      "publishTime": 1624377600000
    },
    {
      "name": "晚枫歌",
      "id": 1857147426,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 48643587,
          "name": "北方凯",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 95,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 129645519,
        "name": "新片段系列",
        "picUrl": "http://p4.music.126.net/kTSC0c3JZ1EwVl7AoltOuw==/109951166130777875.jpg",
        "tns": [],
        "pic_str": "109951166130777875",
        "pic": 109951166130777870
      },
      "dt": 31900,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 1278999,
        "vd": 42916
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 767417,
        "vd": 45560
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 511626,
        "vd": 47358
      },
      "a": null,
      "cd": "01",
      "no": 10,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 0
    },
    {
      "name": "委屈",
      "id": 1843722396,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 34301293,
          "name": "是你的垚",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 127144405,
        "name": "委屈",
        "picUrl": "http://p4.music.126.net/_eO6rpz20ZczVBDYST_W9A==/109951165965554951.jpg",
        "tns": [],
        "pic_str": "109951165965554951",
        "pic": 109951165965554940
      },
      "dt": 203083,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8126215,
        "vd": -19949
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 4875746,
        "vd": -17368
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3250512,
        "vd": -15687
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 262144,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1421008,
      "publishTime": 1620662400000
    }
  ],
  "videoIds": null,
  "videos": null,
  "trackIds": [
    {
      "id": 1827600686,
      "v": 6,
      "t": 0,
      "at": 1626049528802,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 5,
      "ratio": 229
    },
    {
      "id": 1841002409,
      "v": 2,
      "t": 0,
      "at": 1625876854149,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 1,
      "ratio": 193
    },
    {
      "id": 1859925893,
      "v": 3,
      "t": 0,
      "at": 1626135527523,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 159
    },
    {
      "id": 1859652717,
      "v": 4,
      "t": 0,
      "at": 1626135527574,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 155
    },
    {
      "id": 1859245776,
      "v": 4,
      "t": 0,
      "at": 1626135527634,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 136
    },
    {
      "id": 1853710741,
      "v": 3,
      "t": 0,
      "at": 1626135527671,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 104
    },
    {
      "id": 1860518817,
      "v": 3,
      "t": 0,
      "at": 1626135527726,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 99
    },
    {
      "id": 1841194853,
      "v": 4,
      "t": 0,
      "at": 1626135527779,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 88
    },
    {
      "id": 1859925050,
      "v": 4,
      "t": 0,
      "at": 1626135527831,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 87
    },
    {
      "id": 1859938842,
      "v": 4,
      "t": 0,
      "at": 1626135527883,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 85
    },
    {
      "id": 1858112698,
      "v": 3,
      "t": 0,
      "at": 1626135527937,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 83
    },
    {
      "id": 1859631351,
      "v": 4,
      "t": 0,
      "at": 1626135527993,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 83
    },
    {
      "id": 1859975710,
      "v": 4,
      "t": 0,
      "at": 1625962456389,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 24,
      "ratio": 80
    },
    {
      "id": 1857853051,
      "v": 3,
      "t": 0,
      "at": 1626135528040,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 74
    },
    {
      "id": 1857232779,
      "v": 3,
      "t": 0,
      "at": 1626135528091,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 68
    },
    {
      "id": 1842765421,
      "v": 11,
      "t": 0,
      "at": 1626049529430,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 22,
      "ratio": 59
    },
    {
      "id": 1856616055,
      "v": 3,
      "t": 0,
      "at": 1626135528145,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 58
    },
    {
      "id": 1859339684,
      "v": 3,
      "t": 0,
      "at": 1625962454823,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 9,
      "ratio": 57
    },
    {
      "id": 1859907060,
      "v": 3,
      "t": 0,
      "at": 1626135528198,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 56
    },
    {
      "id": 1850277666,
      "v": 6,
      "t": 0,
      "at": 1626135528251,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 49
    },
    {
      "id": 1858139145,
      "v": 3,
      "t": 0,
      "at": 1625703058943,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 19,
      "ratio": 47
    },
    {
      "id": 1860245965,
      "v": 4,
      "t": 0,
      "at": 1626135528303,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 46
    },
    {
      "id": 1855756259,
      "v": 6,
      "t": 0,
      "at": 1626135528353,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 46
    },
    {
      "id": 1854142292,
      "v": 3,
      "t": 0,
      "at": 1626049530208,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 42,
      "ratio": 45
    },
    {
      "id": 1860398803,
      "v": 9,
      "t": 0,
      "at": 1626135528408,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 39
    },
    {
      "id": 1859880109,
      "v": 3,
      "t": 0,
      "at": 1626135528459,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 38
    },
    {
      "id": 1859632074,
      "v": 3,
      "t": 0,
      "at": 1626135528510,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 35
    },
    {
      "id": 1847975477,
      "v": 4,
      "t": 0,
      "at": 1625876855086,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 26,
      "ratio": 33
    },
    {
      "id": 1854829854,
      "v": 5,
      "t": 0,
      "at": 1626049530364,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 45,
      "ratio": 32
    },
    {
      "id": 1859847042,
      "v": 2,
      "t": 0,
      "at": 1626049529794,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 33,
      "ratio": 32
    },
    {
      "id": 1860234203,
      "v": 3,
      "t": 0,
      "at": 1626135528558,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 30
    },
    {
      "id": 1835514122,
      "v": 6,
      "t": 0,
      "at": 1626135528610,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 27
    },
    {
      "id": 1860245702,
      "v": 4,
      "t": 0,
      "at": 1626135528666,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 27
    },
    {
      "id": 1860577034,
      "v": 4,
      "t": 0,
      "at": 1626135528719,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 25
    },
    {
      "id": 1840861309,
      "v": 4,
      "t": 0,
      "at": 1626049530053,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 37,
      "ratio": 24
    },
    {
      "id": 1843889342,
      "v": 6,
      "t": 0,
      "at": 1626049530572,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 49,
      "ratio": 24
    },
    {
      "id": 1858080200,
      "v": 3,
      "t": 0,
      "at": 1626135528771,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 22
    },
    {
      "id": 1847059460,
      "v": 6,
      "t": 0,
      "at": 1626135528821,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 22
    },
    {
      "id": 1845299729,
      "v": 10,
      "t": 0,
      "at": 1626135528873,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 21
    },
    {
      "id": 1859064990,
      "v": 3,
      "t": 0,
      "at": 1626135528928,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 21
    },
    {
      "id": 1829828597,
      "v": 4,
      "t": 0,
      "at": 1626049530945,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 58,
      "ratio": 21
    },
    {
      "id": 1837758344,
      "v": 5,
      "t": 0,
      "at": 1626135529036,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 20
    },
    {
      "id": 1832399395,
      "v": 9,
      "t": 0,
      "at": 1626135529081,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 20
    },
    {
      "id": 1819024549,
      "v": 12,
      "t": 0,
      "at": 1626135529140,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 20
    },
    {
      "id": 1852002829,
      "v": 3,
      "t": 0,
      "at": 1626135529185,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 20
    },
    {
      "id": 1859964178,
      "v": 5,
      "t": 0,
      "at": 1626135529236,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 20
    },
    {
      "id": 1860274389,
      "v": 3,
      "t": 0,
      "at": 1626049529743,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 32,
      "ratio": 20
    },
    {
      "id": 1845762728,
      "v": 8,
      "t": 0,
      "at": 1626135529292,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 19
    },
    {
      "id": 1860160375,
      "v": 7,
      "t": 0,
      "at": 1626135529341,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 19
    },
    {
      "id": 1859907592,
      "v": 5,
      "t": 0,
      "at": 1626049530262,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 43,
      "ratio": 19
    },
    {
      "id": 1841418475,
      "v": 6,
      "t": 0,
      "at": 1626135529396,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 19
    },
    {
      "id": 1855784429,
      "v": 4,
      "t": 0,
      "at": 1626135529453,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 17
    },
    {
      "id": 1858618041,
      "v": 8,
      "t": 0,
      "at": 1626135529500,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 16
    },
    {
      "id": 1452055727,
      "v": 10,
      "t": 0,
      "at": 1626135529598,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 16
    },
    {
      "id": 1819828675,
      "v": 4,
      "t": 0,
      "at": 1626135529649,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 16
    },
    {
      "id": 1858408587,
      "v": 6,
      "t": 0,
      "at": 1626135529700,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 15
    },
    {
      "id": 1855372809,
      "v": 3,
      "t": 0,
      "at": 1626135529755,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 15
    },
    {
      "id": 1806127843,
      "v": 4,
      "t": 0,
      "at": 1626049531306,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 66,
      "ratio": 15
    },
    {
      "id": 1844006025,
      "v": 6,
      "t": 0,
      "at": 1626135529820,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 15
    },
    {
      "id": 1860006992,
      "v": 6,
      "t": 0,
      "at": 1626135529858,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 15
    },
    {
      "id": 1454997009,
      "v": 3,
      "t": 0,
      "at": 1626135529911,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 15
    },
    {
      "id": 1819036133,
      "v": 4,
      "t": 0,
      "at": 1626135529963,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 14
    },
    {
      "id": 1856307135,
      "v": 3,
      "t": 0,
      "at": 1626135530016,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 14
    },
    {
      "id": 1481929839,
      "v": 5,
      "t": 0,
      "at": 1626135530122,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 14
    },
    {
      "id": 1844714295,
      "v": 3,
      "t": 0,
      "at": 1625962457052,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 92,
      "ratio": 13
    },
    {
      "id": 1463165983,
      "v": 35,
      "t": 0,
      "at": 1626135530175,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 13
    },
    {
      "id": 1821828003,
      "v": 2,
      "t": 0,
      "at": 1626135530227,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 13
    },
    {
      "id": 1858068739,
      "v": 6,
      "t": 0,
      "at": 1626135530334,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1858653119,
      "v": 6,
      "t": 0,
      "at": 1626135530388,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1814710748,
      "v": 8,
      "t": 0,
      "at": 1626135530439,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1847883751,
      "v": 4,
      "t": 0,
      "at": 1626049531987,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "lr": 80,
      "ratio": 12
    },
    {
      "id": 1860184891,
      "v": 11,
      "t": 0,
      "at": 1626135530491,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1850235304,
      "v": 6,
      "t": 0,
      "at": 1626135530540,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1850219401,
      "v": 4,
      "t": 0,
      "at": 1626135530592,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1860519298,
      "v": 3,
      "t": 0,
      "at": 1626135530670,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1859905734,
      "v": 3,
      "t": 0,
      "at": 1626135530715,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 12
    },
    {
      "id": 1846014476,
      "v": 6,
      "t": 0,
      "at": 1626135530766,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 1834218564,
      "v": 4,
      "t": 0,
      "at": 1626135530820,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 553595927,
      "v": 22,
      "t": 0,
      "at": 1626135530872,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 1825722150,
      "v": 7,
      "t": 0,
      "at": 1626135530928,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 1858557336,
      "v": 4,
      "t": 0,
      "at": 1626135530978,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 1836046195,
      "v": 3,
      "t": 0,
      "at": 1626135531031,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 11
    },
    {
      "id": 1851853304,
      "v": 5,
      "t": 0,
      "at": 1626135531084,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1859855778,
      "v": 2,
      "t": 0,
      "at": 1626135531138,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1859839405,
      "v": 2,
      "t": 0,
      "at": 1626135531189,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1855487830,
      "v": 4,
      "t": 0,
      "at": 1626135531240,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1815629102,
      "v": 5,
      "t": 0,
      "at": 1626135531294,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1413863166,
      "v": 11,
      "t": 0,
      "at": 1626135531343,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1847219367,
      "v": 5,
      "t": 0,
      "at": 1626135531397,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 533259686,
      "v": 26,
      "t": 0,
      "at": 1626135531457,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1857456965,
      "v": 3,
      "t": 0,
      "at": 1626135531510,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1851182533,
      "v": 7,
      "t": 0,
      "at": 1626135531606,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 10
    },
    {
      "id": 1365898499,
      "v": 11,
      "t": 0,
      "at": 1626135531656,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1811542484,
      "v": 5,
      "t": 0,
      "at": 1626135531712,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1860578400,
      "v": 2,
      "t": 0,
      "at": 1626135531812,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1805371171,
      "v": 3,
      "t": 0,
      "at": 1626135531924,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1809910902,
      "v": 6,
      "t": 0,
      "at": 1626135680636,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1856449521,
      "v": 2,
      "t": 0,
      "at": 1626135680678,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1857147426,
      "v": 5,
      "t": 0,
      "at": 1626136019974,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    },
    {
      "id": 1843722396,
      "v": 3,
      "t": 0,
      "at": 1626136020026,
      "alg": null,
      "uid": 1,
      "rcmdReason": "",
      "ratio": 9
    }
  ],
  "shareCount": 10668,
  "commentCount": 206364,
  "remixVideo": null,
  "sharedUsers": null,
  "historySharedUsers": null,
  "ToplistType": "S"
}
function Singer(props) {
    const [showStatus, setShowStatus] = useState (true);
    const headerRef = useRef()
    const handlePullDown = (pos)=>{
    }
    const handleBack=()=>{
      setShowStatus(false)
    }
    return (
        <CSSTransition
            in={showStatus}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={() => props.history.goBack()}
        >
            <Container>
              <Header ref={headerRef} handleClick={handleBack}/>
              <ImgWrapper bgUrl={artist.picUrl}></ImgWrapper>
              <Scroll pullDown={handlePullDown}>
                  <ListContainer>
                    <Collection>
                      <i className="iconfont">&#xe62d;</i>
                        &nbsp;
                      <span className="text"> 收藏 </span>
                    </Collection>
                    <SongList currentAlbum={list} />
                  </ListContainer>
              </Scroll>
            </Container>
        </CSSTransition>
    )
}
export default  memo(Singer)
