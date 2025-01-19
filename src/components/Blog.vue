<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-8">Latest Blog Posts</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(post, index) in posts" :key="index" class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">{{ post.title }}</h3>
          <p class="text-gray-600 mb-4">{{ post.description }}</p>
          <a href="#" class="text-blue-500">Read More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: [
        {
          title: "Discovering Hidden Gems in Yogyakarta",
          description: "Explore lesser-known attractions in Jogja that offer breathtaking views and unique experiences.",
        },
        {
          title: "Top Culinary Experiences in Jogja",
          description: "Dive into Jogja's rich culinary scene and savor traditional dishes you can't miss.",
        },
        {
          title: "A Guide to Cultural Festivals in Jogja",
          description: "Learn about vibrant cultural events and festivals in Yogyakarta that showcase its rich heritage.",
        },
      ],
    };
  },
};
</script>
