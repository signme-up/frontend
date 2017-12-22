<template lang="html">
  <div class="">
      <!-- <h3 v-if="!status">{{msg}}</h3> -->
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
    <eventComp v-for="a in acara" :event='a'/>
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
              <button class="button" type="button" name="button" @click="multer">Create</button>
              
          <br>
          <br>


      </div>
      
      <div class="">
         <a href="/" @click="logout">LogOut</a> 
      </div>
    </div>
</template>

<script>
import eventComp from './eventComp'
export default {
    data(){
        return{
            msg:"Please Log In",
            status:true,
            acara:[],
            acarabaru : {
            },
            header: {headers:{
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        },
        show : true,
        showEvent : true
        }
    },
    components : {
        eventComp : eventComp
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
                this.acarabaru = {}
                console.log('hello2 berhasil');
                
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
            this.$http.get('/events',this.header)
            .then(response=>{
                // console.log(response.data.data);
                this.acara = response.data.data
                // console.log('................................',this.acara);
            })
            .catch(err=>{
                console.log('===============================>',err);
                console.log(err);
                this.$router.push('/')
            })
        },
        guestMode(){
            this.$router.push('/guest')
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="css">
</style>
