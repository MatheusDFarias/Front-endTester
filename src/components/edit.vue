<template>
    <div>
        <div class=" grid-container p-15per-y">
            <div class="row">
                <div class="col-2 flex-left">
                    <img class="imgPerfil" :src="this.$store.state.lista[id].profile_image" alt="">
                </div>                
            </div>
            <div class="row">
                <div class="col-4 text-left">
                        <label for="nome">Nome</label>
                        <input id="nome" class="inputText" v-model="this.$store.state.lista[id].name" type="text">
                </div>
                <div class="col-4 text-left">
                        <label for="email">E-mail</label>
                        <input id="email" class="inputText" v-model="this.$store.state.lista[id].email" type="text">
                </div>                
            </div>

            <div class="row">
                <div class="col-4 text-left">
                        <label for="setor">Setor</label>
                        <select id="setor" class="selectText">
                            <option :value="this.$store.state.lista[id].department">{{this.$store.state.lista[id].department}}</option>
                            
                        </select>                        
                </div>
                <div class="col-4 text-left">
                        <label for="cargo">Cargo</label>
                        <select id="cargo" class="selectText">
                            <option :value="this.$store.state.lista[id].occupation">{{this.$store.state.lista[id].occupation}}</option>
                        </select> 
                </div>                
            </div>    

            <div class="row">
                <div class="col-4 text-left">
                        <label for="funcao">Função</label>
                        <select id="funcao" class="selectText">
                           <option :value="this.$store.state.lista[id].role">{{this.$store.state.lista[id].role}}</option>
                        </select>
                </div>                
            </div> 

            <div class="row">
                <div class="col-4 flex-left">
                    <label class="switch">
                    <input type="checkbox" v-model="this.$store.state.lista[id].active ">
                    <span class="slider round"></span>
                    </label>                        
                </div>                
            </div>             

        </div>
        <div class="row flex-right">
                <button type="button" class="btnPrimary">Salvar</button>
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return{
            id: this.$route.params.id
        }
        
    },
    mounted () {
        ;
    },
}
</script>