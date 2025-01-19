<template>
  <section
    class="bg-cover bg-center h-screen relative"
    style="background-image: url('https://files.catbox.moe/1cqx9z.jpg');"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto h-full flex items-center justify-center text-center relative z-10 text-white">
      <div>
        <h1 class="text-5xl sm:text-6xl font-bold mb-6 leading-tight">Explore Jogja's Beauty</h1>
        <p class="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          Discover the rich culture, breathtaking landscapes, and timeless heritage of Yogyakarta.
        </p>
        <a
          href="#"
          class="btn-primary text-white px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-all"
        >
          Start Your Journey
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
/* Styling tambahan */
</style>
