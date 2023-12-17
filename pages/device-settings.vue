<template>
    <div class="">
        
        <div class="text-center w-full py-10">
            <span class="text-2xl underline-text"> Paramètres </span>
        </div>

        <div class="flex flex-col px-5">
            <!-- Block Menus -->
            <div class="flex flex-col p-2  shadow-xl mb-5 rounded-xl border">
                <!-- Menu -->
                <div class="cursor-pointer flex p-2 rounded-lg hover:bg-gray-50 mb-1 items-center">
                    <div class="p-2">
                        <img src="~assets/images/params_user.svg" alt="" width="50" srcset="">
                    </div>
                    <div class="flex flex-col px-2">
                        <span class="font-bold">Compte Utilisateur</span>
                        <span class="text-gray-600"> Options de confidentialité du compte </span>
                    </div>
                </div>

                <div class="cursor-pointer flex p-2 rounded-lg hover:bg-gray-50 mb-1 items-center">
                    <div class="p-2">
                        <img src="~assets/images/params_pref.svg" alt="" width="50" srcset="">
                    </div>
                    <div class="flex flex-col px-2">
                        <span class="font-bold">Préférences de Planification</span>
                        <span class="text-gray-600"> Planification et actions nécessaire </span>
                    </div>
                </div>
            </div>

            <!-- Block Menus -->
            <div class="flex flex-col p-2  shadow-xl mb-5 rounded-xl border">
                <!-- Menu -->
                <div class="cursor-pointer flex p-2 rounded-lg hover:bg-gray-50 mb-1 items-center">
                    <div class="p-2">
                        <img src="~assets/images/params_language.svg" alt="" width="50" srcset="">
                    </div>
                    <div class="flex flex-col px-2">
                        <span class="font-bold">Langue et Région</span>
                        <span class="text-gray-600"> Choix de la langue de l'application </span>
                    </div>
                </div>

                <div class="cursor-pointer flex p-2 rounded-lg hover:bg-gray-50 mb-1 items-center">
                    <div class="p-2">
                        <img src="~assets/images/params_sub.svg" alt="" width="50" srcset="">
                    </div>
                    <div class="flex flex-col px-2">
                        <span class="font-bold">Abonnements et paiements</span>
                        <span class="text-gray-600"> Uprage du compte </span>
                    </div>
                </div>

                <div class="cursor-pointer flex p-2 rounded-lg hover:bg-gray-50 mb-1 items-center">
                    <div class="p-2">
                        <img src="~assets/images/params_cond.svg" alt="" width="70" srcset="">
                    </div>
                    <div class="flex flex-col px-2">
                        <span class="font-bold">Conditions d'utilisation 
                                et politique de confidentialité</span>
                        <!-- <span class="text-gray-600"> Uprage du compte </span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


definePageMeta({
    layout:"device"
})
</script>