<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Sell Your Product</h1>
  
      <form @submit.prevent="submitForm" id="productForm">
        <div class="form-group">
          <label for="productName">Product Name:</label>
          <input type="text" v-model="productName" class="form-control" id="productName" placeholder="Enter product name" required>
        </div>
  
        <div class="form-group">
          <label for="productPrice">Price:</label>
          <input type="number" v-model="productPrice" class="form-control" id="productPrice" placeholder="Enter product price" required>
        </div>
  
        <div class="form-group">
          <label for="productCategory">Category:</label>
          <input type="text" v-model="productCategory" class="form-control" id="productCategory" placeholder="Enter product category" required>
        </div>
        <div class="form-group">
          <label for="productCategory">Description:</label>
          <input type="textreat" v-model="description" class="form-control" id="description" placeholder="Enter product description" required>
        </div>
  
        <div class="form-group">
          <label for="expirationDate">Expiration Date:</label>
          <input type="date" v-model="expirationDate" class="form-control" id="expirationDate" required>
        </div>
  
        <div class="form-group">
          <label for="stock">Stock:</label>
          <input type="number" v-model="stock" class="form-control" id="stock" placeholder="Enter product stock" required>
        </div>
  
        <div class="form-group">
          <label for="stock">URL image:</label>
          <input type="text" v-model="image" class="form-control" id="image" placeholder="Enter product stock" required>
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productName: '',
        productPrice: '',
        productCategory: '',
        expirationDate: '',
        stock: '',
        image: ''
      };
    },
    methods: {
      async submitForm() {
        // Prepare data object to be sent to the server
        const data = {
            title: this.productName,
            price: this.productPrice,
            Categorie_id: this.productCategory,
            description:this.description,
            date: this.expirationDate,
            qyt: this.stock,
            image: this.image
          // Add more fields as necessary
        };
  
        try {
          // Make POST request to the server to add the product
          const response = await axios.post('http://localhost:3000/Product', data);
          console.log('Product added:', response.data);
          
          // Reset form fields after submission
          this.productName = '';
          this.productPrice = '';
          this.productCategory = '';
          this.expirationDate = '';
          this.description = '';
          this.stock = '';
          this.image = '';
        } catch (error) {
          console.error('Error adding product:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your scoped styles */
  </style>
  