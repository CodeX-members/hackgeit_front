<template>
    <div class="flex flex-col">
        

        <!-- device infos -->
        <div class="flex flex-col pt-10 px-5">

            <div class="flex items-center ">
                <span class="underline-text text-2xl"> Codex - prise </span>
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
                        <span> En cours d'utilisation </span>
                    </div>

                    <div class="flex p-1">
                        <span class="font-bold underline-text-purple"> Mode </span>
                        <span class="flex-grow"></span>
                        <span> Economie </span>
                    </div>

                    <div class="p-1">
                        <Button label="Eteindre" @click="confirmOff($event)" class="p-1 px-2" icon="pi pi-power-off" iconPos="right" />
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
                <div class="flex flex-col">
                    <div class="grid grid-cols-3 gap-2">

                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> 0.3 A </span>
                            <span class=""> Intensité </span>
                        </div>
                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> 202.3 V </span>
                            <span class=""> Tension </span>
                        </div>
                        <div class=" items-center justify-center p-2 rounded border-2 flex flex-col">
                            <span class="font-bold text-xl"> 30.5 W </span>
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
                <div class="flex ">
                    <span class="">Empreinte Carbone (CO2)</span>
                    <span class="flex-grow"></span>
                    <span class="underline-text-purple font-bold text-xl">0.2 Kg</span>
                </div>
            </AccordionTab>
        </Accordion>

    </div>
</template>

<script setup>

import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

function confirmOff(event){
    confirm.require({
        target: event.currentTarget,
        message: 'Vous êtes sûr de vouloir continuer ?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel:"Oui",
        rejectLabel:"Non",
        position:"top",
        accept: () => {
        },
        reject: () => {
        }
    });
};

definePageMeta({
    layout:"device"
})

</script>

