<template>
  <section class="py-16 bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-6">Discover the Wonders of Yogyakarta</h2>
      <p class="text-lg mb-8">
        Join countless travelers in exploring the rich culture, natural beauty, and vibrant life of Jogja.
      </p>
      <a href="#" class="btn-primary text-white px-8 py-4 rounded-full shadow-lg hover:opacity-90">
        Plan Your Journey
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "CallToAction",
};
</script>

<style scoped>
.btn-primary {
  background: linear-gradient(to right, #6b46c1, #d69e2e);
  transition: 0.3s;
}
.btn-primary:hover {
  opacity: 0.9;
}
</style>
