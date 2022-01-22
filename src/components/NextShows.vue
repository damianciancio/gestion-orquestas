<template>
    <div v-if="nextShows.length">
        <div>Próximos shows!</div>
        <ul>
            <li v-for="show in nextShows" :key="show.id">
                <router-link :to="{ name: 'ShowView', params: { id: show.id } }">
                    {{ show.name }}, {{ show.place }} -
                    {{ show.date | date('DD/MM/YYYY HH:mm') }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        nextShows: {
            type: Array,
            required: true
        }
    }
}
</script>