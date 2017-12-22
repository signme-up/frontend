<template lang="html">
  <div class="container">
    <div class="">
        <img src="../assets/logo.png">
    </div>  

      

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="userInfo.email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"v-model="userInfo.password">
          </div>

      <button type="button" name="button" @click="login">Login</button>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'Welcome to Sign Me Up',
            errorMsg:"",
            show:false,
            userInfo:{
                email : "",
                password:""
            }
            
        }
    },
    methods : {
        login(){
            // alert(this.userInfo)
            this.$http.post('/auth/signin',this.userInfo)
            .then(response=>{
                // console.log(response.data);
                 console.log(this.$router.route, '<-----')
                localStorage.setItem('token',response.data.data.token)
                 
                // console.log(response.data.data.token);
                     this.$router.push('/event')
                 
                    
                 
            })
            .catch(err=>{
                console.error(err);
                this.$swal({
                    title: 'Ooops',
                    text: err.response.data.message,
                    icon: 'error',
                    button: 'OK'
                })
                // this.errorMsg = err.response.data.message
            })
        }
    }
}
</script>

<style lang="css">
</style>
