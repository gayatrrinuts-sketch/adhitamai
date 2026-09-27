import { MongoClient, Db, Collection } from "mongodb";
import { BlogPostDoc } from "./types/blog";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "adhitam";

interface GlobalWithMongo {
  _mongoClientPromise?: Promise<MongoClient>;
}

declare const global: GlobalWithMongo;

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

export function getMongoClientPromise(): Promise<MongoClient> | null {
  if (!uri) {
    return null;
  }

  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR.
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
      client = new MongoClient(uri);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

export async function getDatabase(): Promise<Db | null> {
  const promise = getMongoClientPromise();
  if (!promise) return null;
  try {
    const connectedClient = await promise;
    return connectedClient.db(dbName);
  } catch (error) {
    console.warn("MongoDB connection failed, falling back to local dataset:", error);
    return null;
  }
}

export async function getBlogsCollection(): Promise<Collection<BlogPostDoc> | null> {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<BlogPostDoc>("blogs");
}
