<template>
  <div class="currency">
    <form @submit.prevent>
      <label class="currency__search-label"
        >Поиск валюты
        <input
          type="text"
          class="currency__search-input"
          :value="currencyName"
          @input="sortList"
          placeholder="Введите название или код валюты"
        />
      </label>
    </form>
    <ul class="currency__list">
      <li
        class="currency__item"
        v-for="(item, idx) in allCurrency"
        :key="item[1].ID"
      >
        <h3 class="currency__item-title">{{ item[1].Name }}</h3>
        <div class="currency__item-wrapper">
          <span class="currency__item-values">
            <span class="currency__item-main" v-if="!item[1].reverse"
              >{{ item[1].Nominal }} {{ item[1].CharCode }}</span
            >
            <span class="currency__item-main--reverse" v-if="item[1].reverse"
              >1 RUB</span
            >
            <button class="currency__item-btn" @click="changeValute(idx)">
              &#8596;
            </button>
            <span class="currency__item-base" v-if="!item[1].reverse">
              {{ item[1].Value }} RUB</span
            >
            <span class="currency__item-base--reverse" v-if="item[1].reverse">
              {{ (item[1].Nominal / item[1].Value).toFixed(4) }}
              {{ item[1].CharCode }}</span
            >
          </span>
          <span
            class="currency__item-diff"
            :class="
              getDiff(item) > 0
                ? 'currency__item-diff--positive'
                : 'currency__item-diff--negative'
            "
          >
            <span class="currency__arrow currency__arrow--up">&#9650; </span>
            <span class="currency__arrow currency__arrow--down">&#9660; </span>
            {{ Math.abs(getDiff(item)) }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Currency",
  computed: {
    ...mapGetters(["allCurrency", "currencyName"]),
  },
  methods: {
    ...mapActions(["sortList", "changeValute"]),
    getDiff(item) {
      let num = item[1].Value - item[1].Previous;
      return num.toFixed(4);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/scaffold";

.currency__search-label {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
  display: block;

  @media (max-width: 600px) {
    text-align: center;
  }
}

.currency__search-input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
}

.currency__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.currency__item {
  padding: 15px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  width: 100%;

  @media (max-width: 490px) {
    padding: 15px;
    font-size: 16px;
  }
}

.currency__item-title {
  font-size: 16px;
  font-weight: 400;
  color: rgb(165, 165, 165);
  margin: 0;
  margin-bottom: 15px;

  @media (max-width: 490px) {
    margin-bottom: 10px;
  }
}

.currency__item-btn {
  border: none;
  background-color: transparent;
  padding: 0 20px;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: teal;
  }
}

.currency__item-values {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 490px) {
    margin-bottom: 15px;
  }
}

.currency__item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.currency__item-diff {
  &--positive {
    color: green;

    & .currency__arrow--down {
      display: none;
    }
  }
  &--negative {
    color: red;

    & .currency__arrow--up {
      display: none;
    }
  }
}
</style>
