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
            <div class="">
                <strong class="text-[24px] font-bold"> Le Futur, </strong>
                <span class="text-[20px]"> c'est </span>
            </div>

            <div class="flex justify-end w-full">
                <div class="flex justify-end flex-col w-max  right-0">
                    <span class="uppercase font-bold text-[24px]"> maintenant </span>
                    <img src="~assets/images/underline.svg " class="w-full" alt="" srcset="">
                </div>
            </div>
        </div>

        <div class="flex justify-end items-end">
            <Button  iconPos="right" 
            @click="()=>{
                router.push('/login-device')
            }"
            class=" flex items-center justify-center font-bold uppercase" text>
            Continuer
            <i class="pi pi-arrow-right ml-5 -translate-y-[2px]"></i>
            </Button>
        </div>
    </div>
</template>

<script setup>


const router = useRouter()

</script>
