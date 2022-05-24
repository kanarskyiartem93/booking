<template>
    <div>
        <form method="POST" action="#">
            <div class="row mb-3">
                <label for="first_name"
                       class="col-md-4 col-form-label text-md-end">First Name</label>
                <div class="col-md-2">
                    <input v-model="first_name" id="first_name" type="text"
                           class="form-control" name="first_name">
                </div>
            </div>
            <div class="row mb-3">
                <label for="last_name"
                       class="col-md-4 col-form-label text-md-end">Last Name</label>
                <div class="col-md-2">
                    <input v-model="last_name" id="last_name" type="text"
                           class="form-control" name="last_name">
                </div>
            </div>
            <div class="row mb-3">
                <label for="email"
                       class="col-md-4 col-form-label text-md-end">Email Address</label>
                <div class="col-md-2">
                    <input v-model="email" id="email" type="email"
                           class="form-control" name="email">
                </div>
            </div>
            <div class="row mb-3">
                <label for="password"
                       class="col-md-4 col-form-label text-md-end">Password</label>
                <div class="col-md-2">
                    <input v-model="password" id="password" type="password"
                           class="form-control" name="password">
                </div>
            </div>
            <div class="row mb-3">
                <label for="password_confirmation"
                       class="col-md-4 col-form-label text-md-end">Confirm Password</label>
                <div class="col-md-2">
                    <input v-model="password_confirmation" id="password_confirmation" type="password"
                           class="form-control" name="password_confirmation">
                </div>
            </div>
            <div class="row mb-0">
                <div class="col-md-8 offset-md-4">
                    <button @click.prevent="register" type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }).then(res => {
                    localStorage.setItem('x_xsrf_token',res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({name: 'user.personal'})
                    console.log(res);
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
