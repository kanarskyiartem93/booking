<template>
    <div>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div
                        class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                           class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li>
                                <select v-model="cityId">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="city in cities" :value="city.id">{{ city.name }}</option>
                                </select>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-people"></i> <span
                                    class="ms-1 d-none d-sm-inline">Customers</span> </a>
                            </li>
                        </ul>
                        <hr>
                    </div>
                </div>
                <div class="col">
                    <div v-for="hotel in hotels" class="card card-item mb-3">
                        <div class="row">
                            <div class="col-md-4">
                                <img
                                    src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg"
                                    class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ hotel.name }}</h5>
                                    <p class="card-text">{{ hotel.description }}</p>
                                    <p class="card-text"><b>{{ hotel.city }}</b></p>
                                    <p class="card-text"><small class="text-muted">{{ hotel.address }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            hotels: null,
            cities: null,
            cityId: null
        }
    },

    mounted() {
        this.getRandomHotels()
        this.getCities()
    },

    methods: {
        getRandomHotels() {
            axios.get('/api/hotels/random').then(res => {
                this.hotels = res.data.data
            })
        },
        getCities() {
            axios.get('/api/cities').then(res => {
                this.cities = res.data.data
            })
        },

    },
    watch: {
        cityId: function () {
            axios.get('/api/hotels', {params: {city_id: this.cityId}}).then(res => {
                console.log(res.data.data);
                this.hotels = res.data.data
            })
        }
    }
}
</script>

<style lang="css">

</style>
