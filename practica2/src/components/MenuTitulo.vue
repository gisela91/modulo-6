<template>
 <nav class="navbar navbar-expand-lg " :style="`background:${configuracionPagina.menuColor}`">
           
           <div class="container-fluid" >
               <a class="navbar-brand" href="#">{{configuracionPagina.marca}}</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                   aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                       <li class="nav-item" v-for="menu of configuracionPagina.menus">
                          
                           <a class="nav-link" :href="menu.url">{{menu.etiqueta}}</a>
                           
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
      
</template>

<script>
  export default {
    name: 'menu',
    data(){
      return {
        configuracionPagina: {
          marca: "MegaDron",
          menuColor: "lightblue",
          footerColor: "slategrey",
          precioEstilos: "background: orangered; color: white; font-weight: bold",
          menus: [
            {
              etiqueta: "Inicio",
              url: "/Productos"
            },
            {
              etiqueta: "Tienda",
              url: "?"
            }
          ]
        }
      }
        },
        methods: {             
        },
        props: ["titulo"],
        computed: {
        },
        mounted() {
        },
        components: {
        }
    }
</script>
<style></style>