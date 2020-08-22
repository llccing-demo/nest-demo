# nest-demo

## 项目疑问

1. `.env` 文件如何解析，并且全局使用的呢？

[https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) 他是个好工具

```js
// 在本项目中，require 写法能够生效，import 写法无效，费解……
require('dotenv').config()

// 二者应该相等
import dotenv from 'dotenv';
dotenv.config();
```

这样便可以直接读取配置并初始化

## todo

### 权限相关

- [https://juejin.im/post/6844904097317912584](https://juejin.im/post/6844904097317912584) 使用 JWT 实现注册、登录

- [https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/](https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/)

- [https://dev.to/rebellionpay/building-authentication-for-microservices-using-nestjs-1fne](https://dev.to/rebellionpay/building-authentication-for-microservices-using-nestjs-1fne)

- [http://www.woshipm.com/pd/1150093.html](http://www.woshipm.com/pd/1150093.html) rbac 的理解

- [https://tuture.co/2020/05/12/@uXOOfFmhS/](https://tuture.co/2020/05/12/@uXOOfFmhS/) rbac 的尝试（sql 部分可以不参考）