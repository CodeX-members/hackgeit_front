<template>
    <div class="grid grid-rows-[0.25fr_0.5fr_0.25fr] h-[100vh]  items-center p-5">
        
        <div class="flex flex-col items-center justify-center">
            <img src="~assets/images/boulou_logo.png" alt="" srcset="" width="58" >
            <div class="flex mt-5 text-4xl">
                <span class="">Boulou</span>
                <span class="font-bold">Energy</span>
            </div>
        </div>

        <div class="flex flex-col mx-5 relative">
            <div class="flex flex-col">
                <span class="underline-text-purple mb-2 w-max text-xl"> Identifiant de l'appareil </span>
                <InputText class="mb-5" v-model="deviceId" placeholder="ex : df12454dfdfg54dfg45" />
            </div>
            <Button label="Connecter" @click="setLoading" :loading="loading" class="uppercase" />
        </div>
    </div>
</template>

<script setup>

const loading = ref(false)
const deviceId = ref('')
const router = useRouter()


function setLoading(){
    loading.value = true

    setTimeout(() => {
        loading.value = false

        router.push('/device-info')
    }, 2000);
}

</script>