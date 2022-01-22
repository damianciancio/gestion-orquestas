<template>
    <div id="user-layout-container" class="main-container">
        <b-navbar toggleable="lg" :sticky="true" class="main-navbar">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse-alt" is-nav>
                <b-navbar-nav class="d-flex align-items-center">
                    <b-nav-item
                        ><img height="40px" src="../assets/logo.png"
                    /></b-nav-item>
                    <b-nav-item
                        ><router-link :to="{ name: 'Home' }"
                            >Home</router-link
                        ></b-nav-item
                    >
                </b-navbar-nav>
                <b-navbar-nav class="social-icons align-items-center">
                    <Instagram />
                    <Facebook />
                    <Twitter />
                    <b-nav-item href="#" style="min-width: 300px"
                        >
                        <account-menu v-if="isLoggedIn"></account-menu>
                        <guests-menu v-else></guests-menu>
                        </b-nav-item
                    >
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <main>
            <slot></slot>
        </main>
        <footer>Charagua, suena la orilla</footer>
    </div>
</template>
<script>
import Instagram from "vue-material-design-icons/Instagram.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Twitter from "vue-material-design-icons/Twitter.vue";
import AccountMenu from '../components/Menus/AccountMenu.vue';
import GuestsMenu from '../components/Menus/GuestsMenu.vue';

export default {
    components: {
        Instagram,
        Facebook,
        Twitter,
        AccountMenu,
        GuestsMenu,
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    }
};
</script>
<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap";
$textFont: "Nunito", sans-serif;

$regularWeight: 400;
$lightWeight: 300;
$boldWeight: 700;

$primaryColor: #a1d884;
$secondaryColor: #3f1502;

$backgroundColor: #363636;
$fontColor: #ffffff;

#user-layout-container {
    * {
        font-family: "Nunito";
        font-weight: $regularWeight;
        color: $fontColor;
        background-color: $backgroundColor;
    }
    position: relative;
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: $boldWeight;
    }

    .card-title {
        font-weight: $boldWeight;
    }

    .card-text {
        font-weight: $lightWeight;
    }

    a {
        font-weight: $lightWeight;
        color: $primaryColor !important;

        &.nav-link {
            text-transform: uppercase;
            font-weight: $boldWeight;
        }

        &:active {
            color: $fontColor;
        }
    }
    .social-icons {
        * {
            color: $primaryColor;
        }
    }
    #nav-collapse-alt {
        text-align: center;
        border-bottom: 1px solid $primaryColor;
    }
    @media (min-width: 992px) {
        #nav-collapse-alt {
            justify-content: space-between;
            padding: 0 300px;
        }
    }

    header {
        min-height: 100px;
        padding: 20px;
        color: white;
    }
    nav {
        min-height: 75px;
        border-top: 4px solid #0e4749;
        color: #0e4749;
    }

    aside {
        flex: 1;
        padding: 20px;
    }

    main {
        display: flex !important;
        flex-grow: 1;
        flex-direction: row;
        width: 100%;
        min-height: calc(100vh - 119px);
    }

    section {
        height: 100%;
        flex: 5;
        padding: 20px;
    }

    footer {
        color: white;
        background-color: black;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    @media screen and (max-width: 992px) {
        main {
            display: inline-block;
        }
    }

    .social-icons {
        display: flex;
        justify-content: space-between;
        width: 100px;
    }
}
</style>
