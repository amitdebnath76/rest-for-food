require('dotenv').config()
const username = process.env.USER_NAME
const password = process.env.PASSWORD
// username= AmitDebnath
// password = AmitDebnath2017
// console.log(process.env.USER_NAME)
// console.log(process.env.PASSWORD)
// export const connectionStr = `mongodb+srv:// ${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.bnjzj.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0`
// export const connectionStr = 'mongodb+srv://AmitDebnath:AmitDebnath2017@cluster0.bnjzj.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0'
export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.bnjzj.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0"