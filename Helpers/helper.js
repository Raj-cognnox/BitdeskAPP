
const getApi = async (url, obj) =>{
    // let token = localStorage.getItem('token')
    let params = new URLSearchParams(obj).toString();
    url = `https://backend.bitdesks.in/${url}?`+params; 
     try{
         let response = await  fetch(url ,{method: 'GET', headers: { "Authorization": token }})
         let result = await response.json();
         console.log("json respons in helper", result)
         if (result.status == 'notOk' && result.message == 'Token not Found.') {
          console.log("In if condition");
        
      }
         return  result
       }
      catch{
         return {error:"some error occured in connecting with server."}
      }
 
 }
 const getMainApi = async (url, obj) =>{
    // let token = localStorage.getItem('token')
    //   console.log("helper-------------------------------------kkkkkkk --------", token)
     let params = new URLSearchParams(obj).toString();
 
     url = `https://backend.bitdesks.in/${url}?`+params; 
     try{
         let response = await  fetch(url ,{method: 'GET', headers: { "Authorization": token }})
         let result = await response.json();
         console.log("json respons in helper", result)
         if (result.status == 'notOk' && result.message == 'Token not Found.') {
          console.log("In if condition");
      
      }
         return  result
       }
      catch{
         return {error:"some error occured in connecting with server."}
      }
 
 }
 const postApi = async (url, obj) =>{
 
      url = `https://backend.bitdesks.in/${url}/?`+obj; 
      try{
         let response = await  fetch(url, obj)  // set type to post.. whatever
        return await response.json();
     
      }
      catch (err) {
         return {error:"some error occured in connecting with server.", err}
      }
 }
 const apiUrl = 'https://backend.bitdesks.in/'
 
 module.exports = {getApi, postApi, getMainApi, apiUrl }
 
 