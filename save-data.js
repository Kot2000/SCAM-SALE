
        // Import the functions you need from the SDKs you need
      
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
      
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

        import { getDatabase, ref, set, onValue, child, get  } from "firebase/database";
      
        // TODO: Add SDKs for Firebase products that you want to use
      
        // https://firebase.google.com/docs/web/setup#available-libraries
      
      
        // Your web app's Firebase configuration
      
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      
        const firebaseConfig = {
      
          apiKey: "AIzaSyCqgN1q_HTDpondw8QGoGPwKQROkAdqtF0",
      
          authDomain: "scam-sale-official-not-saling.firebaseapp.com",
      
          projectId: "scam-sale-official-not-saling",
      
          storageBucket: "scam-sale-official-not-saling.appspot.com",
      
          messagingSenderId: "564332435049",
      
          appId: "1:564332435049:web:e0ce4260b0aa97ef84b4f8",
      
          measurementId: "G-QK1XXHDSYD"
      
        };
      
      
        // Initialize Firebase
      
        const app = initializeApp(firebaseConfig);
      
        const analytics = getAnalytics(app);

        function writeProductData(ProductId, name, publisherId, imageUrl) {
            const db = getDatabase();
            set(ref(db, 'products/' + ProductId), {
                product_name: name,
                publisherId: publisherId,
                product_image: imageUrl
            });
        }

        function writeUserData(userId, name, email, pass, imageUrl) {
          const db = getDatabase();
          set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            pass: pass,
            profile_picture : imageUrl
          });
        }
      
        function getUserData(userId) {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
            }).catch((error) => {
              console.error(error);
            });
        }

        function logUserData(userId, pass) {
          const dbRef = ref(getDatabase());
          get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
            }).catch((error) => {
              console.error(error);
            });
        }