import Mock from 'mockjs';
import bannerData from '@/data/banner.json';
import Data from '@/data/data.json';

new Mock.mock('/data/list', Data)

new Mock.mock('/data/banner', bannerData)

new Mock.mock('/data/login', ({ body }) => {
    let { user, pwd } = JSON.parse(body);
    if (user === 'zs' && pwd === '123') {
        return { code: 1, mes: '成功' }
    } else {
        return { code: 0, mes: '失败' }
    }
})