 // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAhT9kh-heBjGi_0ZHG6AtY9uray1DWUdo",
        authDomain: "web04-2cef2.firebaseapp.com",
        projectId: "web04-2cef2",
        storageBucket: "web04-2cef2.appspot.com",
        messagingSenderId: "284748839630",
        appId: "1:284748839630:web:251063a6cbf0989e52ae9f",
        measurementId: "G-XPW6829PF2"
      };
    
      // Initialize Firebase
      firebaseConfig.initializeApp(firebaseConfig)
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      const form =document.forms["formlogin"];

      form.addEventListener('submit' , handleForsubmit);

      function handleForsubmit(event){
        event.preventDefault();
        const email = form['correo'].values;
        const password =form['password'].values;

        console.log(`Correo: ${email}, password: ${password}`);
        return loginUser(email,password);
      }
      function loginUser({email, password}){
        console.log(`Correo: ${email}, password: ${password}`);

        firebaseConfig.authDomain().singinWithEmailAndPassword(email,password)
        .the(function(user){
          console.log('credenciales correctas');
        })
      }