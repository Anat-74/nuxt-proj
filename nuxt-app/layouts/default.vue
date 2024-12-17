<template>
<header>
   <div class="links">
   <NuxtLink to="/about" >About</NuxtLink>
   <NuxtLink to="/contacts" >Contacts</NuxtLink>
</div>
</header>

<main>
   <slot />
</main>
</template>

<style lang="scss" scoped>
.links {
   display: flex;
   column-gap: toRem(12);
   padding-inline-start: toRem(7);
   margin-block-end: toRem(9);
   color: var(--light-green);
   @include adaptiveValue("font-size", 24, 16);
}
</style>

