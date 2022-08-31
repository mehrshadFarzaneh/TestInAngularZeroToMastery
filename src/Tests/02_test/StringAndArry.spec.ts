import { OurCurrencies, SystemMessage } from "./StringAndArry";

describe('Welcome', () => {
it('Welcome Message Contain UserName', () => {
  const SystemAlertText = SystemMessage("Mehrshad Farzaneh");
  expect(SystemAlertText).toContain("Mehrshad Farzaneh");
})
})

const searchCurrencies = "BTC";
it(searchCurrencies + ' Currency Is Available', () => {
  const OurCurrenciesData = OurCurrencies();
  expect(OurCurrenciesData).toContain(searchCurrencies);
})
