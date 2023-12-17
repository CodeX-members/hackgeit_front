<template>
    <div class="">
        <!-- Sidebar -->
        <ConfirmDialog></ConfirmDialog>
        <Sidebar v-model:visible="showSidebar" header="Menu" position="right">
            <template #header>
                <div class="px-2 flex items-center">
                    <img src="~assets/images/boulou_logo.png" alt="" srcset="" width="42" >
                    <div class="flex ml-5 text-2xl">
                        <span class="">Boulou</span>
                        <span class="font-bold">Energy</span>
                    </div>
                </div>
            </template>
            
            <div class="flex flex-col text-2xl px-2 mt-5">
                <NuxtLink  to="/device-info" exactActiveClass="underline-text-purple" class="w-max mb-2" > Infos </NuxtLink>
                <NuxtLink  to="/device-actions" exactActiveClass="underline-text-purple" class="w-max mb-2" > Actions </NuxtLink>
                <NuxtLink  to="/device-settings" exactActiveClass="underline-text-purple" class="w-max mb-2" > Paramètres </NuxtLink>
            </div>

        </Sidebar>

        <!-- Header -->
        <div class="h-[64px] flex items-center border-b sticky top-0 bg-white">
            <div class="px-2 flex items-center">
                <img src="~assets/images/boulou_logo.png" alt="" srcset="" width="42" >
                <div class="flex ml-5 text-2xl">
                    <span class="">Boulou</span>
                    <span class="font-bold">Energy</span>
                </div>
            </div>

            <span class="flex-grow">  </span>
            <Button text icon="pi pi-bars" @click="showSidebar = true" />
        </div>

        <slot />
    </div>
</template>

<script setup>

const showSidebar = ref(false)

const route = useRoute()

watch(() => route.fullPath, () => {
    showSidebar.value = false;
});

</script>