<template lang="html">
  <div class="container">
      <h3>{{errorMsg}}</h3>
      

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
            alert(this.userInfo)
            this.$http.post('/auth/signin',this.userInfo)
            .then(response=>{
                 localStorage.setItem('token',token)
                console.log(response);
                     this.$router.push('/event')
                 
                    
                 
            })
            .catch(err=>{
                console.error(err.data);
                this.errorMsg = err.response.data.message
            })
        }
    }
}
</script>

<style lang="css">
</style>
