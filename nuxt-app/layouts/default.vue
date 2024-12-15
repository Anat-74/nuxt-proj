<template>
<header>
   <NuxtLink to="/about" >About</NuxtLink>
   <NuxtLink to="/contacts" >Contacts</NuxtLink>
</header>

<main>
   <slot />
</main>
</template>

<style scoped>
   header {
      display: flex;
      column-gap: 9px;
   }
</style>

