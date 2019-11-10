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



## single object in repos curl result 
```
  {
    "id": 198306799,
    "node_id": "MDEwOlJlcG9zaXRvcnkxOTgzMDY3OTk=",
    "name": "airflow",
    "full_name": "Isan-Rivkin/airflow",
    "private": false,
    "owner": {
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
      "site_admin": false
    },
    "html_url": "https://github.com/Isan-Rivkin/airflow",
    "description": "Apache Airflow",
    "fork": true,
    "url": "https://api.github.com/repos/Isan-Rivkin/airflow",
    "forks_url": "https://api.github.com/repos/Isan-Rivkin/airflow/forks",
    "keys_url": "https://api.github.com/repos/Isan-Rivkin/airflow/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/Isan-Rivkin/airflow/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/Isan-Rivkin/airflow/teams",
    "hooks_url": "https://api.github.com/repos/Isan-Rivkin/airflow/hooks",
    "issue_events_url": "https://api.github.com/repos/Isan-Rivkin/airflow/issues/events{/number}",
    "events_url": "https://api.github.com/repos/Isan-Rivkin/airflow/events",
    "assignees_url": "https://api.github.com/repos/Isan-Rivkin/airflow/assignees{/user}",
    "branches_url": "https://api.github.com/repos/Isan-Rivkin/airflow/branches{/branch}",
    "tags_url": "https://api.github.com/repos/Isan-Rivkin/airflow/tags",
    "blobs_url": "https://api.github.com/repos/Isan-Rivkin/airflow/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/Isan-Rivkin/airflow/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/Isan-Rivkin/airflow/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/Isan-Rivkin/airflow/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/Isan-Rivkin/airflow/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/Isan-Rivkin/airflow/languages",
    "stargazers_url": "https://api.github.com/repos/Isan-Rivkin/airflow/stargazers",
    "contributors_url": "https://api.github.com/repos/Isan-Rivkin/airflow/contributors",
    "subscribers_url": "https://api.github.com/repos/Isan-Rivkin/airflow/subscribers",
    "subscription_url": "https://api.github.com/repos/Isan-Rivkin/airflow/subscription",
    "commits_url": "https://api.github.com/repos/Isan-Rivkin/airflow/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/Isan-Rivkin/airflow/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/Isan-Rivkin/airflow/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/Isan-Rivkin/airflow/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/Isan-Rivkin/airflow/contents/{+path}",
    "compare_url": "https://api.github.com/repos/Isan-Rivkin/airflow/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/Isan-Rivkin/airflow/merges",
    "archive_url": "https://api.github.com/repos/Isan-Rivkin/airflow/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/Isan-Rivkin/airflow/downloads",
    "issues_url": "https://api.github.com/repos/Isan-Rivkin/airflow/issues{/number}",
    "pulls_url": "https://api.github.com/repos/Isan-Rivkin/airflow/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/Isan-Rivkin/airflow/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/Isan-Rivkin/airflow/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/Isan-Rivkin/airflow/labels{/name}",
    "releases_url": "https://api.github.com/repos/Isan-Rivkin/airflow/releases{/id}",
    "deployments_url": "https://api.github.com/repos/Isan-Rivkin/airflow/deployments",
    "created_at": "2019-07-22T21:48:45Z",
    "updated_at": "2019-07-22T21:48:51Z",
    "pushed_at": "2019-07-22T22:09:35Z",
    "git_url": "git://github.com/Isan-Rivkin/airflow.git",
    "ssh_url": "git@github.com:Isan-Rivkin/airflow.git",
    "clone_url": "https://github.com/Isan-Rivkin/airflow.git",
    "svn_url": "https://github.com/Isan-Rivkin/airflow",
    "homepage": "https://airflow.apache.org",
    "size": 39393,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Python",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "apache-2.0",
      "name": "Apache License 2.0",
      "spdx_id": "Apache-2.0",
      "url": "https://api.github.com/licenses/apache-2.0",
      "node_id": "MDc6TGljZW5zZTI="
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }
  ```