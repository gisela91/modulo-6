<template>

<footer :style="`background:${configuracionPagina.footerColor}`">  
        </footer>
</template>

<script>
    export default {
        name: 'piePagina',
        data(){
            return {
                
                configuracionPagina: {
                    marca: "MegaDron",
                    menuColor: "lightblue",
                    footerColor: "slategrey",
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