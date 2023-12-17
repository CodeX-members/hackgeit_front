<template>
    <div class="">
        <div class="text-center w-full py-10">
            <span class="text-2xl underline-text"> Planifier les Actions </span>
        </div>

        <div class=" mt-5 px-5">

            <div class="flex w-full border-b p-2 items-center">
                <div class="w-[70%]">
                    <span class=""> Eteindre la prise quand il n'y a plus d'appareil branché </span>
                </div>
                <div class="flex justify-end w-[30%]">
                    <InputSwitch v-model="actions.offOnNoDeviceConnected" />
                </div>
            </div>

            <div class="flex w-full border-b p-2 items-center">
                <div class="w-[70%]">
                    <span class=""> Eteindre la prise en cas de retour de courant après une coupure </span>
                </div>
                <div class="flex justify-end w-[30%]">
                    <InputSwitch v-model="actions.offOnCourantBack" />
                </div>
            </div>

            <div class="flex w-full border-b p-2 items-center">
                <div class="w-[70%]">
                    <span class=""> M'envoyer une notification en cas de coupure de courant </span>
                </div>
                <div class="flex justify-end w-[30%]">
                    <InputSwitch v-model="actions.notifOnCoupure" />
                </div>
            </div>
        </div>

        <div class="">
            <span class="">  </span>

        </div>
    </div>
</template>

<script setup>


const actions = ref({
    offOnNoDeviceConnected:false,
    offOnCourantBack:false,
    notifOnCoupure:true
})

const priseState = ref(['ON','OFF'])

definePageMeta({
    layout:"device"
})
</script>