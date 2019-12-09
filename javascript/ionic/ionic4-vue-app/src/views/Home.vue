<template>
  <div>
    <ion-card>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-button color="tertiary" expand="full" @click="handleClick">Hello</ion-button>
    </ion-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleClick(){
      return this.$ionic.alertController
        .create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Hello World',
          buttons: ['OK'],
        })
        .then(a => a.present())
    }
  },
}
</script>
