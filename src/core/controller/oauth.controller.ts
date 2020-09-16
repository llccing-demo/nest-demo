import { Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common'
import axios from 'axios';
@Controller('oauth')
export class OAuthController {

  @Get('redirect')
  public async redirect(@Query() query) {
    console.log('params from url', query.code)
    const clientId = 'adc4ab5cb65707e00178'
    const clientSecret = '671acfaae5785e871f9e38730a3e13bd7aca0fc1'

    const requestToken = query.code

    const tokenResponse = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${requestToken}`,
      headers: {
        accept: 'application/json'
      }
    })

    const accessToken = tokenResponse.data.access_token
    console.log('accessToken', tokenResponse)

    const result = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {
        accept: 'application/json',
        Authorization: `token ${accessToken}`
      }
    })

    // 能够走到这里说明上述流程已经走通，已经展示个人信息了
    console.log('github user info', result.data)
  }
}
