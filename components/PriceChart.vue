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
  },
  data() {
    return {
      labels: [],
      data: [],
      datacollection: {},
      options: {
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
                  return ''
                },
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: (value, index, values) => {
                  return ''
                },
              },
              gridLines: {
                display: false,
                drawBorder: false,
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
            backgroundColor: gradient,
            data: this.data,
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
