<template>
    <div>
        <router-view />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            key: false
        }
    },
    beforeCreate () {
        axios
        .get('https://private-5b8666-testefrontendpc4.apiary-mock.com/users')
        .then(response => {

            let coNsultaJson = JSON.stringify(response.data[0]['users']);
            localStorage.setItem('arrayConsulta',coNsultaJson)
            let i =0
            for(i;i<response.data[0]['users'].length;i++){
                this.$store.state.lista.push(response.data[0]['users'][i]);    
            }
        })
    },    
}
</script>