<template>
    <div>
        <b-button class="toggler" v-b-toggle.sidebar-menu
            ><Menu></Menu
        ></b-button>
        <b-sidebar id="sidebar-menu" title="Documentación" shadow>
            <div class="px-3 py-2">
                <ul
                    class="
                        flex-column
                        navbar-nav
                        w-100
                        justify-content-between
                    "
                >
                    <li v-for="route in links" :key="route.name" class="nav-item">
                        <router-link
                            class="nav-link pl-0"
                            :to="route"
                            >{{ route.meta.link_name }}</router-link
                        >
                    </li>
                </ul>
            </div>
        </b-sidebar>
    </div>
</template>
<script>
import Menu from "vue-material-design-icons/Menu.vue";

export default {
    components: {
        Menu,
    },
    data() {
        return {
            links: [],
        };
    },
    mounted() {
        const mainRoute = this.$router.options.routes.find(route => route.meta.is_docs);
        this.links = mainRoute.children.filter(route => route.meta.is_docs);
    },
};
</script>
<style lang="scss" scoped>
#sidebar-menu {
    color: var(--bs-body-color);
}
.toggler {
    background-color: inherit;
    border: 0;
    &:focus,
    &:active,
    &:hover {
        background-color: inherit;
        border: 0;
    }
}
</style>