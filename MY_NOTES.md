// this is awesome  to use to display "github card" just need to add stars and shit 
// https://codepen.io/theham3d/pen/wGzodM?editors=1010

// more full example of fetching info (maybe) it includes repo and repo info 
// http://simonsmith.github.io/github-user-search/#/Isan-Rivkin


## curl api 

// get user profile 
```curl https://api.github.com/users/isan-rivkin```

```
{
  "login": "Isan-Rivkin",
  "id": 22504565,
  "node_id": "MDQ6VXNlcjIyNTA0NTY1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/22504565?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Isan-Rivkin",
  "html_url": "https://github.com/Isan-Rivkin",
  "followers_url": "https://api.github.com/users/Isan-Rivkin/followers",
  "following_url": "https://api.github.com/users/Isan-Rivkin/following{/other_user}",
  "gists_url": "https://api.github.com/users/Isan-Rivkin/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Isan-Rivkin/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Isan-Rivkin/subscriptions",
  "organizations_url": "https://api.github.com/users/Isan-Rivkin/orgs",
  "repos_url": "https://api.github.com/users/Isan-Rivkin/repos",
  "events_url": "https://api.github.com/users/Isan-Rivkin/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Isan-Rivkin/received_events",
  "type": "User",
  "site_admin": false,
  "name": "isan_rivkin",
  "company": "Production Engineer @similarweb",
  "blog": "https://isan-rivkin.github.io/",
  "location": "Tel Aviv",
  "email": null,
  "hireable": null,
  "bio": "I like Networks, distributed systems and Rust ",
  "public_repos": 62,
  "public_gists": 38,
  "followers": 25,
  "following": 8,
  "created_at": "2016-09-28T17:41:48Z",
  "updated_at": "2019-10-27T08:47:44Z"
}
```

get my followers 

```
curl https://api.github.com/users/Isan-Rivkin/followers
```


https://api.github.com/users/Isan-Rivkin/repos


get ALL repos

```curl -s https://api.github.com/users/elichai/repos?per_page=2000 | jq '.[]|.html_url' | wc -l```

to get the stars count `watchers` field :\ 
for forks `forks`