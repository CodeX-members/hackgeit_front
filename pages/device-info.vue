<template>
    <div class="flex flex-col">
        
        <div class="flex p-5">
            <Button text label="Changer de Device" @click="()=>{
                router.push('/login-device')
            }" />
        </div>

        <!-- device infos -->
        <div class="flex flex-col pt-10 px-5">

            <div class="flex items-center mb-2">
                <span class="underline-text text-2xl"> {{ (infos.result)?infos.result.name:'Name'}} </span>
                <span class="flex-grow"></span>
                <Button text icon="pi pi-pencil" />
            </div>
            <div class="flex items-center ">
                <span class="underline-text text-2xl"> {{ (infos.result)?infos.result.id:'ID'}} </span>
                <span class="flex-grow"></span>
                <Button text icon="pi pi-pencil" />
            </div>

            <div class="flex mt-5">

                <!-- images de la prise -->
                <div class="flex border rounded-lg w-[128px] items-center  justify-center">
                    <img src="~assets/images/prise_image.png" alt="" srcset="" width="58" >
                </div>

                <div class="flex flex-col pl-5 w-full">
                    <div class="flex p-1">
                        <span class="font-bold underline-text-purple"> Etat </span>
                        <span class="flex-grow"></span>
                        <span v-if="infos.result"> {{ (infos.result.status.switch)?"En cours d'utilisation":"Eteint" }} </span>
                    </div>

                    <div class="flex p-1">
                        <span class="font-bold underline-text-purple"> Mode </span>
                        <span class="flex-grow"></span>
                        <span> Economie </span>
                    </div>

                    <div class="p-1">
                        <Button :loading="loadingoff" v-if="infos.result"  :label="(infos.result.status.switch)?'Eteindre':'Allumer'" @click="confirmOff($event)" class="p-1 px-2" icon="pi pi-power-off" iconPos="right" />
                    </div>
                </div>

            </div>
        </div> 
        <!-- Fin device info -->

        <!-- device connected on prise -->
        <div class="flex flex-col px-5 mt-10">

            <div class="flex items-center mb-2">
                <span class="mr-5 text-gray-600"> Matériel utilisé </span>
                <Button icon="pi pi-plus" text class="h-[32px] w-[32px]" />
            </div>

            <div class="">
                <div class="" >
                    <span class="mr-10 font-bold"> Leo-PC </span>
                    <i class="pi pi-info-circle"  v-tooltip.top="'Leo-PC'" ></i>
                </div>
            </div>

        </div>

        <!-- Info conso -->
        <Accordion :activeIndex="0" class="mt-10 px-5">
            <AccordionTab>
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        
                        <span class="font-bold white-space-nowrap">Info conso Actuelle</span>
                    </span>
                </template>
                <div class="flex flex-col" v-if="infos.result">
                    <div class="grid grid-cols-3 gap-2">

                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> {{infos.result.status.actual_current}} A </span>
                            <span class=""> Intensité </span>
                        </div>
                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> {{ infos.result.status.actual_voltage }} V </span>
                            <span class=""> Tension </span>
                        </div>
                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> {{ infos.result.status.actual_power }} W </span>
                            <span class=""> Puissance </span>
                        </div>
                    </div>

                    <div class="flex mt-5 pl-2">
                        <span class="font-bold underline-text-purple"> Frais </span>
                        <span class="flex-grow">  </span>
                        <span class=""> 264 Ar </span>
                    </div>
                </div>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap"> Impact Environnemental </span>
                    </span>
                </template>
                <span class="text-2xl font-bold mb-5">Empreinte Carbone (CO2)</span>
                <div class="flex flex-col" v-if="infos.result">
                    <div class="flex mb-2">
                        <span class="">Electricité mixte </span>
                        <span class="flex-grow"></span>
                        <span class="underline-text-purple font-bold text-lg"> {{ (0.0001*infos.result.status.actual_power*0.4).toFixed(5)  }} Kg</span>
                    </div>

                    <div class="flex mb-2">
                        <span class="">Electricité à partir du charbon </span>
                        <span class="flex-grow"></span>
                        <span class="underline-text-purple font-bold text-lg"> {{ (0.0001*infos.result.status.actual_power*0.9).toFixed(5)  }} Kg</span>
                    </div>

                    <div class="flex mb-2">
                        <span class="">Electricité à partir du Gaz Naturel </span>
                        <span class="flex-grow"></span>
                        <span class="underline-text-purple font-bold text-lg"> {{ (0.0001*infos.result.status.actual_power*0.2).toFixed(5)  }} Kg</span>
                    </div>

                </div>
            </AccordionTab>
        </Accordion>

    </div>
</template>

<script setup>

import { useConfirm } from "primevue/useconfirm";
import { io } from "socket.io-client"

const socket = io('http://localhost:3005')

const confirm = useConfirm();

const infos = ref({})

const router = useRouter()

const loadingoff = ref(false)

async function offPrise(){
    try {
        const r = await $fetch('/api/switch',{
            method:'post',
            body:{switch_status:'OFF'}
        })
    } catch (e) {
        console.log(e);
    }
}

async function onPrise(){
    try {
        const r = await $fetch('/api/switch',{
            method:'post',
            body:{switch_status:'ON'}
        })
    } catch (e) {
        console.log(e);
    }
}

function confirmOff(event){
    confirm.require({
        target: event.currentTarget,
        message: 'Vous êtes sûr de vouloir continuer ?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel:"Oui",
        rejectLabel:"Non",
        position:"top",
        accept: () => {

            loadingoff.value = true
            if(infos.value.result.status.switch){
                offPrise()
            }else{
                onPrise()
            }

            setTimeout(() => {
                loadingoff.value = false
            }, 5000)

        },
        reject: () => {
        }
    });
}

socket.on('data',(data)=>{
    infos.value = data
})

definePageMeta({
    layout:"device"
})

</script>

