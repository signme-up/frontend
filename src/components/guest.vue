<template lang="html">
  <div class="">
      <!-- <h1>{{eventId}}</h1> -->
      <form class="" @submit="createGuest" >
          <div class="form-group container">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your name" v-model="guest.name">
          </div>
          <div class="form-group container">
              <label for="exampleInputEmail1">Email</label>
              <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="guest.email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group container">
              <label for="exampleTextarea">Event</label>
              <textarea class="form-control" id="exampleTextarea" rows="3" v-model="guest.acara"></textarea>
          </div>
          <input type="submit" value="Create">
          
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            guest :{
                name:"",
                email:"",
                acara:""
            }
        }
    },
    methods : {
        createGuest(){
            let token = localStorage.getItem('token')
            let options = {
                headers: {
                    Authorization : "Bearer " + token
                }
            }
            axios.post('/guests',this.guest,options)
            .then(response=>{
                //reload
                location.ready()
            })
            .catch(err=>{
                console.log(err);
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style lang="css">
</style>
