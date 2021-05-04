<template>
  <div class="chart">
    <line-chart
      ref="myChart"
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
    fill: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: 'Price',
    },
    displayXGrid: {
      type: Boolean,
      required: false,
      default: false,
    },
    displayYGrid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      labels: [],
      data: [],
      datacollection: {},
      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        animation: {
          easing: 'easeInOutBack',
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: (value, index, values) => {
                  return this.displayYGrid ? value : ''
                },
              },
              gridLines: {
                display: this.displayYGrid,
                drawBorder: this.displayYGrid,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: (value, index, values) => {
                  return this.displayXGrid ? value : ''
                },
              },
              gridLines: {
                display: this.displayXGrid,
                drawBorder: this.displayXGrid,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.fillData()
    this.prices.forEach((price) => {
      this.labels.push(price.x)
      this.data.push(price.y)
    })
  },
  methods: {
    fillData() {
      const ctx = this.$refs.myChart.$refs.canvas.getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, 700)
      gradient.addColorStop(0, 'rgba(250,174,50,1)')
      gradient.addColorStop(1, 'rgba(250,174,50,.1)')

      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            fill: this.fill,
            borderColor: 'rgba(250, 174, 50,.7)',
            backgroundColor: gradient,
            data: this.data,
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chart {
  height: min(900px, 60%);
}
</style>
