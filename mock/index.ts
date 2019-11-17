import Mock from 'mockjs';
import proxy from './proxy';

for (let key in proxy) {
  Mock.mock(key, proxy[key]);
}
