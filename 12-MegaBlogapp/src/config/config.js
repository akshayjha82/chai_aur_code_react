const config = {
  appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),
  appwriteBucketId : String(import.meta.env.VITE_BUCKET_ID),
  appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID),
  appwriteBucketIdatabaseId : String(import.meta.env.VITE_DATABASE_ID)
}

export default config;