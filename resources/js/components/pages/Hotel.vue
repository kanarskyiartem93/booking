<template>
    <div class="col">
        <div class="card card-item mb-3">
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
        <div v-for="room in hotel.rooms" :key="room.id" class="card card-item mb-3">
            <div class="row">
                <div class="col-md-4">
                    <img
                        src="https://lviv-online.com/ua/wp-content/uploads/2020/02/festhotel-cover.jpg"
                        class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Ціна: {{ room.roomType.price }}</h5>
                        <p class="card-text">Кількість гостів: {{ room.roomType.capacity }}</p>
                        <p v-if="room.roomType.wifi === 1" class="card-text"><b>Wi-fi</b></p>
                        <p v-if="room.roomType.ac === 1" class="card-text"><b>Кондиціонер</b></p>
                        <p v-if="room.roomType.heater === 1" class="card-text"><b>Обігрівач</b></p>
                        <p v-if="room.roomType.tv === 1" class="card-text"><b>TV</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hotel",
    data() {
        return {
            hotel: null
        }
    },
    mounted() {
        this.getHotel()
    },
    methods: {
        getHotel() {
            axios.get(`/api/hotels/${this.$route.params.id}`)
                .then(res => {
                    this.hotel = res.data.data
                })
        },
    }
}
</script>

<style scoped>

</style>
