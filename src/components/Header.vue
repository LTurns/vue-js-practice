<template>
    <div>
        <h1 class="header">
            Welcome to my Portfolio
        </h1>
        <h6 class="sub-header">Here you will be able to see a selection of my latest Applications.</h6>
        <f-button buttonType="secondary">Click here for more info</f-button>
    </div>
</template>

<script>
import FButton from './Button';
export default ({
    name: 'Header',
    components: {
        FButton
    }
})
</script>

<style scoped>

.header {
    font-size: 100px;
}

.sub-header {
    font-size: 75px;
}

</style>
