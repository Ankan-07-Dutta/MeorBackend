require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "Ankan-07-Dutta",
    "id": 176762927,
    "node_id": "U_kgDOCokwLw",
    "avatar_url": "https://avatars.githubusercontent.com/u/176762927?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ankan-07-Dutta",
    "html_url": "https://github.com/Ankan-07-Dutta",
    "followers_url": "https://api.github.com/users/Ankan-07-Dutta/followers",
    "following_url": "https://api.github.com/users/Ankan-07-Dutta/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ankan-07-Dutta/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ankan-07-Dutta/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ankan-07-Dutta/subscriptions",
    "organizations_url": "https://api.github.com/users/Ankan-07-Dutta/orgs",
    "repos_url": "https://api.github.com/users/Ankan-07-Dutta/repos",
    "events_url": "https://api.github.com/users/Ankan-07-Dutta/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ankan-07-Dutta/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ankan Dutta",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-07-27T15:41:02Z",
    "updated_at": "2025-04-05T15:54:05Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('ankan dutta');
})

app.get("/login",(req, res)=>{
    res.send('<h1>Please log in mareketplace</h1>')
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>My name is ankan</h2>");
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORTt}`)
})