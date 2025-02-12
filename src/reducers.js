import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}
const initialState = baslangicNotlariniGetir(s10chLocalStorageKey);
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOT_EKLE:
      localStorageStateYaz(s10chLocalStorageKey, {
        notlar: [...state.notlar, action.payload],
      });
      return { ...state, notlar: [...state.notlar, action.payload] };
    case NOT_SIL:
      localStorageStateYaz(s10chLocalStorageKey, {
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      });
      return {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
