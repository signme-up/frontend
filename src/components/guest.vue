<template lang="html">
  <div class="">
      <!-- <h1>{{eventId}}</h1> -->
      <img :src="event.logo" width='200' alt="">
      <div class="" >
          <div class="form-group container">
              <label for="exampleInputEmail1">Name </label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your name" v-model="guest.name">
          </div>
          <div class="form-group container">
              <label for="exampleInputEmail1">Email</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="guest.email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group container">
              <label for="exampleTextarea">Event</label>
              <textarea class="form-control" id="exampleTextarea" rows="3" v-model="guest.acara"></textarea>
          </div>
          <button type="button" name="button" @click ='createGuest'>Create</button>
          
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            event:{},
            guest :{
                name:"",
                email:"",
                acara:""
            },
            header: {
                headers:{Authorization: "Bearer " + localStorage.getItem('token')}
                }
        }
    },
    mounted(){
       this.onLoad()
    },
    methods : {
        createGuest(){
            this.$http.post(`/events/${this.event._id}/guests`,this.guest)
            .then(response=>{
                //reload
                this.guest = {}
                alert("thank you")
                
            })
            .catch(err=>{
                console.log(err);
                this.$router.push('/')
            })
        },
        onLoad(){
            this.$http.get('/events/' + this.$route.params.eventId,this.header)
            .then(response=>{
                this.event = response.data.data
                console.log('------------------------>',this.event);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style lang="css">
</style>
