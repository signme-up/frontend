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
    <tr v-for="a in acara">
      <!-- <th scope="row">Default</th> -->
      <td>{{a.name}}</td>
      <td>{{a.startdate}}</td>
      <td><img :src="a.logo" alt=""></td>
      <td>{{a.description}}</td>
      <td><router-link :to="{ name: 'guest', params: {eventId : a._id} }">Guestbook</router-link></td>
    </tr>
  </tbody>
</table> 
    </div>
      <div class="">
          
              <div class="form-group container">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Event Name" v-model="acarabaru.name">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group container">
                  <label for="exampleInputEmail1">Starting Date</label>
                  <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="acarabaru.startdate">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group container">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" class="form-control-file" id="inputFile" aria-describedby="fileHelp" @change="readURL">
                  <small id="fileHelp" class="form-text text-muted">Please input your event logo</small>
              </div>
              <div class="form-group container">
                  <label for="exampleTextarea">Description</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3" v-model="acarabaru.description"></textarea>
              </div>
              <button type="button" name="button" @click="multer">Create</button>
              
          <br>
          <br>
          <!-- <div class="container">
              <button type="button" class="btn btn-primary btn-lg btn-block" @click="guestMode">Enter Guest Mode</button>
          </div> -->

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
                startdate : '',
                logo : '',
                description : ''
                
            }
        }
    },
    mounted: function(){
        this.getAcara()
    },    
    methods : {
        multer(){
            let data = new FormData();
            data.append('name',this.acarabaru.name)
            data.append('startdate',this.acarabaru.startdate)
            data.append('logo',document.getElementById('inputFile').files[0])
            data.append('description',this.acarabaru.description)
            
            // console.log(data);
            // console.log(this.acarabaru);
            // this.$http.post('/events')
            this.$http.post('/events',data)
            .then(response=>{
                //reload
                console.log('hello2 berhasil');
                location.ready()
            })
            .catch(err=>{
                console.log(err);
                // this.$router.push('/login')
            })
        },
        readURL(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            console.log('ini read url -------->',files);
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        createAcara(){
            
            this.$http.post('/events',this.acaraBaru)
            .then(response=>{
                //reload
                console.log('hello2');
                // location.ready()
            })
            .catch(err=>{
                console.log(err);
                // this.$router.push('/login')
            })
            
        },
        getAcara(){
            console.log('halo');
            this.$http.get('/events')
            .then(response=>{
                // console.log(response.data.data);
                this.acara = response.data.data
                // console.log('................................',this.acara);
            })
            .catch(err=>{
                console.log(err);
                this.$router.push('/')
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
