import { configureStore, createSlice } from '@reduxjs/toolkit';

const mathCalculate = (a, b, operator) =>
  operator === '+'
    ? a + b
    : operator === '-'
    ? a - b
    : operator === 'x'
    ? a * b
    : a / b;

const initialState = {
  operator: '',
  operand: 0,
  answer: 0,
  detail: '',
  history: [],
};

const Slice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    addOperand(state, action) {
      if (state.operand.toString().length < 12) {
        // detect 0 input after operator
        state.operand === 0 && state.operator
          ? (state.operand = action.payload)
          : (state.operand = Number(state.operand + action.payload));

        // to fresh restart after equal
        state.answer = !state.operator ? 0 : state.answer;
      } else {
        console.log('reach maximum operand length');
      }
    },
    clearOperand(state) {
      state.operator = '';
      state.operand = 0;
      state.answer = 0;
      state.detail = '';
    },
    setOperator(state, action) {
      // detect changing operator
      if (state.operand === 0 && state.operator) {
        state.operator = action.payload;
        state.detail = `${state.detail.slice(0, -1)} ${state.operator}`;
        return;
      }

      state.answer = !state.operand
        ? state.answer
        : !state.answer
        ? state.operand
        : mathCalculate(
            Number(state.answer),
            Number(state.operand),
            state.operator
          );

      // to continue after equal
      state.operator === ''
        ? (state.detail = `${state.answer} ${action.payload}`)
        : (state.detail = `${state.detail} ${state.operand} ${action.payload}`);

      state.operator = action.payload;
      state.operand = 0;
    },
    calculate(state) {
      // validate operator and operand
      if (state.operator && state.operand) {
        state.answer = mathCalculate(
          Number(state.answer),
          Number(state.operand),
          state.operator
        );
        state.detail = `${state.detail} ${state.operand}`;
        state.history.push([state.detail, state.answer]);
        state.operator = '';
        state.operand = 0;
      } else {
        console.log('out of reach');
      }
    },
    setDecimal(state, action) {
      //check if there is already a decimal
      state.operand.toString().includes('.')
        ? state.operand
        : (state.operand = state.operand + action.payload);
    },
    setPlusMinus(state) {
      state.operand ? (state.operand = state.operand * -1) : 0;
      state.answer ? (state.answer = state.answer * -1) : 0;
      state.operator = '';
    },
  },
});

const store = configureStore({
  reducer: Slice.reducer,
});

export const calcActions = Slice.actions;

export default store;
