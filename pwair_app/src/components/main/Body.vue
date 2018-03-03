<template>
  <div>
      Body
  </div>
</template>
<script>
import summaryData from '../common/data.json';

export default {
  data() {
    return {
      ff: summaryData.RealtimeCityAir
    }
  },
  // fetchData() {
  //   get('../common/data.json')
  //   .then(Response => {
  //     return Response.json();
  //   })
  //   .then(data => {
  //     const resultArray = [];
  //     for(let key in data) {
  //       resultArray.push(data[key]);
  //     }
  //     this.users = resultArray;
  //   })
  // }
  mounted(){
    console.log('ㅋㅋㅋㅋㅋㅋㅋㅋ' + this.ff.row[0].MSRRGN_NM);
  }
}
</script>
