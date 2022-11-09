<template>
  <div class="products">
    <h2> Our Products page</h2>
    <product-compo-one></product-compo-one>
    <button v-on:click="increasePrice"> Increase price</button>
    <button v-on:click="decreasePrice"> Decrease price</button>
    <br/>
    <product-compo-two :productList="productList"></product-compo-two>
  </div>
</template>

<script>
import ProductCompoOne from "@/components/ProductCompoOne.vue";
import ProductCompoTwo from "@/components/ProductCompoTwo.vue";

export default {
  name: "Products",
  components: {ProductCompoOne, ProductCompoTwo},
  data: function () {
    return {
      productList: [
        {id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
        {id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
        {id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
        {id: 4, author: "Fyodor Dostoevsky", book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
      ]
    }
  },

  methods: {
    increasePrice: function () {
      this.$store.dispatch("increasePriceAction")
    },
    decreasePrice: function () {
      this.$store.commit("decreasePrice")
    }

  }
}
</script>

<style scoped>
button {
  background: rgb(31, 163, 163);
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: white;
  border-radius: 20px;
}
</style>
