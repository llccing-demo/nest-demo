import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-sso',
  templateUrl: './github-sso.component.html',
  styleUrls: ['./github-sso.component.scss']
})
export class GithubSsoComponent implements OnInit {
  href: string = ''
  constructor() { }

  ngOnInit(): void {
    this.toSSO()
  }

  toSSO() {
    const client_id = 'adc4ab5cb65707e00178'
    const authorize_uri = 'https://github.com/login/oauth/authorize'
    const redirect_uri = 'http://localhost:3001/oauth/redirect'

    this.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`
  }
}
