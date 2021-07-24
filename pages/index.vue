<template>
  <section>
    {{areas}}
  </section>
</template>

<script>
export default {
  layout: 'menu',
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/getAreas`)
    const areas = data
    const filteredAreas = data
    return {
      filteredAreas,
      areas,
    }
  },

  methods: {
    searchChange() {
      const sBox = document.getElementById('areaS')
      if (sBox === null || sBox.value === '') {
        this.filteredAreas = this.areas
      } else {
        const boxFilter = (f) =>
          f.name.toLowerCase().includes(sBox.value.toLowerCase())
        const result = this.areas.filter(boxFilter)
        this.filteredAreas = result
      }
    },
  },
}
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
input {
  padding: 16px 32px;
  border: none;
  display: block;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  color: #979a9e;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;
  text-align: center;
}
input::placeholder {
  color: #6d7f8f;
}
input:focus {
  outline: none;
  color: #6d7f8f;
  background-color: #eff5fa;
}
</style>


