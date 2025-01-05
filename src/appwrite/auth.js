import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



export class AuthService{
     client = new Client();
     account;
    
     constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
     }

     async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email, password, name);
            if (userAccount){
                // return userAccount;
                // call another method - if exists login redirect
                return this.login({email, password})
            }
            else {
               return userAccount;
            }
        } catch (error) {
            throw error;
        }

     }

     async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
     }
    async getCurrentUser(){
        try {
            return  await this.account.get();
        } catch (error) {
            // throw error
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            // throw error;
            console.log("Appwrite serive :: logout :: error", error);   
        }
    }


}

const authService = new AuthService(Client);

export default authService