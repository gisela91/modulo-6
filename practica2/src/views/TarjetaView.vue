<template>
   
        <h4>Productos relacionados</h4>
    
     <div class="d-flex justify-content-center mt-5 ms-5 me-5">
        <TarjetasProducto
            v-for="producto in productos" 
            :key="producto.id" 
            :producto="producto"
        />
  </div>
  </template>
  <script>

  import TarjetasProducto from "../components/TarjetasProducto.vue"
  export default {
    name: "TarjetaView",
    data(){
        return {
            productos: null
            }
        },
        props: [],
        methods: {
            getProducto(){
                axios({
                    method: "get",
                    url: "http://localhost:5555/Productos/",
                })
                .then(response => {
                    
                    this.productos = response.data;
                    console.log('productos:', response.data);
                })
                .catch(e=>console.log(e));
            }
        },
        created() {
               
        },
        
        computed: {

        },
        mounted() {
            this.getProducto()
            
        },
        components: {
            TarjetasProducto,
        }

    }
</script>
<style></style>