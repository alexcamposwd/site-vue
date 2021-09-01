<template>
  <main>
    <div class="builds">
      <div class="gallery" id="gallery-pics" v-for="build in builds" :key="build.id" >
        <a href="#"><img :src="build[0].link" :alt="build[0].name" /></a>
      </div>
    </div>
  </main>
</template>

<script>
import api from '../service/api'

export default {
  name: 'Build',
  data() {
    return {
      builds: null
    }
  },
  
  mounted() {
    api.get('/thumbnail').then(res => {
        this.builds = res.data
    })
    
  }
}
</script>

<style scoped>
.builds {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 10px;
  overflow-x: hidden;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  width: 300px;
  height: 200px;
}

img, a {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 200px;
  transition: 0.4s ease-out; 
}

img:hover {
  -webkit-filter: grayscale(80%);
  -webkit-transform: scale(1.05);
  filter: grayscale(80%);
  transform: scale(1.08);
}

</style>