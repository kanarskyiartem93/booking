<template>
    <div>
        <form method="POST" action="#">
            <div class="row mb-3">
                <label for="email"
                       class="col-md-4 col-form-label text-md-end">Email Address</label>

                <div class="col-md-2">
                    <input v-model="email" id="email" type="email"
                           class="form-control" name="email" required>
                </div>
            </div>
            <div class="row mb-3">
                <label for="password"
                       class="col-md-4 col-form-label text-md-end">Password</label>
                <div class="col-md-2">
                    <input v-model="password" id="password" type="password"
                           class="form-control" name="password" required>
                </div>
            </div>
            <div class="row mb-0">
                <div class="col-md-8 offset-md-4">
                    <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {email: this.email, password: this.password})
                    .then(res => {
                        localStorage.setItem('x_xsrf_token',res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'user.personal'})
                    }).catch(error => {
                        console.log(error.response)
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
