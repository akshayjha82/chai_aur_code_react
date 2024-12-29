import config from "./config";
import { Client, Databases, ID,Storage } from "appwrite";

class Database_Services{

  client = new Client()
  databases;
  bucket;

  constructor (){
    this.client = this.client
                        .setEndpoint(config.appwriteUrl)
                        .setProject(config.appwriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title,status,slug,featuredImage,content,userId}){
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          status,
          content,
          featuredImage,
          userId
        }
      )
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug , {content,featuredImage,title,status}){
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          status,
          featuredImage,
          content
        }
      )
    } catch (error) {
      throw error
    }

  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getposts(posts = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        posts
      )
    } catch (error) {
      throw error;
    }
  }

  //file upload preview
  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      )
      return true
    } catch (error) {
      throw error;
      return false;
    }
    
  }

  getFilepreview(fileId){
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    )
  }
}

const dbService = new Database_Services()

export default dbService