<template>
  <div class="converter">
    <h2 class="converter__title">Конвертер валют</h2>
    <form class="converter__inner" @submit.prevent>
      <div class="converter__valute converter__valute--first">
        <label for="first-valute" class="converter__valute-title">{{
          defaultCurrencyList[firstValuteIndex][1].Name
        }}</label>
        <div class="converter__wrapper">
          <div class="converter__select">
            <select
              name="first-valute"
              id="first-valute"
              class="converter__select-input"
              :value="firstValuteIndex"
              @change="changeFirstValuteIndex"
            >
              <option
                v-for="(item, idx) in defaultCurrencyList"
                :value="idx"
                :key="idx"
              >
                {{ item[0] }}
              </option>
            </select>
          </div>
          <label class="converter__input-label">
            <input
              type="text"
              class="converter__input"
              :value="convertValuteValue"
              @input="changeConvertValue"
            />
          </label>
        </div>
      </div>
      <button
        class="converter__btn"
        type="button"
        @click="reverseConvertValutes"
      >
        &#8644;
      </button>
      <div class="converter__valute converter__valute--second">
        <label for="second-valute" class="converter__valute-title">{{
          defaultCurrencyList[secondValuteIndex][1].Name
        }}</label>
        <div class="converter__wrapper">
          <div class="converter__select">
            <select
              name="second-valute"
              id="second-valute"
              class="converter__select-input"
              :value="secondValuteIndex"
              @change="changeSecondValuteIndex"
            >
              <option
                v-for="(item, idx) in defaultCurrencyList"
                :value="idx"
                :key="idx"
              >
                {{ item[0] }}
              </option>
            </select>
          </div>
          <span class="converter__result">{{ getConvertRes }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Converter",
  computed: mapGetters([
    "defaultCurrencyList",
    "firstValuteIndex",
    "secondValuteIndex",
    "getConvertRes",
    "convertValuteValue",
  ]),
  methods: mapActions([
    "changeFirstValuteIndex",
    "changeSecondValuteIndex",
    "convertValute",
    "changeConvertValue",
    "reverseConvertValutes",
  ]),
};
</script>

<style lang="scss">
.converter__title {
  color: #ffffff;
  font-size: 18px;
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    text-align: center;
  }
}

.converter__inner {
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.converter__wrapper {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.converter__valute {
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: calc((100% - 110px) / 2);
  align-self: stretch;

  @media (max-width: 600px) {
    max-width: 400px;
    width: 100%;
    align-self: center;
  }
}

.converter__valute-title {
  font-size: 16px;
  font-weight: 400;
  color: #a5a5a5;
  margin: 0;
  margin-bottom: 15px;
}

.converter__select {
  position: relative;
  margin-right: 30px;

  &:hover {
    &::after {
      color: teal;
    }
  }

  &::after {
    content: "\25BC";
    font-size: 16px;
    line-height: 1;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 7px;
    right: 0;
    transition: color 0.3s linear;
  }

  & option {
    font-size: 20px;
  }
}

.converter__select-input {
  appearance: none;
  border: none;
  font-size: 24px;
  text-transform: uppercase;
  padding-right: 15px;
  cursor: pointer;
  transition: color 0.3s linear;
  outline: none;
}

.converter__btn {
  margin: 30px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  line-height: 50px;
  cursor: pointer;
  transition: color 0.3s linear;
  padding: 0;

  @media (max-width: 600px) {
    transform: rotate(90deg);
  }

  &:hover {
    color: teal;
  }
}

.converter__input {
  width: 100%;
  border: none;
  border-bottom: 2px solid rgb(165, 165, 165);
  outline: none;
  font-size: 20px;

  &:focus {
    border-color: teal;
  }
}

.converter__result {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid rgb(165, 165, 165);
  outline: none;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
