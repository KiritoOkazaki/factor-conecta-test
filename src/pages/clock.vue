<template>
  <div class="main">
      <CardClock :title="'days'" :clock="days"  />
      <CardClock :title="'hours'" :clock="hours"  />
      <CardClock :title="'minutes'" :clock="minutes"  />
      <CardClock :title="'seconds'" :clock="seconds"  />
  </div>
</template>

<script>
import CardClock from '../components/cardClock'
export default {
    components:{
        CardClock
    },
    data () {
        return {
            days: 2,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    created () {
         setInterval(this.timer, 1000)
    },
    methods: {
        timer(){
            if(this.seconds == 0){
                this.seconds = 59
                if(this.minutes == 0){
                    this.minutes = 59
                    if(this.hours == 0){
                        this.hours = 23
                        if (this.days == 2) {
                            this.days = 1
                        } else {
                            this.days--
                        }
                    }
                    else{
                        this.hours-- 
                    }
                } else {
                    this.minutes--
                }
            }
            else {
                this.seconds--
            }
        }
    }

}
</script>

<style>

.main{
    display: flex;
    justify-content: center;
    align-content: center;
}

</style>