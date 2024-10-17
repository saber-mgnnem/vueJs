<script>
// Make sure you import the RouterLink component from Vue Router
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink
  }
}
</script>
<template>
  <div class="about">
    <header class="mt-1 bg-light text-dark">
        <h1>Welcome to Our Marketplace</h1>
    </header>
    <div class="container">
        <h2>About Us</h2>
        <p>Welcome to our innovative online marketplace, where you have the power to showcase and sell your products effortlessly. Our platform is designed to provide a seamless experience for sellers like you, allowing you to reach a vast audience and connect with potential buyers around the globe.</p>
        <p>Start selling today and join our thriving community!</p>
        <RouterLink to="/Login" class="btn">Get Started</RouterLink>
    </div>
  </div>
</template>
<style scoped>
  body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        .container {
            max-width: 960px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .btn:hover {
            background-color: #0056b3;
        }
</style>
