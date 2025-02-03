# GT-LFI - Firebase Implementation Documentation

## Overview

This project utilizes Firebase for authentication and database management, specifically to handle news content through an administrative dashboard. The primary Firebase services used include:

* **Firebase Authentication**
* **Cloud Firestore**

## Firebase Configuration

The Firebase configuration is centralized in `firebaseconfig.tsx`:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
```

## Authentication Flow

### Login Implementation

Located in `page.tsx`, the login process follows these steps:

1. Uses Firebase Authentication's `signInWithEmailAndPassword` function.
2. Verifies user credentials against environment variables.
3. Redirects authenticated users to the admin dashboard.
4. Implements error handling and loading states.

```typescript
const handleLogin = async (e: React.FormEvent) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential.user.email === process.env.NEXT_PUBLIC_FIREBASE_EMAIL_AUTHENTICATION) {
      router.push("/admin/dashboard");
    }
  } catch (error) {
    alert("Erro ao fazer login");
  }
};
```

## Database Operations

### News Management

#### Fetching News

```typescript
const fetchNews = useCallback(async () => {
  const querySnapshot = await getDocs(collection(db, "news"));
  const newsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setNews(newsData);
}, []);
```

#### Adding News

```typescript
const addNews = async (e: React.FormEvent) => {
  try {
    await addDoc(collection(db, "news"), {
      title,
      content,
      link,
      date: new Date().toISOString(),
    });
    await fetchNews();
  } catch (error) {
    alert("Erro ao adicionar notícia");
  }
};
```

#### Updating News

```typescript
const handleEdit = async (e: React.FormEvent) => {
  try {
    const newsRef = doc(db, "news", editingNews.id);
    await updateDoc(newsRef, {
      title: editingNews.title,
      content: editingNews.content,
      link: editingNews.link,
    });
    await fetchNews();
  } catch (error) {
    alert("Erro ao editar notícia");
  }
};
```

#### Deleting News

```typescript
const handleDelete = async (id: string) => {
  try {
    await deleteDoc(doc(db, "news", id));
    await fetchNews();
  } catch (error) {
    alert("Erro ao excluir notícia");
  }
};
```

## Public News Display

Located in `news-section.tsx`, the component:

* Fetches and displays news items in descending order.
* Limits the display to the five most recent news items.
* Implements loading states and error handling.

```typescript
useEffect(() => {
  async function fetchNews() {
    const newsQuery = query(
      collection(db, "news"),
      orderBy("date", "desc"),
      limit(5)
    );
    const querySnapshot = await getDocs(newsQuery);
    const newsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNews(newsData);
  }
  fetchNews();
}, []);
```

## Security Considerations

1. **Environment Variables** : Firebase configuration is securely stored in environment variables.
2. **Authentication Verification** : Routes related to the dashboard enforce authentication checks.
3. **Admin Access Control** : Email verification ensures only authorized users can access the admin dashboard.
4. **Error Handling** : Comprehensive error handling mechanisms are in place for all Firebase operations.

This implementation ensures a secure and efficient system for managing news content using Firebase, providing a structured approach for both admin management and public display.
