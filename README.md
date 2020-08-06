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