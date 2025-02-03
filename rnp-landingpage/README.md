# GT-LFI - Firebase Implementation Documentation

## Overview

This project uses Firebase for authentication and database functionality, specifically for managing news content through an admin dashboard. The main Firebase services used are:

* Firebase Authentication
* Cloud Firestore

## Firebase Configuration

The Firebase configuration is centralized in [firebaseconfig.tsx](vscode-file://vscode-app/c:/Users/felip/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):

**import** **{** **initializeApp** **}** **from** **'firebase/app'**

**import** **{** **getFirestore** **}** **from** **'firebase/firestore'**

**import** **{** **getAuth** **}** **from** **'firebase/auth'**

**const** **firebaseConfig** **=** **{**

**  apiKey: **process**.**env**.**NEXT_PUBLIC_FIREBASE_API_KEY**,**

**  authDomain: **process**.**env**.**NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN**,**

**  projectId: **process**.**env**.**NEXT_PUBLIC_FIREBASE_PROJECT_ID**,**

**  storageBucket: **process**.**env**.**NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET**,**

**  messagingSenderId: **process**.**env**.**NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID**,**

**  appId: **process**.**env**.**NEXT_PUBLIC_FIREBASE_APP_ID**,**

**  measurementId: **process**.**env**.**NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

**}**

## Authentication Flow

### Login Implementation

Located in [page.tsx](vscode-file://vscode-app/c:/Users/felip/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):

1. Uses Firebase Authentication's [signInWithEmailAndPassword](vscode-file://vscode-app/c:/Users/felip/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
2. Verifies user credentials against environment variables
3. Redirects to dashboard on successful authentication
4. Handles errors and loading states

**const** **handleLogin** **=** **async** **(**e**:** **React**.**FormEvent**)** **=>** **{

**  **try** **{

**    **const** **userCredential** **=** **await** **signInWithEmailAndPassword**(**auth**, **email**, **password**)**;

**    **if** **(**userCredential**.**user**.**email** **===** **process**.**env**.**NEXT_PUBLIC_FIREBASE_EMAIL_AUTHENTICATION**)** **{

**      **router**.**push**(**"/admin/dashboard"**)**;

**    **}

**  **}** **catch** **(**error**)** **{

**    **alert**(**"Erro ao fazer login"**)**;

**  **}

**}**

## Database Operations

### News Management

Located in [page.tsx](vscode-file://vscode-app/c:/Users/felip/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):

#### 1. Fetching News

**const** **fetchNews** **=** **useCallback**(**async** **(**)** **=>** **{

**  **const** **querySnapshot** **=** **await** **getDocs**(**collection**(**db**, **"news"**)**)**;**

**  **const** **newsData** **=** **querySnapshot**.**docs**.**map**(**doc** **=>** **(**{**

**    id: **doc**.**id**,**

**    **...**doc**.**data**(**)**

**  **}**)**)**;**

**  **setNews**(**newsData**)**;

**}**, **[**]**)**;

#### 2. Adding News

**const** **addNews** **=** **async** **(**e**:** **React**.**FormEvent**)** **=>** **{

**  **try** **{

**    **await** **addDoc**(**collection**(**db**, **"news"**)**, **{**

**      **title**, **

**      **content**, **

**      **link**,**

**      date: **new** **Date**(**)**.**toISOString**(**)** **

**    **}**)**;

**    **await** **fetchNews**(**)**;**

**  **}** **catch** **(**error**)** **{

**    **alert**(**"Erro ao adicionar notícia"**)**;

**  **}

**}**;

#### 3. Updating News

**const** **handleEdit** **=** **async** **(**e**:** **React**.**FormEvent**)** **=>** **{

**  **try** **{

**    **const** **newsRef** **=** **doc**(**db**, **"news"**, **editingNews**.**id**)**;

**    **await** **updateDoc**(**newsRef**, **{

**      title: **editingNews**.**title**,**

**      content: **editingNews**.**content**,**

**      link: **editingNews**.**link

**    **}**)**;

**    **await** **fetchNews**(**)**;**

**  **}** **catch** **(**error**)** **{

**    **alert**(**"Erro ao editar notícia"**)**;

**  **}

**}**;

#### 4. Deleting News

**const** **handleDelete** **=** **async** **(**id**:** string**)** **=>** **{**

**  **try** **{

**    **await** **deleteDoc**(**doc**(**db**, **"news"**, **id**)**)**;**

**    **await** **fetchNews**(**)**;**

**  **}** **catch** **(**error**)** **{

**    **alert**(**"Erro ao excluir notícia"**)**;

**  **}

**}**;

## Public News Display

Located in [news-section.tsx](vscode-file://vscode-app/c:/Users/felip/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html):

* Fetches and displays news items in descending order
* Limits to 5 most recent items
* Includes loading states and error handling

**useEffect**(**(**)** **=>** **{

**  **async** **function** **fetchNews**(**)** **{

**    **const** **newsQuery** **=** **query**(**

**      **collection**(**db**, **"news"**)**,

**      **orderBy**(**"date"**, **"desc"**)**,

**      **limit**(**5**)**

**    **)

**    **const** **querySnapshot** **=** **await** **getDocs**(**newsQuery**)**

**    **const** **newsData** **=** **querySnapshot**.**docs**.**map**(**doc** **=>** **(**{**

**      id: **doc**.**id**,**

**      **...**doc**.**data**(**)**

**    **}**)**)

**    **setNews**(**newsData**)**

**  **}

**  **fetchNews**(**)

**}**, **[**]**)**

## Security Considerations

1. Environment Variables: Sensitive Firebase configuration is stored in environment variables
2. Authentication Check: Dashboard routes verify user authentication
3. Email Verification: Specific email verification for admin access
4. Error Handling: Comprehensive error handling for all Firebase operations

This implementation provides a secure and efficient way to manage news content through Firebase, with separate interfaces for admin management and public display.
