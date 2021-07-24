<template>
  <section>
    <div
      v-if="home === 0"
      class="fullBackground"
      :style="'background-image: url(' + this.url + ')'"
    >
      <div class="half">
        <div
          class="slide"
          style="
            opacity: 1;
            visibility: visible;
            position: relative;
            right: 0px;
          "
        >
          <div style="padding: 20% 0">
            <h2
              class="bannerText"
              :style="
                'color: ' +
                this.colorText +
                '; border-bottom: 1px solid ' +
                this.colorText +
                ';'
              "
            >
              {{ title }}
            </h2>
            <h3
              class="whiteTxt"
              :style="'color: ' + this.colorText + ';text-align: center;'"
            >
              {{ descr }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="fullBackgroundHome">
      <div class="half">
        <div
          class="slide"
          style="
            opacity: 1;
            visibility: visible;
            position: relative;
            right: 0px;
          "
        >
          <div style="padding: 0% 0">
            <h1 class="bannerText" style="font-size: 8em">
              {{ title }}
            </h1>
          </div>
        </div>
      </div>
      <div class="half">
        <div
          class="slide"
          style="
            opacity: 1;
            visibility: visible;
            position: relative;
            right: 0px;
          "
        >
          <div style="padding: 20% 0">
            <h1 style="color: white">Global solutions.</h1>
            <h1 style="color: white; margin-right: 5.5%">Innovations.</h1>
            <h1 style="color: white; margin-right: 12%">Quality.</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['title', 'descr', 'url', 'colorText', 'home'],
}
</script>
<style scoped>
.fullBackground {
  width: 100%;
  height: 400px;
}
.fullBackgroundHome {
  background-color: rgba(73, 121, 255, 0.555);
  width: 100%;
  height: 400px;
}
.slide {
  box-sizing: border-box;
  text-align: center;
}
.half {
  width: 46%;
  float: left;
  height: 100%;
}

h1 {
  display: block;
  font-size: 1.25em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center;
}
h3 {
  margin-left: 60px;
}
</style>