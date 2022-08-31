// our welcome message contain UserName
export function SystemMessage(userName: string) {
  return "Welcome " + userName + ".";;
}
// the selected Currencies is exist in our Service?
export function OurCurrencies(selectCurrencies?: string) {
  return ["USD", "USDT", "BTC"];
}
