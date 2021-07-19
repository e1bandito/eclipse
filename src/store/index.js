import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencyList: [],
    currencyName: "",
    renderList: [],
    firstValuteIndex: 0,
    secondValuteIndex: 1,
    convertValuteRes: null,
    convertValuteValue: 1,
  },
  mutations: {
    changeValute(state, idx) {
      state.renderList[idx][1].reverse = !state.renderList[idx][1].reverse;
    },
    sortList(state, item) {
      state.currencyName = item;
      let str = item.toLowerCase();
      if (item === "") {
        state.renderList = state.currencyList;
      } else {
        state.renderList = state.currencyList.filter(function (el) {
          let charCode = el[1].CharCode.toLowerCase();
          let name = el[1].Name.toLowerCase();
          return charCode === str || name === str;
        });
      }
    },
    updateCurrencyList(state, list) {
      state.currencyList = list;
      state.renderList = list;
    },
    changeFirstValuteIndex(state, idx) {
      state.firstValuteIndex = idx;
    },
    changeSecondValuteIndex(state, idx) {
      state.secondValuteIndex = idx;
    },
    changeConvertValue(state, value) {
      state.convertValuteValue = value;
    },
    convertValute(state) {
      const firstValuteValue =
        state.currencyList[state.firstValuteIndex][1].Value;
      const firstValuteNominal =
        state.currencyList[state.firstValuteIndex][1].Nominal;
      const secondValuteValue =
        state.currencyList[state.secondValuteIndex][1].Value;
      const secondValuteNominal =
        state.currencyList[state.secondValuteIndex][1].Nominal;

      state.convertValuteRes =
        (firstValuteValue /
          firstValuteNominal /
          (secondValuteValue / secondValuteNominal)) *
        state.convertValuteValue;
    },
    reverseConvertValutes(state) {
      const tempIndex = state.firstValuteIndex;
      state.firstValuteIndex = state.secondValuteIndex;
      state.secondValuteIndex = tempIndex;
    },
  },
  actions: {
    async fetchCurrencyList(ctx) {
      const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
      const currencyData = await res.json();
      const currencyList = Object.entries(currencyData.Valute);
      currencyList.forEach((el) => {
        el[1].reverse = false;
      });
      ctx.commit("updateCurrencyList", currencyList);
      ctx.commit("convertValute");
    },
    changeValute(ctx, idx) {
      ctx.commit("changeValute", idx);
    },
    convertValute(ctx) {
      ctx.commit("convertValute");
    },
    sortList(ctx, e) {
      ctx.commit("sortList", e.target.value);
    },
    changeFirstValuteIndex(ctx, e) {
      ctx.commit("changeFirstValuteIndex", e.target.value);
      ctx.commit("convertValute");
    },
    changeSecondValuteIndex(ctx, e) {
      ctx.commit("changeSecondValuteIndex", e.target.value);
      ctx.commit("convertValute");
    },
    changeConvertValue(ctx, e) {
      ctx.commit("changeConvertValue", e.target.value);
      ctx.commit("convertValute");
    },
    reverseConvertValutes(ctx) {
      ctx.commit("reverseConvertValutes");
      ctx.commit("convertValute");
    },
  },
  getters: {
    defaultCurrencyList(state) {
      return state.currencyList;
    },
    allCurrency(state) {
      return state.renderList;
    },
    currencyName(state) {
      return state.currencyName;
    },
    firstValuteIndex(state) {
      return state.firstValuteIndex;
    },
    secondValuteIndex(state) {
      return state.secondValuteIndex;
    },
    getConvertRes(state) {
      return state.convertValuteRes.toFixed(4);
    },
    convertValuteValue(state) {
      return state.convertValuteValue;
    },
  },
});
