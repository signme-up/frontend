<template lang="html">
    <tr>
      <!-- <th scope="row">Default</th> -->
      <td>{{event.name}}</td>
      <td>{{event.startdate}}</td>
      <td><img :src="event.logo" alt="" width="200"></td>
      <td>{{event.description}}</td>
      <!-- <td><span @click="showGuest">Guest Mode</span></td> -->
      <td><router-link :to="{ name: 'guest', params: {eventId : event._id} }">Guestbook</router-link></td>
    </tr>
</template>

<script>
export default {
    props : ['event'],
methods :{
    showGuest(){
        // this.show = true
    }
 }
}
</script>

<style lang="css">
</style>
