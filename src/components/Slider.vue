<template>
    <div class="sliders">
    <transition-group name="fade" tag="div">
      <div class="slider" v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>
</template>

<script>
export default {
    name: "Slider",
  data() {
    return {
      images: [
        "https://i.imgur.com/YKQ8xFj.jpg",
        "https://i.imgur.com/JXD9YiX.jpg",
        "https://i.imgur.com/bVDalXk.jpg",
        "https://i.imgur.com/DXjEnXB.jpg",
        "https://i.imgur.com/Pz4cZok.jpg",
        "https://i.imgur.com/AlvvBwh.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
    .sliders{
        width: auto;
        height: calc(100vh - 120px);
        overflow: hidden;
        z-index: 50;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width: 100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        opacity: 0;
    }

    img {
        height: calc(100vh - 120px);
        width: 100%;
        object-fit: cover;
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        color: var(--color-01);
        font-weight: bold;
        font-size: 18px;
        transition: 0.7s ease;
        border-radius: 0 4px 4px 0;
        text-decoration: none;
        user-select: none;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }

    
</style>