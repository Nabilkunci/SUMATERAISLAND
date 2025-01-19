<template>
  <div>
    <Header />
    <Hero />
    <AboutJogja />
    <Testimonials />
    <FAQ />
    <Gallery />
    <Blog />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import AboutJogja from './components/AboutJogja.vue';
import Testimonials from './components/Testimonials.vue';
import FAQ from './components/FAQ.vue';
import Gallery from './components/Gallery.vue';
import Blog from './components/Blog.vue';
import CallToAction from './components/CallToAction.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Hero,
    AboutJogja,
    Testimonials,
    FAQ,
    Gallery,
    Blog,
    CallToAction,
    Footer,
  },
};
</script>

<style>
/* Tambahkan styling global untuk memastikan konsistensi */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9; /* Warna dasar background */
  color: #333; /* Warna teks default */
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
