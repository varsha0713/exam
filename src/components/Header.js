import { Outlet } from "react-router-dom";
const Header = () => {
    return ( 
        <>
        <center>
          <h1>Good Education</h1>
        </center>
       <div class="container">
  <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fc-programming&psig=AOvVaw2K195zR-Bjwekv8Q0Ng86C&ust=1690282167260000&source=images&cd=vfe&opi=89978449&ved=0CA0QjRxqFwoTCJjGp_GVp4ADFQAAAAAdAAAAABAE" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">C language</h5>
          <p class="card-text">C language is a powerful and widely-used programming language known for its efficiency and versatility. Developed in the early 1970s by Dennis Ritchie at Bell Labs, C quickly became popular due to its ability to write system software and its portability across different computer architectures. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://unsplash.com/s/photos/c-programming" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">C++ language</h5>
          <p class="card-text">C++ is an extension of the C programming language, and it adds object-oriented programming (OOP) features to C. It was developed by Bjarne Stroustrup in the early 1980s. C++ is known for its performance and versatility, making it suitable for a wide range of applications, including systems programming, game development, and high-performance computing. Its key features include classes, inheritance, polymorphism, templates, and operator overloading. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://unsplash.com/photos/1LLh8k2_YFk" />
        <div class="card-body">
          <h5 class="card-title">Java</h5>
          <p class="card-text">Java, developed by James Gosling at Sun Microsystems in the mid-1990s, is a popular and versatile programming language known for its "write once, run anywhere" (WORA) capability. Java programs are compiled into bytecode, which can run on any platform with the Java Virtual Machine (JVM). Java is widely used for web development, enterprise applications, Android app development, and more. It is known for its robustness, platform independence, and extensive libraries. </p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" />
        <div class="card-body">
          <h5 class="card-title">Python</h5>
          <p class="card-text">Python, created by Guido van Rossum in the late 1980s, is a high-level, interpreted, and dynamically-typed programming language. It emphasizes readability and simplicity, making it a favorite among beginners and experienced developers alike. Python is used for web development, scientific computing, data analysis, artificial intelligence, automation, and more. It has an extensive standard library and a vast ecosystem of third-party libraries, making development faster and more accessible.</p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
    </div>
    <br></br>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1591089101324-2280d9260000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="myimage" width="545px" height="330px" />
        <div class="card-body">
          <h5 class="card-title">React</h5>
          <p class="card-text">React is a JavaScript library for building user interfaces, particularly for web applications. Developed by Facebook, React allows developers to create reusable UI components and efficiently update the user interface as data changes. It follows a component-based architecture, enabling developers to build complex UIs by composing smaller, reusable pieces. React has gained widespread adoption due to its performance, flexibility, and large community support.</p>
          <a href="#" class="btn btn-primary">Book Package</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://www.istockphoto.com/photo/javascript-code-computer-language-programming-internet-text-editor-components-gm1156837650-315443596?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fjavascript&utm_term=javascript%3A%3A%3A" />
        <div class="card-body">
          <h5 class="card-title">JavaScript</h5>
          <p class="card-text">JavaScript, commonly abbreviated as JS, is a dynamic, high-level, and interpreted programming language. It is primarily used for front-end web development to add interactivity and dynamic content to websites. With the advent of Node.js, JavaScript can also be used for server-side development. JavaScript is one of the core technologies of the web, and its versatility has led to its integration in various fields, such as mobile app development, game development, and server-side applications.
Each of these programming languages has its strengths and weaknesses, making them suitable for different use cases. While C++ provides performance and low-level control, Java offers platform independence and robustness. Python emphasizes simplicity and readability, React simplifies UI development, and JavaScript enables interactive web applications. Choosing the right language depends on the specific requirements of the project and the preferences of the developers.
Regenerate respons</p>
          <a href="#" class="btn btn-primary">Book Course</a>
        </div>
      </div>
    </div>
  </div>
</div>
      
        <Outlet/>
      </>
     );
  }
  
  export default Header;