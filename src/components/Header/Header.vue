<template>
    <div :class="`header--${headerSize}`">
        <h1>
            <slot/>
        </h1>
        <f-button buttonType="secondary">Click for more information</f-button>
    </div>
</template>

<script>
import FButton from '../Button/Button';
export default ({
    name: 'Header',
    components: {
        FButton
    },
    props: {
        headerSize: {
            type: String,
            default: 'large'
        }
    }
})
</script>

<style scoped>

.header--large {
    color: red;
    font-size: 40px;
}

.header--small {
    color: blue;
    font-size: 20px;
}

</style>
