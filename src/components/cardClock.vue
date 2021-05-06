<template>
  <div class="card">
     <div class="card-body">
        <div>{{ clock }}</div>
        <span>{{ title }}</span>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            default () {
                return ''
            }
        },
        clock: {
            type: Number,
            default () {
                return 0
            }
        }
    }
}
</script>

<style scoped>

.card {
    height: 200px;
    width: 200px;
    margin: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
}

.card-body{
    top: 25%;
    position: relative;
}

.card-body > div {
    font-size: 2.8rem;
}
.card-body > span {
    font-size: 2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.3);
    text-transform: capitalize;
}

</style>