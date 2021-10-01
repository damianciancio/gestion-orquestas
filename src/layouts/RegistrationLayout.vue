<template>
    <div id="registration-layout">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
#registration-layout {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: var(--light);
}
</style>
