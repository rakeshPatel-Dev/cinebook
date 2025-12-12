import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase.config"

export const storeTicket = async (ticketData:any) => {
  // Function to store ticket data in Firestore
  await setDoc(doc(db, "Tickets", ticketData.id), {
    ...ticketData 
  })
}