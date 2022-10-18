<template>
    <div v-if="producto" class="row justify-content-center" >
        <Producto :producto="producto"></Producto>   
        
    </div>
    <div>
   
</div>
  </template>
  <script>

  import Producto from "../components/Producto.vue"
  export default {
    name: "ProductosView",
    data(){
        return {
            producto: null
            }
        },
        props: ["id"],
        methods: {
            obtenerProducto(){
                axios({
                    method: "get",
                    url: "http://localhost:5555/Productos/"+this.id,
                })
                .then(response => {
                    console.log(response);
                    this.producto = response.data;
                })
                .catch(e=>console.log(e));
            }
        },
        created() {
               
        },
        
        computed: {

        },
        mounted() {
            this.obtenerProducto()
            
        },
        components: {
            Producto,
        }

    }
</script>
<style></style>