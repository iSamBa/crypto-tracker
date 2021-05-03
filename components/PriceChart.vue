<template>
  <div class="chart">
    <line-chart
      id="myChart"
      :chart-data="datacollection"
      :options="options"
    ></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart,
  },
  props: {
    prices: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      datacollection: {},
      options: {
        animation: {
          easing: 'easeInOutBack',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawTicks: false,
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      const ctx = this.$refs.myChart.getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, 'rgba(250,174,50,1)')
      gradient.addColorStop(1, 'rgba(250,174,50,0)')
      this.datacollection = {
        datasets: [
          {
            label: 'Hello',
            fill: true,
            fillColor: gradient,
            data: [
              { x: 10, y: 20 },
              { x: 30, y: 40 },
              { x: 50, y: 10 },
              { x: 20, y: 30 },
              { x: 40, y: 50 },
            ],
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
}
</style>
