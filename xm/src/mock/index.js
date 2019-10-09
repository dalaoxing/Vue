import Mock from 'mockjs';
import bannerData from '@/data/banner.json';
import Data from '@/data/data.json';

new Mock.mock('/data/list', Data)

new Mock.mock('/data/banner', bannerData)