// src/app/page.js
"use client";

import { useState } from "react";
import { ref, set, get, child } from "firebase/database";
import { database } from "@/firebase/firebaseConfig";

export default function Home() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState(null);

  const saveNameToDatabase = async () => {
    const dbRef = ref(database, 'users/1');
    await set(dbRef, {
      username: name,
    });
    alert("Name saved!");
  };

  const getNameFromDatabase = async () => {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, 'users/1'));
    if (snapshot.exists()) {
      setSavedName(snapshot.val().username);
    } else {
      setSavedName("No data available");
    }
  };

  return (
    <div>
      <h1>Firebase Realtime Database - Hola Mundo</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={saveNameToDatabase}>Save to Database</button>
      <button onClick={getNameFromDatabase}>Get Name from Database</button>
      {savedName && <p>Saved Name: {savedName}</p>}
    </div>
  );
}
