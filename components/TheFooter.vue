<template>
  
    <footer> 
      <nav>
        <div class="footer_basic">
          
              <div class="social"><a href="https://www.facebook.com"><i class="icon ion-social-facebook"></i><img src="https://img.icons8.com/color/40/000000/facebook.png"/></a><a href="https://www.instagram.com"><i class="icon ion-social-instagram"></i><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a><a href="https://www.twitter.com"><i class="icon ion-social-twitter"></i><img src="https://img.icons8.com/ios-filled/40/ffffff/twitter.png"/></a></div>
              <ul class="list-inline">
                  
                  <li class="list-inline-item"><router-link to="/people">Our Team</router-link></li>
                  <li class="list-inline-item"><router-link to="/products">Our Products</router-link></li>
                  <li class="list-inline-item"><router-link to="/about">About Us</router-link></li>
                  <li class="list-inline-item"><router-link to="/contacts">Contact Us</router-link></li>
              </ul>
              <p class="copyright">ICT Company © 2021</p>
          
        </div>
      </nav>
    </footer>
  
</template>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 0.5rem;
  display: inline-block;
}
.footer-basic {
  padding:5px 0;
  color:#ffffff;
  text-align: center;
  background-color: #11005c;
  

}
footer{
  margin-left: 0;
  position: relative;
  width: 100%;
  bottom: 0px;
  right: 0;
}

.footer_basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.2;
  margin-bottom:0;
}

.footer_basic li {
  padding:0 10px;
}

.footer_basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer_basic ul a:hover {
  opacity:1;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:0px;
  text-align:center;
  font-size:11px;
  color:#ffffff;
  margin-bottom:0;
}

</style>