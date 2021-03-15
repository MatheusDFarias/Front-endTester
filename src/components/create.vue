<template>
    <div>
        <div class=" grid-container p-15per-y">
            <div class="row">
                <div class="col-2 flex-left">
                    <img class="imgPerfil" src="https://comshalom.org/wp-content/uploads/2014/05/07/redacao/Logo-PJJ-cores.jpg?x34114" alt="">
                </div>                
            </div>
            <div class="row">
                <div class="col-4 text-left">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="array.name" class="inputText" type="text">
                </div>
                <div class="col-4 text-left">
                        <label for="email">E-mail</label>
                        <input id="email" v-model="array.email" class="inputText" type="text">
                </div>                
            </div>

            <div class="row">
                <div class="col-4 text-left">
                        <label for="setor">Setor</label>
                        <select id="setor" v-model="array.department" class="selectText">
                            <option value="teste">Teste</option>
                            <option value="teste2">Teste 2</option>
                        </select>                        
                </div>
                <div class="col-4 text-left">
                        <label for="cargo">Cargo</label>
                        <select id="cargo" v-model="array.occupation" class="selectText">
                            <option value="teste">Teste</option>
                            <option value="teste2">Teste 2</option>
                        </select> 
                </div>                
            </div>    

            <div class="row">
                <div class="col-4 text-left">
                        <label for="funcao">Função</label>
                        <select id="funcao" v-model="array.role" class="selectText">
                            <option value="teste">Teste</option>
                            <option value="teste2">Teste 2</option>
                        </select>
                </div>                
            </div> 

            <div class="row">
                <div class="col-4 flex-left">
                    <label class="switch">
                    <input type="checkbox" v-model="array.active">
                    <span class="slider round"></span>
                    </label>                        
                </div>                
            </div>             

        </div>
        <div class="row flex-right">
                <button type="button" class="btnPrimary " @click="addPerson">Salvar</button>
        </div>        
    </div>
</template>

<script>
export default {
    data() {
        return{
            array:{}
        }   
    },
    methods: {
        addPerson() {
            console.log(this.array)
            if(this.array.active == true){
               this.array.active = 1
            }else{
               this.array.active = 0 
            }
            this.array.profile_image="https://comshalom.org/wp-content/uploads/2014/05/07/redacao/Logo-PJJ-cores.jpg?x34114"
            this.$store.state.lista.push(this.array)
            this.$router.push(`/`).catch(()=>{})
        }
    },
}
</script>