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
            <span class="text-red-500 mb-5 " v-if="message"> {{  message }} </span>
            <div class="flex flex-col">
                <span class="underline-text-purple mb-2 w-max text-xl"> Identifiant de l'appareil </span>
                <InputText class="mb-5" v-model="deviceId" placeholder="ex : df12454dfdfg54dfg45" />
            </div>
            <Button label="Connecter" @click="setLoading" :loading="loading" class="uppercase" />
        </div>
    </div>
</template>

<script setup>

import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from 'pinia';

const global = useGlobalStore()
const { user,deviceId } = storeToRefs(global)

const loading = ref(false)
const router = useRouter()

const message = ref('')


async function setLoading(){
    loading.value = true

    try {
        const r = await $fetch('/api/seuil',{
            method:"get",
            query:{deviceId:deviceId.value}
        })

        if(r.success){
            router.push('/device-info')
        }else{
            message.value = r.error
        }

        console.log('====================================');
        console.log(r);
        console.log('====================================');

    } catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }

    loading.value = false
}

</script>