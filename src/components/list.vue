<template>
    <div>
        <div class="grid-container">
            <div class="grid-item" v-for="(consulta, index) in this.$store.state.lista" :key="`consulta-${index}`">
                <!-- Imagem Usuario -->                
                <div class="col-3">
                    <img class="imgUser" :src="consulta.profile_image" alt="Foto Colaborador(a)">
                </div>
                <!-- Nome/Email -->
                <div class="col-5">
                    <ul class="text-left">
                        <li class="primaryText">{{consulta.name}}</li>
                        <li>{{consulta.email}}</li>
                    </ul>
                </div>
                <!-- Cargo/Departamento -->
                <div class="col-5">
                    <ul class="text-left">
                        <li class="primaryText">{{consulta.occupation}}</li>
                        <li>{{consulta.department}}</li>
                    </ul>                    
                </div>
                <!-- Status -->
                <div class="col-2">
                    <div v-if="consulta.active == 1" class="status active"></div>
                    
                    <div v-else class="status disable"></div>
                </div>
                <!-- Função-->
                <div class="col-4">
                    <ul class="text-center">
                        <li class="infoText">{{consulta.role}}</li>
                    </ul>                      
                </div>                

                <div class="col-2">
                    <ul class="text-left">
                        <li>
                            <button type="button" class="btnSecond" @click="edit(index)">Editar</button>
                        </li>
                    </ul>                      
                </div>                                
            </div>
        </div>    
        <div class="row flex-right">
              <button type="button" @click="create" class="btnPrimary ">Novo</button>
        </div>            
    </div>
</template>

<script>

export default {
    data() {
        return {
            array: [],
        }
    },
    methods: {
        edit(index) {
            this.$router.push(`/edit/${index}`).catch(()=>{})
/*          this.$store.state.lista.push(this.$store.state.lista[index]);
            this.$store.state.lista[index].name="Editei você" */
        },
        create(){
            this.$router.push(`/create`).catch(()=>{})
        }
    },
}
</script>
