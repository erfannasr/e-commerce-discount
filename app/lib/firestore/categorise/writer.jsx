import { Timestamp, collection, doc, setDoc } from "firebase/firestore"
import { db, storage } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export const createNewCategory = async ({ data, image }) => {
   if (!image) {
     throw new Error("Image is Required");
   }
   if (!data?.name) {
     throw new Error("Name is required");
   }
   if (!data?.slug) {
     throw new Error("Slug is required");
   }
   const newId = doc(collection(db, `ids`)).id;
   const imageRef = ref(storage, `categories/${newId}`);
   await uploadBytes(imageRef, image);
   const imageURL = await getDownloadURL(imageRef);
 
   await setDoc(doc(db, `categories/${newId}`), {
     ...data,
     id: newId,
     imageURL: imageURL,
     timestampCreate: Timestamp.now(),
   });
 };

 export const deleteCategory = async ({id}) => {
      // 8  06  12
 }