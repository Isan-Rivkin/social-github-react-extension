
import axios from 'axios';

const profileUrl = `https://api.github.com/users/`


const getUsername = (text) => {
    //https://github.com/isan-rivkin
    if(text.indexOf('github.com') > -1 ){
        let temp = text.split('/')
        let name = temp[temp.length - 1]
        return name 
    }
    return text 
}
export function getProfile(text){  
    return new Promise((resolve,reject) => {
        let name = getUsername(text)
        axios.get(profileUrl+name).then(res =>{
            resolve(res.data)
        }).catch(e=>{
            reject(e)
        })
    })
}   

export function getReposWithLimit(username, reposLimit){
    return new Promise((resolve,reject) => {
        let url = `https://api.github.com/users/${username}/repos?per_page=${reposLimit}`
        axios.get(url).then(res=>{
            resolve(res.data)
        }).catch(e=>{
            reject(e)
        })
    })
}

const _getUserProfileParsed = function (userName){
    return new Promise((resolve,reject) => {
        getProfile(userName)
        .then(data=>{
            const u = {}
            u.loginName       = data.login 
            u.userName        = data.name 
            u.avatar          = data.avatar_url
            u.publicRepos     = data.public_repos
            u.followers       = data.followers
            u.following       = data.following
            u.followers_url   = data.followers_url
            u.repos_url       = data.repos_url
            u.html_url        = data.html_url
            resolve(u)
        })
        .catch(e =>{
            reject(e)
        })
    })
}
// https://api.github.com/repos/enigmampc/enigma-p2p/stargazers 
const _getStarers = function (uri) {
    return new Promise((resolve,reject) => {
        axios.get(uri)
        .then(res=>{
            let parsed = res.data.map(starGazer => {
                return {
                    login : starGazer.login, 
                    html_url : starGazer.html_url
                }
            })
            resolve(parsed)
        })
        .catch(reject)
    })
}
 // https://api.github.com/repos/enigmampc/enigma-p2p/forks
const _getforkers = function ( uri ) {
    return new Promise((resolve,reject) => {
        axios.get(uri)
        .then(res=>{
            let parsed = res.data.map(forker => {
                return {
                    login : forker.owner.login, 
                    html_url : forker.html_url
                }
            })
            resolve(parsed)
        })
        .catch(reject)
    })
}
const _getUserReposParsed = function (userName, reposLimit ){
    return new Promise((resolve,reject) => {
        getReposWithLimit(userName,reposLimit).then(async reposRes => {
            const r = []
            for(let i=0; i< reposRes.length; ++i){
                let repo = reposRes[i]
                let starers,forkers
                try{
                    starers = await _getStarers(repo.stargazers_url)
                    forkers = await _getforkers(repo.forks_url)
                }catch(e){
                    reject(e)
                }
                r.push({
                    name : repo.name, 
                    html_url : repo.html_url,
                    isFork : repo.fork, 
                    curState : {
                        stars : repo.watchers, 
                        forks : repo.forks,
                        stars_people : starers, 
                        forks_people : forkers,
                    }
                  })
            }   
            resolve(r)
        })
        .catch(reject)
    })
}
export function getUserRepoParsed(userName,reposLimit){
    return _getUserReposParsed(userName, reposLimit)
}

