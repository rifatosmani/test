<template>
 <section>
   
    <banner title="ICT" descr="" url="https://static.vecteezy.com/system/resources/previews/000/694/589/non_2x/abstract-technology-banner-blue-background-vector.jpg" colorText="white" home="1">
    </banner>
    <div class="productContainer" style="background-color: rgb(194, 215, 253)">
      <div class="half">
        <img src="https://whyfutz.com/wp-content/uploads/2020/04/product.jpg" />
      </div>
      <div class="half">
        <h1>Products</h1>

        <br />
        <p style="font-size: 1.25em">
          At ICT, we’re committed to providing systems that help you keep your
          people, property, operations and information safe. With our large
          range of products taking care of your building and security needs, you
          can focus on the core aspects of your business.
        </p>
        <br /><br />
        <router-link to="/products" class="greyborderBtn"
          ><span class="fa">>&nbsp;Browse Our Products</span></router-link
        >
      </div>
    </div>
    <div
      class="productContainer"
      style="background-color: rgba(236, 240, 253, 0.842)"
    >
      <div class="half">
        <h1>People</h1>

        <br />
        <p style="font-size: 1.25em">
          Every one of our team members brings a unique set of skills and
          experience to the company and while we may be a very diverse bunch, we
          all share the same passion and enthusiasm for creating groundbreaking
          products that meet your needs.
        </p>
        <br /><br />

        <router-link to="/people" class="greyborderBtn"
          ><span class="fa">>&nbsp;Meet Our Team</span></router-link
        >
      </div>
      <div class="half">
        <img
          src="https://www.unicusano.it/blog/wp-content/uploads/2017/11/2.2-lavoro-in-gruppo.jpg"
        />
      </div>
    </div>
    <div
      class="productContainer"
      style="background-color: rgba(149, 173, 252, 0.842)"
    >
      <div class="half">
        <img
          src="https://minteerteam.com/wp-content/uploads/2017/04/location.jpg"
        />
      </div>
      <div class="half" style="border: 0px">
        <h1>Areas</h1>
        <br />
        <p style="font-size: 1.25em">
          Discover where our office are located in and all the products made in
          our Areas.
        </p>
        <br /><br />

        <router-link to="/areas" class="greyborderBtn"
          ><span class="fa">>&nbsp;Discover Our Areas</span></router-link
        >
      </div>
    </div>
   <!-- <area-list></area-list> -->
 </section>
</template>

<script>
export default {
  layout:"menu"
}
</script>
<style scoped>
img {
  width: 100%;
}
.productContainer {
  background-color: rgba(149, 173, 252, 0.842);
  margin-top: 0px;
  width: 100%;
  height: 550px;
}
.half {
  margin-top: 75px;
  width: 45%;
  float: left;
  height: 400px;
  margin-left: 40px;
}
.greyborderBtn {
  color: #999999;
  padding: 5px 20px;
  border: 1px solid black;

  cursor: pointer;
  float: left;
  margin-left: 10px;
}
h1 {
  display: block;
  font-size: 3em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  font-family: 'Source Sans Pro', sans-serif;
}
p {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  text-align: left;
  margin-left: 10px;
  font-family: 'Source Sans Pro', sans-serif;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 2em;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>