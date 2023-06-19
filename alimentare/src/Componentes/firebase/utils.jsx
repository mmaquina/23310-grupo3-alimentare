import { collection, getDocs, setDoc, doc, getDoc, Timestamp } from 'firebase/firestore';


export async function getItems(db, col) {
    const items = collection(db, col);
    const itemsSnapshot = await getDocs(items);
    return itemsSnapshot;
}

export async function setItems(db, col, item) {
    const seconds = Timestamp.fromDate(new Date()).seconds
    const docData = doc(db, col, seconds.toString() );
    await setDoc( docData, item );
    
    return true;
}

export async function getItemById(db, col, id) {
    const docRef = doc(db, col, id);
    const itemSnapshot = await getDoc(docRef);
    if (itemSnapshot.exists()){
        return itemSnapshot.data()
    } else {
        return {"error": "No hay datos con esa referencia"}
    }
}
