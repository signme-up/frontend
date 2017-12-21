<template lang="html">
  <div class="">
      <h3 v-if="!status">{{msg}}</h3>
    <div class="container">
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Starting Date</th>
      <th scope="col">Logo</th>
      <th scope="col">Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" v-for="a in acara">Default</th>
      <td>{{a.name}}</td>
      <td>{{a.startDate}}</td>
      <td>{{a.imageUrl}}</td>
      <td>{{a.description}}</td>
      <td><router-link :to="{ name: 'guest', params: {eventId : a.id} }">Guestbook</router-link></td>
    </tr>
  </tbody>
</table> 
    </div>
      <div class="">
          <form class="" @submit="createAcara" >
              <div class="form-group container">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Event Name" v-model="acarabaru.name">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group container">
                  <label for="exampleInputEmail1">Starting Date</label>
                  <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="acarabaru.startDate">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group container">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" @change="">
                  <small id="fileHelp" class="form-text text-muted">Please input your event logo</small>
              </div>
              <div class="form-group container">
                  <label for="exampleTextarea">Description</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" v-model="acarabaru.description"></textarea>
              </div>
              <input type="submit" value="Create">
              
          </form>
          <br>
          <div class="container">
              <button type="button" class="btn btn-primary btn-lg btn-block" @click="guestMode">Enter Guest Mode</button>
          </div>

      </div>
      
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Please Log In",
            status:true,
            acara:[],
            acarabaru : {
                name: '',
                startDate : '',
                logoEvent : '',
                description : ''
                
            }
        }
    },
    mounted: function(){
        this.getAcara()
    },    
    methods : {
        // multer(){
        //     this.$http.post('/events')
        // },
        createAcara(){
            
            this.$http.post('/events',this.acaraBaru)
            .then(response=>{
                //reload
                location.ready()
            })
            .catch(err=>{
                console.log(err);
                this.$router.push('/login')
            })
            
        },
        getAcara(){

            this.$http.get('/events')
            .then(response=>{
                this.acara = response
            })
            .catch(err=>{
                this.$router.push('/login')
            })
        },
        guestMode(){
            this.$router.push('/guest')
        }
    }
}
</script>

<style lang="css">
</style>
