<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-10">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-gray-900 flex items-center space-x-2">
        <i class="fas fa-map-marker-alt"></i>
        <span>Jogja Wonderful</span>
      </a>
      <nav class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-amber-500">Home</a>
        <a href="#" class="hover:text-amber-500">Destinations</a>
        <a href="#" class="hover:text-amber-500">Culture</a>
        <a href="#" class="hover:text-amber-500">Contact</a>
      </nav>
      <button class="md:hidden text-gray-800 text-2xl focus:outline-none">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Tambahkan styling scoped jika dibutuhkan */
</style>
