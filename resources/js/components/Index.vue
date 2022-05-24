<template>
    <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div class="container-fluid">
            <router-link class="navbar-brand" href="#" :to="{name: 'home'}">Booking</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="!token" :to="{name: 'user.login'}">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="!token" :to="{name: 'user.registration'}">Registration</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link float-end" v-if="token" href="" @click.prevent="logout">Logout</a>
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
    <router-view class="mt-5"></router-view>
    </div>
</template>

<script>
export default {
    name: "IndexComponent",
    data() {
        return {
            token: null
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },
    methods: {
        logout() {
            axios.post('/logout').then(
                res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                }
            )
        },

        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        }
    }
}
</script>

<style scoped>

</style>
