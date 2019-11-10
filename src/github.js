
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
        let url = `https://api.github.com/users/{${username}/repos?per_page=${reposLimit}`
        axios.get(url).then(res=>{
            resolve(res.data)
        }).catch(e=>{
            reject(e)
        })
    })
}

