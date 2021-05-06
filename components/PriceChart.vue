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
import { mapActions } from 'vuex'
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart,
  },
  props: {
    coinId: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
      default: 1,
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
      prices: [],
      datacollection: {},
      options: {
        responsive: false,
        height: 600,
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
  async mounted() {
    this.prices = await this.fetchCoinPrices({
      id: this.coinId,
      currency: 'eur',
      duration: this.duration,
    })
    this.fillData()
    this.prices.forEach((price) => {
      this.labels.push(price.x)
      this.data.push(price.y)
    })
  },
  methods: {
    ...mapActions(['fetchCoinPrices']),
    fillData() {
      const ctx = this.$refs.myChart.$refs.canvas
      const ctx2d = ctx.getContext('2d')
      const gradient = ctx2d.createLinearGradient(0, 0, 0, 500)
      ctx.height = 400
      gradient.addColorStop(0, 'rgba(65,72,83,1)')
      gradient.addColorStop(1, 'rgba(65,72,83,.1)')

      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            fill: this.fill,
            borderColor: '#414853',
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
