import { collection, getDocs, setDoc, doc, Timestamp } from 'firebase/firestore/lite';


export async function getItems(db, col) {
    const items = collection(db, col);
    const itemsSnapshot = await getDocs(items);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    return itemsList;
}

export async function setItems(db, col, item) {
    const seconds = Timestamp.fromDate(new Date()).seconds
    const docData = doc(db, col, seconds.toString() );
    await setDoc( docData, item );
    
    return true;
}