import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authentication {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

      this.account = new Account(this.client);
  }

  async createAccount({email,password,name}){
    try {
       const userAccount = await this.account.create(ID.unique(),email,password)

       if(userAccount){
          return this.login(email,password);
       }
        else{
         return userAccount;
       }
    } catch (error) {
      throw error;
    }
  }

  async login({email,password}){
    try {
      return await this.account.createEmailPasswordSession(email,password)
    } catch (error) {
      throw error;
    }
  }

  async getcurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout(){
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }

}

const authentication = new Authentication()

export default authentication;
