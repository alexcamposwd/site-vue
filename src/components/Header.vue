<template>
    <header>
        <nav class="nav-container">
            <router-link to="/"><img src="https://i.imgur.com/pWKw84Z.png" alt="CPCR-Construções" id="logo"></router-link>
            <img src="https://i.imgur.com/kYosief.png" alt="Abrir menu" id="menu-button" v-on:click="openMenu">

            <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>

            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/obras">Obras</router-link></li>
                    <li v-on:click="closeMenu"><router-link to="/contato">Contato</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function() {
            this.menuActive = true
        },
        closeMenu: function() {
            this.menuActive = false
        },
    }
}
</script>

<style scoped>
    header {
        background-color: var(--color-01);
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        height: 70px;
        width: 100%;
        align-items: center;
        margin-left: 30px;
        margin-right: 30px;
    }

    #logo {
        width: 130px;
        margin-top: 10px;
    }

    #menu-button {
        width: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40vw;
        height: 100vh;
        background-color: var(--color-02);
        opacity: 0.7;
        z-index: 100;
    }

    #menu-items {
        position: fixed;
        top: 20px;
        right: 0;
        width: 60vw;
        height: 100vh;
        display: none;
        flex-direction: column;
        align-items: center;
        background: rgba(255, 255, 255, 0.4);
        z-index: 100;
    }

    #menu-items.active {
        display: flex;
        color: var(--color-green);
    }

    ul {
        list-style: none;
        text-align: center;
        margin-top: 60px;
    }

    ul > li > a {
        color: var(--color-green);
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        padding: 10px;
    }

    ul > li > a:hover {
        background: rgba(8, 88, 51, 0.3);
        padding: 2px 10px;
        border-radius: 3px;
    }

    ul > li {
        margin: 20px 0;
    }

    @media (min-width:700px) {
        #menu-button,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            height: 60px;
            align-items: center;
            margin-top: 0px;
            width: auto;
            padding: 0px;
        }

        ul li {
            margin: 0;
            margin-left: 20px;
        }

        ul > li > a {
            color: var(--color-green);
            text-decoration: none;
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    @media(max-width: 500px) {
        #menu-overlay {
            display: none;
        }
        #menu-items {
            width: 100vw;
            background: rgba(255, 255, 255, 0.7);
        }
    }

</style>