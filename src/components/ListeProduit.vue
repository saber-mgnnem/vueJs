<template>
    <div class="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Products</h1>
      <div class="w-75 rounded bg-white border shadow p-4">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Category Id</th> <!-- Corrected spelling: "Category" -->
              <th scope="col">Name</th>
              <th scope="col">Description</th> <!-- Corrected spelling: "Description" -->
              <th scope="col">Price</th> <!-- Corrected spelling: "Price" -->
              <th scope="col">Quantity</th> <!-- Corrected spelling: "Quantity" -->
              <th scope="col">Date</th>
              <th scope="col">Image</th> <!-- Added image column -->
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.categoryId }}</td> <!-- Changed to categoryId -->
              <td>{{ product.title }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.qty }}</td> <!-- Changed to qty -->
              <td>{{ product.date }}</td>
              <td><img :src="product.image" style="max-width: 100px;" /></td> <!-- Display image -->
              <td>
                <button class="btn btn-sm btn-info me-2" @click="readProduct(product.id)">Read</button>
                <button class="btn btn-sm btn-primary me-2" @click="editProduct(product.id)">Edit</button>
                <button class="btn btn-sm btn-danger" @click="deleteProduct(product.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: []
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:3000/Product'); // Adjust URL accordingly
          this.products = response.data;
          console.log(this.products);
        } catch (error) {
          console.error('Error fetching Products:', error);
        }
      },
      readProduct(id) {
        console.log('Read Product with ID:', id);
      },
      editProduct(id) {
        console.log('Edit Product with ID:', id);
      },
      deleteProduct(id) {
        console.log('Delete Product with ID:', id);
      }
    }
  };
  </script>
  