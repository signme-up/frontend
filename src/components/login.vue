<template lang="html">
  <div class="container">
      <h3></h3>
      
      <form v-on:submit="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <input type="submit" value="Submit"> 
      </form>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'Welcome to Sign Me Up',
            errorMsg:"",
            show:true
            
        }
    },
    methods : {
        login(){
            this.$http.post('/',{
                email : req.body.email,
                password : req.body.password
            })
            .then(response=>{
                 
                
                     this.$router.push('/event')
                 
                    
                 
            })
            .catch(err=>{
                
                this.errorMsg = err
            })
        }
    }
}
</script>

<style lang="css">
</style>
