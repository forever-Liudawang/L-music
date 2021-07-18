//拼接出歌曲的url链接
export const getSongUrl = id => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
export const isEmptyObj = (object)=>{
    if(!object || Object.keys(object).length==0){
        return true
    }
    return false;
}
//转换歌曲播放时间
export const formatPlayTime = interval => {
    interval = interval | 0;// |0表示向下取整
    const minute = (interval / 60) | 0;
    const second = (interval % 60).toString().padStart(2, "0");
    return `${minute}:${second}`;
};
// 找到当前的歌曲索引
export const findIndex = (song, list) => {
    return list.findIndex(item => {
      return song.id === item.id;
    });
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// 随机算法
export function shuffle(arr) {
    let new_arr = [];
    arr.forEach(item => {
      new_arr.push(item);
    });
    for(let i = 0; i < new_arr.length; i++) {
      let j = getRandomInt(0, i);
      let t = new_arr[i];
      new_arr[i] = new_arr[j];
      new_arr[j] = t;
    }
    return new_arr;
}
  