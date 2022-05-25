<template>
    <div>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div
                        class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/"
                           class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Фільтри</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu">
                            <li>
                                <p>Місто: </p>
                                <select v-model="cityId">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="city in cities" :key="city.id" :value="city.id">{{
                                            city.name
                                        }}
                                    </option>
                                </select>
                            </li>
                            <li class="mt-3">
                                <p>Кількість гостів: </p>
                                <select v-model="capacity" class="px-0 align-middle">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="index in maxGuests" :value="index">{{ index }}</option>
                                </select>
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
                                    <router-link :to="{name: 'hotel', params: {id: hotel.id}}" class="btn btn-info">More
                                        information
                                    </router-link>
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
            cityId: null,
            capacity: null,
            maxGuests: 10
        }
    },

    computed: {
        changesOfFilter() {
            // `.join()` because we don't care about the return value.
            return [this.cityId, this.capacity].join()
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
        prepareParams(){
            return {
                params: {
                    city_id: this.cityId,
                    capacity: this.capacity
                }
            }
        }

    },
    watch: {
        changesOfFilter: function () {
            axios.get('/api/hotels', this.prepareParams()).then(res => {
                this.hotels = res.data.data
            })
        },

    }
}
</script>

<style lang="css">

</style>
