<template>
    <button
        :type="actionType"
        v-on="$listeners">
        <slot />
    </button>
</template>